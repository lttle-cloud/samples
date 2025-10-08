# Nginx Samples | lttle.cloud

This directory contains multiple samples of hosting Nginx servers on lttle.cloud.

1. **Default Nginx Server**: This sample uses the official Nginx Docker image to run a default Nginx server.
2. **Custom Nginx Server**: This sample demonstrates how to create a custom Nginx server with a specific `index.html` file.
3. **Custom Nginx Server with Auto Build**: This sample shows how to use lttle.cloud's auto build feature to create a custom Nginx server.

All of these samples have been deployed using [Flash Mode](https://docs.lttle.cloud/docs/resources/machines#flash-mode) on lttle.cloud.

## Prerequisites

Docker installed on your machine.

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploying the Samples

Visit the respective directories for each sample to find detailed instructions on how to deploy them.

- [Default Nginx Server](./default/README.md)
- [Custom Nginx Server](./custom-dockerfile/README.md)
- [Custom Nginx Server with Auto Build](./custom-build-auto/README.md)
