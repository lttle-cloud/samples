# Static Site Sample | lttle.cloud

This is a statically generated Astro site sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a static website using lttle.cloud's platform.

## Prerequisites

- Node.js and npm installed on your machine. For this example we are using Node.js v22.19.

Make sure you are logged in to both lttle.cloud using `lttle login` and Docker Hub using `docker login` before running the build command.

## Build

First, we need to build the Docker image. Run the following command in the root of this project:

```bash
docker build . -t "<docker-username>/static-site:latest"
```

Then push the image to Docker Hub:

```bash
docker push "<docker-username>/static-site:latest"
```

Replace `<docker-username>` with your Docker Hub username. This command will create a Docker image and push it to Docker Hub.
The image will be tagged as `<docker-username>/static-site:latest`.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy static-site.lttle.yaml --var docker_username=<docker-username>
```

After that you can access your static site at `https://static-site-<docker-username>.eu.lttle.host`, replacing `<docker-username>` with your actual docker username.

You can check our deployment of this sample [https://lttle-demo-static-site-aifrim.eu.lttle.host/](https://lttle-demo-static-site-aifrim.eu.lttle.host/).
