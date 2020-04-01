import weakref

from quart import _app_ctx_stack, _request_ctx_stack, Quart, Request
from quart.signals import (
    appcontext_pushed,
    appcontext_tearing_down,
    got_request_exception,
    request_started,
)
from sentry_sdk.hub import Hub
from sentry_sdk.integrations import Integration
from sentry_sdk.integrations._wsgi_common import _filter_headers
from sentry_sdk.utils import capture_internal_exceptions, event_from_exception

if False:
    from typing import Any
    from typing import Dict
    from typing import Union
    from typing import Callable


class QuartIntegration(Integration):
    identifier = "quart"

    transaction_style = None

    def __init__(self, transaction_style="endpoint"):
        # type: (str) -> None
        TRANSACTION_STYLE_VALUES = ("endpoint", "url")  # noqa
        if transaction_style not in TRANSACTION_STYLE_VALUES:
            raise ValueError(
                "Invalid value for transaction_style: %s (must be in %s)"
                % (transaction_style, TRANSACTION_STYLE_VALUES)
            )
        self.transaction_style = transaction_style

    @staticmethod
    def setup_once():
        # type: () -> None
        appcontext_pushed.connect(_push_appctx)
        appcontext_tearing_down.connect(_pop_appctx)
        request_started.connect(_request_started)
        got_request_exception.connect(_capture_exception)


def _push_appctx(*args, **kwargs):
    # type: (*Quart, **Any) -> None
    hub = Hub.current
    if hub.get_integration(QuartIntegration) is not None:
        # always want to push scope regardless of whether app might
        # already have (not the case for CLI for example)
        scope_manager = hub.push_scope()
        scope_manager.__enter__()
        _app_ctx_stack.top.sentry_sdk_scope_manager = scope_manager
        with hub.configure_scope() as scope:
            scope._name = "quart"


def _pop_appctx(*args, **kwargs):
    # type: (*Quart, **Any) -> None
    scope_manager = getattr(_app_ctx_stack.top, "sentry_sdk_scope_manager", None)
    if scope_manager is not None:
        scope_manager.__exit__(None, None, None)


def _request_started(sender, **kwargs):
    # type: (Quart, **Any) -> None
    hub = Hub.current
    integration = hub.get_integration(QuartIntegration)
    if integration is None:
        return

    app = _app_ctx_stack.top.app
    with hub.configure_scope() as scope:
        request = _request_ctx_stack.top.request
        weak_request = weakref.ref(request)
        scope.add_event_processor(
            _make_request_event_processor(
                app, weak_request, integration  # type: ignore
            )
        )


def _make_request_event_processor(app, weak_request, integration):
    # type: (Quart, Callable[[], Request], QuartIntegration) -> Callable
    def inner(event, hint):
        # type: (Dict[str, Any], Dict[str, Any]) -> Dict[str, Any]
        request = weak_request()

        # if the request is gone we are fine not logging the data from
        # it.  This might happen if the processor is pushed away to
        # another thread.
        if request is None:
            return event

        try:
            if integration.transaction_style == "endpoint":
                event["transaction"] = request.url_rule.endpoint  # type: ignore
            elif integration.transaction_style == "url":
                event["transaction"] = request.url_rule.rule  # type: ignore
        except Exception:  # nosec
            pass

        with capture_internal_exceptions():
            # TODO: Figure out what to do with request body. Methods on request
            # are async, but event processors are not.

            request_info = event.setdefault("request", {})

            request_info["url"] = "%s://%s%s" % (request.scheme, request.host, request.path)

            request_info["query_string"] = request.query_string
            request_info["method"] = request.method
            request_info["env"] = {"REMOTE_ADDR": request.remote_addr}
            request_info["headers"] = _filter_headers(dict(request.headers))

        return event

    return inner


def _capture_exception(sender, exception, **kwargs):
    # type: (Quart, Union[ValueError, BaseException], **Any) -> None
    hub = Hub.current
    if hub.get_integration(QuartIntegration) is None:
        return
    event, hint = event_from_exception(
        exception,
        client_options=hub.client.options,  # type: ignore
        mechanism={"type": "quart", "handled": False},
    )

    hub.capture_event(event, hint=hint)
