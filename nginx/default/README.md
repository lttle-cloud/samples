# Default Nginx Server | lttle.cloud

This is a sample project that uses the official Nginx Docker image to run a default Nginx server on lttle.cloud.

## Prerequisites

Docker installed on your machine.

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy nginx-default.lttle.yaml
```

This will deploy the Nginx server using the official Nginx Docker image. To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your Nginx server at `https://nginx-default--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://nginx-default--samples--public--aifrim.eu.lttle.host/](https://nginx-default--samples--public--aifrim.eu.lttle.host/).
