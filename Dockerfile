FROM node:10-alpine as frontend

# hadolint ignore=DL3018
RUN apk --no-cache add yarn gzip

COPY frontend /frontend/
WORKDIR /frontend/
RUN yarn install && yarn build

RUN gzip --keep /frontend/build/static/js/*; \
    gzip --keep /frontend/build/static/media/*

FROM python:3.7-alpine

EXPOSE 8080 8443
ENTRYPOINT ["dumb-init"]
CMD ["./app"]
COPY app hypercorn.toml /app/

# hadolint ignore=DL3018
RUN apk --no-cache add build-base git libffi-dev

RUN python -m venv /ve
ENV PATH=/ve/bin:${PATH}
# hadolint ignore=DL3013
RUN pip install --no-cache-dir dumb-init poetry

RUN mkdir -p /app/templates /app/static/css /app/static/icons /app/static/js /app/static/media /root/.config/pypoetry

COPY poetry_config.toml /root/.config/pypoetry/config.toml
COPY backend/poetry.lock backend/pyproject.toml /app/
WORKDIR /app
RUN poetry install && poetry cache:clear pypi --all

COPY --from=frontend /frontend/build/index.html /app/templates/
COPY --from=frontend /frontend/build/manifest.json /app/static/
COPY --from=frontend /frontend/build/service-worker.js /app/static/js/
COPY --from=frontend /frontend/build/static/css/* /app/static/css/
COPY --from=frontend /frontend/build/icons/* /app/static/icons/
COPY --from=frontend /frontend/build/static/js/* /app/static/js/
COPY --from=frontend /frontend/build/static/media/* /app/static/media/
COPY backend/src/backend/ /app/

USER nobody

ARG CI_COMMIT_SHA
ENV GIT_COMMIT $CI_COMMIT_SHA
