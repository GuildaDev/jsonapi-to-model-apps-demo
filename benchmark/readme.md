# Run benchmark

## Build, 
docker build -t my-tsx-app .

# Run and show benchmark results
docker run --name my-tsx-app-container --memory="256m" --cpus="1" -d my-tsx-app