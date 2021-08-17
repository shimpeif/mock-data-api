## Dockerfile for Node GraphQL server

FROM node:14-alpine

## Change working directory
WORKDIR /usr/src/app

## RUN npm install -g nodemon

## Copy package.json and package-lock.json
COPY ./package*.json ./

## Install packages without output on the terminal
RUN npm install --silent

## Copy app source code from local workingdirectory to the docker working directory
COPY . .

## Port number
EXPOSE 5050

## Execute a command when creating a container
CMD ["npm", "run", "dev"]

