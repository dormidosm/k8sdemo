FROM node:lts-alpine

EXPOSE 5000

WORKDIR /usr/src/app

COPY hello-http.js .
COPY package*.json ./

RUN npm install

CMD ["npm", "start"]
