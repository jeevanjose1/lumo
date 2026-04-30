FROM node:22-alpine AS buider

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

CMD [ "npm", 'run', 'build' ]