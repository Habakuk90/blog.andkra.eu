echo "removing old docker app"
docker stop app
docker rm app
echo "pulling latest..."
docker pull wahnsinnshub/blog.andkra.eu.frontend:latest

echo "running on port 4200"
docker run -it -d --name app -p 4200:80 wahnsinnshub/blog.andkra.eu.frontend:latest
