from quart import abort, Blueprint, current_app

from lib.typing import JSONReturnValue

blueprint = Blueprint("blogs", __name__)


@blueprint.route("/v0/blogs/")
async def get_posts() -> JSONReturnValue:
    summaries = [
        {"date": blog["date"], "id": blog["id"], "summary": blog["summary"], "title": blog["title"]}
        for blog in current_app.blogs
    ]
    return {"posts": summaries}


@blueprint.route("/v0/blogs/<id_>/")
async def get_post(id_: str) -> JSONReturnValue:
    for blog in current_app.blogs:
        if blog["id"] == id_:
            return blog
    abort(400)
