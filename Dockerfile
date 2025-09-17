FROM oven/bun:latest
LABEL authors="a2n2k3p4t"

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

EXPOSE 8001

CMD ["bun", "run", "src/index.ts"]
