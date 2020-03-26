import trio
from quart import Blueprint, current_app, websocket

blueprint = Blueprint("chat", __name__)


@blueprint.websocket("/v0/chat/")
async def chat() -> None:
    try:
        send, receive = trio.open_memory_channel(0)
        broadcast = current_app.chat.register(send)
        async with send, receive:
            async with trio.open_nursery() as nursery:
                nursery.start_soon(_producer, broadcast)
                nursery.start_soon(_consumer, receive)
    finally:
        current_app.chat.unregister(send)


async def _producer(channel: trio.abc.ReceiveChannel) -> None:
    async with channel:
        while True:
            data = await websocket.receive()
            await channel.send(data)


async def _consumer(channel: trio.abc.SendChannel) -> None:
    async for data in channel:
        await websocket.send(data)
