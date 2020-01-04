# FIXME: STRAPI base somehow got 1 GB of diskspace under /usr/
FROM strapi/base

WORKDIR /srv/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

ENV NODE_ENV production

CMD ["yarn", "start"]
