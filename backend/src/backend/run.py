from datetime import date, datetime, timezone
from pathlib import Path
from typing import cast, List, Tuple

import toml
from feedgen.feed import FeedGenerator
from hypercorn.middleware import HTTPToHTTPSRedirectMiddleware

from blueprints.blogs import blueprint as blogs_blueprint
from blueprints.serving import blueprint as serving_blueprint
from lib.json_quart import JSONQuart


def create_app(production: bool = True) -> JSONQuart:
    app = JSONQuart(__name__)

    @app.before_serving
    async def startup() -> None:
        static_root = app.static_folder
        static_root = cast(str, static_root)
        app.push_promise_paths = ["/service-worker.js"]
        app.push_promise_paths.extend(_extract_paths(static_root, "css"))
        app.push_promise_paths.extend(_extract_paths(static_root, "js"))
        app.push_promise_paths.extend(_extract_paths(static_root, "media"))
        app.blogs = _extract_blogs(app.root_path / app.template_folder)  # type: ignore
        app.feeds = _create_feeds(app.blogs)

    app.register_blueprint(blogs_blueprint)
    app.register_blueprint(serving_blueprint)

    if production:
        return HTTPToHTTPSRedirectMiddleware(app, "pgjones.dev")  # type: ignore
    else:
        return app


def _extract_paths(static_root: str, subfolder: str) -> List[str]:
    static_path = Path(static_root) / subfolder
    if static_path.is_dir():
        return [f"/static/{subfolder}/{path.name}" for path in static_path.iterdir()]
    else:
        return []


def _extract_blogs(template_root: Path) -> List[dict]:
    blogs: List[dict] = []
    path = template_root / "blogs"
    for blog in path.glob("*.toml"):
        blogs.append(toml.loads(blog.read_text()))  # type: ignore
    return blogs


def _create_feeds(blogs: List[dict]) -> Tuple[bytes, bytes]:
    feed = FeedGenerator()
    feed.title("PGJones' blog")
    feed.author({"name": "PGJones", "email": "philip.graham.jones@googlemail.com"})
    feed.logo("https://pgjones.dev/static/media/MeSudbury.bd83a6a4.jpeg")
    feed.link(href="https://pgjones.dev/blog/", rel="alternate")
    feed.link(href="https://pgjones.dev/blog/feed.atom", rel="self")
    feed.language("en")
    feed.id("https://pgjones.dev/blog/")
    feed.description("Blog posts from PGJones")
    for blog in blogs:
        entry = feed.add_entry()
        entry.id(f"https://pgjones.dev/blog/{blog['id']}/")
        entry.link(href=f"https://pgjones.dev/blog/{blog['id']}/")
        entry.title(blog["title"])
        entry.summary(blog["summary"])
        published = datetime.combine(date.fromisoformat(blog["date"]), datetime.min.time())
        entry.published(published.astimezone(timezone.utc))
    return feed.rss_str(), feed.atom_str()


if __name__ == "__main__":
    app = create_app(False)
    app.run()
