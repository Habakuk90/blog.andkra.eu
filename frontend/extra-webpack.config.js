const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  plugins: [
    // new webpack.EnvironmentPlugin(['GHOST_API_KEY']),
    new webpack.DefinePlugin({
      'process.env': {
        STRAPI_URL: JSON.stringify(process.env.STRAPI_URL),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    })
  ]
}
