from typing import Tuple, Union

JSONResponseValue = dict

# The possible types returned by a route function.
JSONReturnValue = Union[
    JSONResponseValue,
    Tuple[JSONResponseValue, dict],
    Tuple[JSONResponseValue, int],
    Tuple[JSONResponseValue, int, dict],
]
