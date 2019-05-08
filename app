#!/bin/sh
hypercorn --config=hypercorn.toml 'run:create_app()'
