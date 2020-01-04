# FIXME: STRAPI base somehow got 1 GB of diskspace under /usr/
FROM strapi/base

WORKDIR /srv/app

COPY ./package.json ./
# removed package-lock here because we are using a local provider for now
# since it is referenced in plugin-upload. NPM package has to be updated
# COPY ./package-lock.json ./
# we have to copy providers/strapi-provider-upload-custom first, so it is available in npm install
COPY ./providers/ ./providers

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

ENV NODE_ENV production

CMD ["npm", "run", "start"]
