FROM node:12-alpine as frontend

# hadolint ignore=DL3018
RUN apk --no-cache add yarn

COPY frontend /frontend/
WORKDIR /frontend/
RUN yarn install && yarn run export

FROM python:3.8-alpine

EXPOSE 8080 8443
ENTRYPOINT ["dumb-init"]
CMD ["./app"]
COPY app hypercorn.toml /app/

# hadolint ignore=DL3018
RUN apk --no-cache add build-base git gzip libffi-dev libxml2-dev libxslt-dev openssl openssl-dev bsd-compat-headers

RUN python -m venv /ve
ENV PATH=/ve/bin:${PATH}
# hadolint ignore=DL3013
RUN pip install --no-cache-dir dumb-init poetry

RUN mkdir -p /app/static/sapper /root/.config/pypoetry

COPY backend/poetry.lock backend/pyproject.toml /app/
WORKDIR /app
RUN poetry config virtualenvs.create false \
    && poetry install \
    && poetry cache clear pypi --all --no-interaction

COPY backend/src/backend/ /app/
COPY --from=frontend /frontend/__sapper__/export/ /app/static/sapper/

RUN gzip --keep /app/static/css/*; \
    gzip --keep /app/static/img/*; \
    gzip --keep /app/static/js/*; \
    gzip --keep /app/static/media/*

USER nobody

ARG CI_COMMIT_SHA
ENV GIT_COMMIT $CI_COMMIT_SHA
