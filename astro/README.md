# Astro Sample | lttle.cloud

This is a statically generated Astro site sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a static website using lttle.cloud's platform.

## Prerequisites

- Node.js and npm installed on your machine. For this example we are using Node.js v22.19.
- Docker installed on your machine

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy astro.lttle.yaml
```

This will build the Docker image, push it to our internal registry, and deploy the static site. To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your static site at `https://astro--samples--public--${tenant}.eu.lttle.host/` where `${tenant}` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://astro--samples--public--aifrim.eu.lttle.host/](https://astro--samples--public--aifrim.eu.lttle.host/).
