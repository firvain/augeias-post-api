FROM node:lts-alpine3.16
WORKDIR /usr.app
COPY package.json .
RUN yarn install
COPY . .
