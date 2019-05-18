FROM node:10.15.3-alpine

COPY . /app

WORKDIR app

RUN npm i && npm run test

ENTRYPOINT ["npm", "run", "show-numbers"]
