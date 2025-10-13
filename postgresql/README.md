# PostgreSQL Database Server Sample | lttle.cloud

This is a sample app demonstrating how to deploy a PostgreSQL database server on [lttle.cloud](https://lttle.cloud).

The sample is deployed using [Manual Flash Mode](https://docs.lttle.cloud/docs/resources/machines#manual) on lttle.cloud.

## Prerequisites

Make sure you are logged in to both lttle.cloud using `lttle login`.

## Deploy

To deploy the PostgreSQL server to lttle.cloud, run:

```bash
lttle deploy postgresql.lttle.yaml
```

This will pull the special flash-mode ready Docker image and deploy it.

After that you can connect to your PostgreSQL server via `psql` like so:

```bash
lttle machine exec --ns samples postgresql -i -t psql -d db -U user -W
```

Where `-d db` is the database name, `-U user` is the username and `-W` will prompt for the password.

Once connected you can run SQL commands like `SELECT CURRENT_TIME;` to verify that everything is working as expected:

```plaintext
psql (17.5 (Debian 17.5-1.pgdg120+1))
Type "help" for help.

db=# select CURRENT_TIME;
    current_time
--------------------
 19:28:34.886504+00
(1 row)

db=#
```
