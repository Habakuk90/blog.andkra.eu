'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

const controllerName = 'blog-post';

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services[controllerName].search(ctx.query);
    } else {
      entities = await strapi.services[controllerName].find(ctx.query);
    }

    return entities.map(entity => {
      // FIXME: apply this for every media file, on media upload
      // will have to override upload plugin
      entity = prepareImages(entity);

      return sanitizeEntity(entity, { model: strapi.models[controllerName] })
    }
    );
  },
  async findOne(ctx) {
    let entity = await strapi.services[controllerName].findOne(ctx.params);
    entity = prepareImages(entity);
    return sanitizeEntity(entity, { model: strapi.models[controllerName] });
  },
};

function prepareImageUrl(url) {
  const backendUrl = strapi.config.currentEnvironment.backendUrl;
  const port = strapi.config.currentEnvironment.server.port;

  return `${backendUrl}:${port}${url}`;
}

function prepareImages(entity) {
  if (entity.featured_image && entity.featured_image.url) {
    entity.featured_image.url = prepareImageUrl(entity.featured_image.url);
  }

  for (let i = 0; i < entity.post_dynamic.length; i++) {
    const element = entity.post_dynamic[i];
    if (element.media) {
      element.media.map(x => {
        if (x.url) {
          x.url = prepareImageUrl(x.url);
        }

        return x;
      })
    }
  }

  return entity;
}
