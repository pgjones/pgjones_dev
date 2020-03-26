from typing import Set

import trio


class Chat:
    def __init__(self) -> None:
        self.send, self.receive = trio.open_memory_channel(0)
        self.connections: Set[trio.abc.SendChannel] = set()

    def register(self, send: trio.abc.SendChannel) -> trio.abc.SendChannel:
        self.connections.add(send)
        return self.send.clone()

    async def broadcast(self) -> None:
        async with self.send, self.receive:
            async for data in self.receive:
                for connection in self.connections:
                    await connection.send(data)

    def unregister(self, send: trio.abc.SendChannel) -> None:
        self.connections.remove(send)
