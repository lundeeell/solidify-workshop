FROM node:8.11

WORKDIR /app

COPY lib ./lib

COPY package-lock.json package.json ./

RUN npm install --production

CMD npm start