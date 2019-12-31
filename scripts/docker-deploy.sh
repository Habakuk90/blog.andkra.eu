#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

cd $TRAVIS_BUILD_DIR/frontend

docker build --build-arg url=${STRAPI_URL} -t wahnsinnshub/blog.andkra.eu.frontend:latest .
docker push wahnsinnshub/blog.andkra.eu.frontend:latest

cd $TRAVIS_BUILD_DIR/backend

docker build -t wahnsinnshub/blog.andkra.eu.backend:latest .
docker push wahnsinnshub/blog.andkra.eu.backend:latest

# TODO If we are build as release we want to push by the latest release number
