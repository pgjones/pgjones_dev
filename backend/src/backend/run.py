from pathlib import Path
from typing import cast, List

from hypercorn.middleware import HTTPToHTTPSRedirectMiddleware
from quart_trio import QuartTrio

from blueprints.serving import blueprint as serving_blueprint


def create_app(production: bool = True) -> QuartTrio:
    app = QuartTrio(__name__)

    @app.before_serving
    async def startup() -> None:
        static_root = app.static_folder
        static_root = cast(str, static_root)
        app.push_promise_paths = ["/service-worker.js"]  # type: ignore
        app.push_promise_paths.extend(_extract_paths(static_root, "css"))  # type: ignore
        app.push_promise_paths.extend(_extract_paths(static_root, "js"))  # type: ignore
        app.push_promise_paths.extend(_extract_paths(static_root, "media"))  # type: ignore

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


if __name__ == "__main__":
    app = create_app(False)
    app.run()
