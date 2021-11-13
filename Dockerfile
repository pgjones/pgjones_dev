FROM node:16-alpine as frontend

COPY frontend /frontend/
WORKDIR /frontend/
RUN npm install && npm run build

# hadolint ignore=DL3059
RUN mv /frontend/build/_app /frontend/buildjs

FROM python:3.10-alpine

EXPOSE 8080 8443
ENTRYPOINT ["dumb-init"]
CMD ["./app"]
COPY app hypercorn.toml /app/

# hadolint ignore=DL3018
RUN apk --no-cache add build-base cargo gcc git gzip libffi-dev libxml2-dev \
    libxslt-dev musl-dev openssl openssl-dev bsd-compat-headers

# hadolint ignore=DL3059
RUN python -m venv /ve
ENV PATH=/ve/bin:${PATH}
# hadolint ignore=DL3013
RUN pip install --no-cache-dir dumb-init poetry

# hadolint ignore=DL3059
RUN mkdir -p /app/static/_app/ /app/templates/svelte/ /root/.config/pypoetry

COPY backend/poetry.lock backend/pyproject.toml /app/
WORKDIR /app
RUN poetry config virtualenvs.create false \
    && poetry install \
    && poetry cache clear pypi --all --no-interaction

COPY backend/src/backend/ /app/
COPY --from=frontend /frontend/buildjs/ /app/static/_app/
COPY --from=frontend /frontend/build/ /app/templates/svelte/

RUN gzip --keep --recursive /app/static/*

USER nobody

ARG CI_COMMIT_SHA
ENV GIT_COMMIT $CI_COMMIT_SHA
