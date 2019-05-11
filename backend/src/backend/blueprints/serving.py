from typing import Optional

from quart import (
    Blueprint,
    current_app,
    make_push_promise,
    make_response,
    render_template,
    ResponseReturnValue,
)
from quart.static import safe_join, send_file

blueprint = Blueprint("serving", __name__)


@blueprint.route("/")
@blueprint.route("/<path:path>")
async def index(path: Optional[str] = None) -> ResponseReturnValue:
    for push_path in current_app.push_promise_paths:
        await make_push_promise(push_path)

    response = await make_response(await render_template("index.html"))
    response.headers[
        "Content-Security-Policy"
    ] = "default-src 'self'; style-src 'self' 'unsafe-inline'"
    response.headers["Referrer-Policy"] = "no-referrer, strict-origin-when-cross-origin"
    response.headers["Strict-Transport-Security"] = "max-age=63072000"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@blueprint.route("/service-worker.js")
async def service_worker() -> ResponseReturnValue:
    path = safe_join(current_app.static_folder, "js", "service-worker.js")
    return await send_file(path)


@blueprint.route("/manifest.json")
async def manifest() -> ResponseReturnValue:
    path = safe_join(current_app.static_folder, "manifest.json")
    return await send_file(path)
