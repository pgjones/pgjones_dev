FROM node:18-bullseye-slim as frontend

COPY frontend /frontend/
WORKDIR /frontend/
RUN npm install && npm run build

# hadolint ignore=DL3059
RUN mv /frontend/build/_app /frontend/buildjs
# hadolint ignore=DL3059
RUN mv /frontend/build/static /frontend/buildstatic

FROM python:3.10.1-slim-bullseye

# hadolint ignore=DL3008
RUN apt-get update && apt-get install -y dumb-init --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

EXPOSE 8080 8443
RUN mkdir -p /app
WORKDIR /app
COPY hypercorn.toml /app/
CMD ["pdm", "run", "hypercorn", "--config", "hypercorn.toml", "backend.run:create_app()"]

RUN python -m venv /ve
ENV PATH=/ve/bin:${PATH}

# hadolint ignore=DL3013
RUN pip install --no-cache-dir pdm

COPY backend/pdm.lock backend/pyproject.toml /app/
RUN pdm install --prod --no-lock --no-editable

COPY backend/src/ /app/
COPY --from=frontend /frontend/buildjs/ /app/backend/static/_app/
COPY --from=frontend /frontend/buildstatic/ /app/backend/static/
COPY --from=frontend /frontend/build/ /app/backend/templates/svelte/

RUN gzip --keep --recursive /app/backend/static/*

USER nobody

ARG CI_COMMIT_SHA
ENV GIT_COMMIT $CI_COMMIT_SHA
