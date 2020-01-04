'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'local',
  name: 'Local server',
  init: (config) => {
    return {
      upload: (file) => {
        return new Promise((resolve, reject) => {

          if (isJimpSupportedMime(file.mime)) {
            jimp.read(file.buffer, (err, img) => {
              if (err) return reject(err);
              var height = img.getHeight();
              var width = img.getWidth();

              img
                .resize(width / 3, height / 3)
                .quality(60)
                .write(path.join(strapi.config.public.path, `/uploads/${file.hash}${file.ext}`), (err, x) => {
                  if (err) return reject(err);

                  // getting new file size
                  x.getBase64(file.mime, (x, y) => {
                    var stringLength = y.length - `data:${file.mime};base64,`.length;
                    var sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
                    var sizeInKb = sizeInBytes / 1024;

                    var rounded = (Math.round(sizeInKb * 100) / 100).toFixed(2);
                    file.size = rounded;
                  });

                  // appending server url
                  const backendUrl = strapi.config.currentEnvironment.backendUrl;
                  const port = strapi.config.currentEnvironment.server.port;
                  file.url = `${backendUrl}:${port}/uploads/${file.hash}${file.ext}`;
                  resolve();
                });
            });
          }
          else {
            // write file in public/assets folder
            fs.writeFile(path.join(strapi.config.public.path, `/uploads/${file.hash}${file.ext}`), file.buffer, (err) => {
              if (err) {
                return reject(err);
              }
              const backendUrl = strapi.config.currentEnvironment.backendUrl;
              const port = strapi.config.currentEnvironment.server.port;

              file.url = `${backendUrl}:${port}/uploads/${file.hash}${file.ext}`;
              resolve();
            });
          }

        });
      },
      delete: (file) => {
        return new Promise((resolve, reject) => {
          const filePath = path.join(strapi.config.public.path, `/uploads/${file.hash}${file.ext}`);

          if (!fs.existsSync(filePath)) {
            return resolve('File doesn\'t exist');
          }

          // remove file from public/assets folder
          fs.unlink(filePath, (err) => {
            if (err) {
              return reject(err);
            }

            resolve();
          });
        });
      }
    };
  }
};


function isJimpSupportedMime(mime) {
  const supportedMimeTypes = [
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/tiff'
  ];
  return supportedMimeTypes.some(item => item === mime);
}
