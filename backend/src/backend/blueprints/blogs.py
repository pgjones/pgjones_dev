from quart import Blueprint, ResponseReturnValue, abort, current_app

blueprint = Blueprint("blogs", __name__)


@blueprint.route("/v0/blogs/")
async def get_posts() -> ResponseReturnValue:
    summaries = [
        {
            "date": blog["date"],
            "id": blog["id"],
            "summary": blog["summary"],
            "title": blog["title"],
        }
        for blog in current_app.blogs  # type: ignore
    ]
    return {"posts": summaries}


@blueprint.route("/v0/blogs/<id_>/")
async def get_post(id_: str) -> ResponseReturnValue:
    for blog in current_app.blogs:  # type: ignore
        if blog["id"] == id_:
            return blog
    abort(400)
