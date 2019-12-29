#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build --build-arg key=${API_KEY} -t wahnsinnshub/blog.andkra.eu.frontend:latest .
docker push wahnsinnshub/blog.andkra.eu.frontend:latest

# TODO If we are build as release we want to push by the latest release number
