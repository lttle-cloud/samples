# React + Vite Sample | lttle.cloud

This is a React + Vite sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a React application using Vite and lttle.cloud's platform.

This sample has been deployed using [Flash Mode](https://docs.lttle.cloud/docs/resources/machines#flash-mode) on lttle.cloud.

## Prerequisites

- Node.js and npm installed on your machine. For this example we are using Node.js v22.19.
- Docker installed on your machine

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy react-vite.lttle.yaml
```

This will build a Docker image, push it to our registry, and deploy the application. To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your static site at `https://react-vite--samples--public--${tenant}.eu.lttle.host/` where `${tenant}` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://react-vite--samples--public--aifrim.eu.lttle.host/](https://react-vite--samples--public--aifrim.eu.lttle.host/).
