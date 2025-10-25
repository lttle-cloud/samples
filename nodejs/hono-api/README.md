# Node.js Hono API Sample | lttle.cloud

This is a Node.js Hono API sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a simple CRUD API using the Hono framework on lttle.cloud's platform. The API allows you to create, read, update, and delete items stored in a PostgreSQL database using Drizzle ORM.

## Prerequisites

- Node.js and npm installed on your machine. For this example we are using Node.js v22
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

3. Migrate the database schema using Drizzle Kit:

   ```bash
   npm run migrate
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy hono-api.lttle.yaml
```

This will build three Docker images

1. One for the Hono API
2. One in order to run `drizzle-kit migrate` to create & migrate the database schema
3. One in order to run `npm run seed` to seed the database with initial data.

Both latter images will run only once during the deployment process and the machines they run on will be removed afterwards.

To understand how we manage to build you can checkout our documentation: [lttle.cloud Docs | Building](https://docs.lttle.cloud/docs/building-and-deploying/building).

After that you can access your static site at `https://hono-api--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://hono-api--samples--public--aifrim.eu.lttle.host/](https://hono-api--samples--public--aifrim.eu.lttle.host/).
