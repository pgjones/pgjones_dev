from secrets import token_urlsafe
from typing import Optional

from jinja2.exceptions import TemplateNotFound
from quart import (
    Blueprint,
    current_app,
    make_push_promise,
    make_response,
    render_template,
    ResponseReturnValue,
    send_from_directory,
)
from quart.helpers import safe_join, send_file
from werkzeug.exceptions import NotFound
from werkzeug.http import COOP
from werkzeug.sansio.response import Response

blueprint = Blueprint("serving", __name__)


def _apply_security_headers(response: Response, nonce: Optional[str] = None) -> Response:
    response.content_security_policy.default_src = "'self'"
    response.content_security_policy.base_uri = "'self'"
    response.content_security_policy.connect_src = "'self' https://cloudflareinsights.com"
    response.content_security_policy.form_action = "'self'"
    response.content_security_policy.frame_ancestors = "'none'"
    response.content_security_policy.frame_src = "https://www.youtube-nocookie.com"
    response.content_security_policy.img_src = "'self' data:"
    if nonce is not None:
        response.content_security_policy.script_src = (
            f"'self' 'nonce-{nonce}' https://static.cloudflareinsights.com"
        )
        response.content_security_policy.style_src = f"'self' 'nonce-{nonce}'"
    response.cross_origin_opener_policy = COOP.SAME_ORIGIN
    response.headers["Referrer-Policy"] = "no-referrer, strict-origin-when-cross-origin"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@blueprint.route("/")
@blueprint.route("/<path:path>")
async def index(path: Optional[str] = None) -> ResponseReturnValue:
    for push_path in current_app.push_promise_paths:  # type: ignore
        await make_push_promise(push_path)

    if path is None:
        file_name = "index.html"
    else:
        file_name = f"{path.rstrip('/')}/index.html"

    nonce = token_urlsafe(12)
    try:
        body = await render_template(f"svelte/{file_name}", nonce=nonce)
    except TemplateNotFound:
        body = await render_template("svelte/fallback.html", nonce=nonce)

    body = body.replace('type="module"', f'type="module" nonce="{nonce}"')
    response = await make_response(body)
    return _apply_security_headers(response, nonce)


@blueprint.route("/_app/<path:path>")
async def client_static(path: str) -> ResponseReturnValue:
    return await current_app.send_static_file(f"_app/{path}")


@blueprint.route("/tozo/", defaults={"path": ""})
@blueprint.route("/tozo/<path:path>")
async def tozo(path: str) -> ResponseReturnValue:
    try:
        response = await send_from_directory(current_app.root_path, f"tozo/{path}")
    except NotFound:
        response = await send_from_directory(current_app.root_path, f"tozo/{path}/index.html")
    return _apply_security_headers(response)


@blueprint.route("/blog/atom.xml")
async def atom_feed() -> ResponseReturnValue:
    return current_app.feeds[1], {"Content-Type": "text/xml"}  # type: ignore


@blueprint.route("/blog/rss20.xml")
async def rss_feed() -> ResponseReturnValue:
    return current_app.feeds[0], {"Content-Type": "text/xml"}  # type: ignore


@blueprint.route("/manifest.json")
async def manifest() -> ResponseReturnValue:
    path = safe_join(current_app.static_folder, "manifest.json")  # type: ignore
    return await send_file(path)


@blueprint.route("/robots.txt")
async def robots() -> ResponseReturnValue:
    return await render_template("robots.txt")
