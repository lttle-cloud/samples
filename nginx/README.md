# Nginx Samples | lttle.cloud

You will find here two simple Nginx server hosting samples [lttle.cloud](https://lttle.cloud). It demonstrates how to deploy a static website using lttle.cloud's platform.

1. A simple Nginx with the default configuration.
2. A simple Nginx with a custom `index.html` file.

## Prerequisites

- Docker installed on your machine
- A static website to host. For this example we are using a simple HTML file.

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy Nginx with default configuration

To deploy the project to lttle.cloud, run:

```bash
lttle deploy nginx.lttle.yaml
```

### Deploy Nginx with a custom index.html

To deploy the project to lttle.cloud, run:

```bash
lttle deploy nginx-custom.lttle.yaml
```

## Results

This will build the Docker image, push it to our internal registry, and deploy the static site. To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your static site at `https://nginx--samples--public--${tenant}.eu.lttle.host/` (default) or `https://nginx-custom--samples--public--${tenant}.eu.lttle.host/` (custom) where `${tenant}` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://nginx--samples--public--aifrim.eu.lttle.host/](https://nginx--samples--public--aifrim.eu.lttle.host/) (default) or [https://nginx-custom--samples--public--aifrim.eu.lttle.host/](https://nginx-custom--samples--public--aifrim.eu.lttle.host/) (custom).
