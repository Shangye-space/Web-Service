FROM node:10

RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app

ENV SKIP_PREFLIGHT_CHECK=true

COPY package*.json ./

COPY . ./

RUN npm install node-sass --sass-binary-name=linux-x64-64

CMD [ "npm" , "run" ,"start:dev"]

EXPOSE 5777