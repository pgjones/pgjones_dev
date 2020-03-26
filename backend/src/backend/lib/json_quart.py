import mimetypes
from typing import List, Tuple, Union

from quart import jsonify, request, Response, ResponseReturnValue, safe_join, send_file
from quart.exceptions import NotFound
from quart_trio import QuartTrio

from .chat import Chat
from .typing import JSONReturnValue


class JSONQuart(QuartTrio):
    blogs: List[dict]
    chat: Chat
    feeds: Tuple[bytes, bytes]
    push_promise_paths: List[str]

    async def make_response(self, result: Union[JSONReturnValue, ResponseReturnValue]) -> Response:
        """Turn the result into a full response.

        PortalQuart allows for the ResponseValue to be a dictionary
        which indicates that the response should be JSON.
        """
        if isinstance(result, dict):
            new_result = jsonify(result)
        elif isinstance(result, tuple) and isinstance(result[0], dict):
            new_result = (jsonify(result[0]), *result[1:])  # type: ignore
        else:
            new_result = result  # type: ignore

        return await super().make_response(new_result)

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
