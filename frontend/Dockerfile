FROM node:6.10.2-slim

RUN apt-get update && apt-get install -y \
  vim

RUN mkdir /app

WORKDIR /app

COPY package.json \
  yarn.lock \
  webpack.config.js \
  .babelrc \
  /app/

RUN yarn install

COPY ./src /app/src

EXPOSE 8080
