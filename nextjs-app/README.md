# Next.js Sample | lttle.cloud

This is a Next.js App Router sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a Next.js application using lttle.cloud's platform. It allows you to update the name of a person you want to say hello to, and stores the data in a PostgreSQL database using Drizzle ORM.

## Prerequisites

- Node.js and npm installed on your machine. For this example we are using Node.js v22.19.
- Docker installed on your machine

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Running locally

To run the project locally you will also need to have a PostgreSQL database running and accessible. We have provided a `docker-compose.yml` file to help you set up a local PostgreSQL instance.

1. Start the PostgreSQL database using Docker Compose:

   ```bash
   docker-compose up -d
   ```

2. Create the `.env` file in the root of the project with the following content:

   ```env
   DATABASE_URL=postgres://postgres:password@localhost:5432/postgres
   ```

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy nextjs-app.lttle.yaml
```

This will build two Docker images

1. One for the Next.js application
2. One in order to run `drizzle-kit migrate` to create & migrate the database schema

To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your static site at `https://nextjs-app--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://nextjs-app--samples--public--aifrim.eu.lttle.host/](https://nextjs-app--samples--public--aifrim.eu.lttle.host/).
