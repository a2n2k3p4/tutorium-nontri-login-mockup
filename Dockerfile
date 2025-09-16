FROM oven/bun:latest
LABEL authors="a2n2k3p4t"

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install
