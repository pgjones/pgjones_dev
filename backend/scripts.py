# This is a temporary workaround till Poetry supports scipts, see
# https://github.com/sdispater/poetry/issues/241.
from subprocess import check_call


def format() -> None:
    check_call(["black", "--check", "--diff", "src/", "tests/"])
    check_call(["isort", "--diff", "--check", "--recursive", "src", "tests"])


def reformat() -> None:
    check_call(["black", "src/", "tests/"])
    check_call(["isort", "--apply", "--recursive", "src", "tests"])


def lint() -> None:
    check_call(["flake8", "src/", "tests/"])
    check_call(["mypy", "src/backend/", "tests/"])
    check_call(["bandit", "-r", "src/"])


def start() -> None:
    check_call(["python", "src/backend/run.py"])


def test() -> None:
    check_call(["pytest", "tests/"])
