#!/bin/sh
set -euo pipefail

cd $TRAVIS_BUILD_DIR/frontend
npm install
npm run test
npm run lint
npm run build

echo "FRONTEND SUCCESSFULLY BUILDED"

cd $TRAVIS_BUILD_DIR/backend
npm install
npm run build

echo "BACKEND SUCCESSFULLY BUILDED"