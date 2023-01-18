FROM registry1.ctdn.net/hub/denoland/deno:latest

WORKDIR /app

COPY deps.ts .

RUN deno cache \
    --lock=lock.json --lock-write \
    deps.ts

ADD app.ts .

RUN deno cache \
    --lock=lock.json --lock-write \
    app.ts

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "app.ts"]