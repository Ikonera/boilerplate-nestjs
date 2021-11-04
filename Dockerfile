FROM node:fermium-alpine

LABEL maintainer="Gabriel MILLET" contact="gabrielmlt@protonmail.ch"

ENV NODE_ENV=production

COPY . /adminhub-backend
WORKDIR /adminhub-backend

RUN npm i --production --silent
RUN npm run build

EXPOSE 4600

CMD ["npm", "run", "start:prod"]