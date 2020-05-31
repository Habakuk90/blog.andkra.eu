// https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks

module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
  });