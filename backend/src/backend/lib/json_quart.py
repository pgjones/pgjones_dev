import mimetypes
from typing import List, Tuple

from quart import request, Response, safe_join, send_file
from quart.exceptions import NotFound
from quart_trio import QuartTrio

from .chat import Chat


class JSONQuart(QuartTrio):
    blogs: List[dict]
    chat: Chat
    feeds: Tuple[bytes, bytes]
    push_promise_paths: List[str]

    async def send_static_file(self, filename: str) -> Response:
        path = safe_join(self.static_folder, filename)  # type: ignore
        gzip_path = path.with_suffix(path.suffix + ".gz")
        if "gzip" in request.accept_encodings and gzip_path.is_file():
            response = await send_file(gzip_path)
            response.content_type = mimetypes.guess_type(path.name)[0]
            response.content_encoding = "gzip"
            return response
        elif path.is_file():
            return await send_file(path)
        else:
            raise NotFound()
