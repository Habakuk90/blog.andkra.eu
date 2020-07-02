echo "removing old docker app"
docker-compose -f ./docker/docker-compose.production.yml down
echo "pulling latest..."
docker pull wahnsinnshub/blog.andkra.eu.frontend:latest
docker pull wahnsinnshub/blog.andkra.eu.backend:latest

echo "docker compose up"
docker-compose -f ./docker/docker-compose.production.yml up -d --no-build

