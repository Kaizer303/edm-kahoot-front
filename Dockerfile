FROM registry.thinknet.co.th/sredev/node:20.12-bun as builder
ARG APP_ENV
RUN apt-get update \
  && apt-get install -y python3 build-essential
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp .env.$APP_ENV .env && \
  bun install && \
  bun run build

FROM builder as tester
WORKDIR /usr/src/app
COPY .env.test .env

FROM tester as unit-test
RUN --mount=type=ssh bun run test:unit

FROM tester as integration-test
RUN --mount=type=ssh bun run test:integration-test

FROM registry.thinknet.co.th/sredev/node:20.12-slim as release
RUN apt-get update
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/dist dist
COPY --from=builder /usr/src/app/public public
COPY --from=builder /usr/src/app/.next .next
COPY --from=builder /usr/src/app/.env .env
COPY --from=builder /usr/src/app/package.json package.json
COPY --from=builder /usr/src/app/tsconfig.server.json tsconfig.server.json
COPY --from=builder /usr/src/app/tsconfig-paths.config.js tsconfig-paths.config.js
CMD ["npm", "run", "start"]
