from typing import Optional

from quart import Blueprint, current_app, make_push_promise, render_template, ResponseReturnValue
from quart.static import safe_join, send_file, send_from_directory

blueprint = Blueprint("serving", __name__)


@blueprint.route("/")
@blueprint.route("/<path:path>")
async def index(path: Optional[str] = None) -> ResponseReturnValue:
    for push_path in current_app.push_promise_paths:
        await make_push_promise(push_path)

    if path is None:
        file_name = "index.html"
    else:
        file_name = f"{path.rstrip('/')}/index.html"

    sapper_dir = current_app.static_folder / "sapper"
    response = await send_from_directory(sapper_dir, file_name)
    return response
    response.headers["Content-Security-Policy"] = ""
    response.content_security_policy.default_src = "'self'"
    response.content_security_policy.base_uri = "'self'"
    response.content_security_policy.form_action = "'self'"
    response.content_security_policy.frame_ancestors = "'none'"
    response.content_security_policy.img_src = "'self' data:"
    response.content_security_policy.style_src = "'self' 'unsafe-inline'"

    response.headers["Referrer-Policy"] = "no-referrer, strict-origin-when-cross-origin"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@blueprint.route("/client/<path:path>")
async def client_static(path: str) -> ResponseReturnValue:
    client_dir = current_app.static_folder / "sapper" / "client"
    return await send_from_directory(client_dir, path)


@blueprint.route("/blog/atom.xml")
async def atom_feed() -> ResponseReturnValue:
    return current_app.feeds[1], {"Content-Type": "text/xml"}


@blueprint.route("/blog/rss20.xml")
async def rss_feed() -> ResponseReturnValue:
    return current_app.feeds[0], {"Content-Type": "text/xml"}


@blueprint.route("/service-worker.js")
async def service_worker() -> ResponseReturnValue:
    path = safe_join(current_app.static_folder, "js", "service-worker.js")
    return await send_file(path)


@blueprint.route("/manifest.json")
async def manifest() -> ResponseReturnValue:
    path = safe_join(current_app.static_folder, "manifest.json")
    return await send_file(path)


@blueprint.route("/robots.txt")
async def robots() -> ResponseReturnValue:
    return await render_template("robots.txt")
