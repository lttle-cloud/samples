# Custom Nginx Server with Dockerfile | lttle.cloud

This is a sample project that demonstrates how to create a custom Nginx server with a specific `index.html` file using a Dockerfile on lttle.cloud.

## Prerequisites

Docker installed on your machine.

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy nginx-custom-dockerfile.lttle.yaml
```

This will build the Docker image using the provided Dockerfile and deploy the Nginx server. To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your Nginx server at `https://nginx-custom-dockerfile--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://nginx-custom-dockerfile--samples--public--aifrim.eu.lttle.host/](https://nginx-custom-dockerfile--samples--public--aifrim.eu.lttle.host/).
