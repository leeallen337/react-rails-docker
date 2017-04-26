FROM ruby:2.4.1

RUN apt-get update && apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs \
  vim

RUN mkdir /app

WORKDIR /app

COPY Gemfile \
  Gemfile.lock \
  /app/

RUN bundle install

COPY . /app
