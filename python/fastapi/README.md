# FastAPI Sample | lttle.cloud

This is a simple FastAPI application sample for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a basic FastAPI application on lttle.cloud's platform.

## Running locally

1. Install the dependencies using uv:

   ```bash
   uv sync --frozen
   ```

2. Start the development server:

   ```bash
   uv run uvicorn main:app --reload
   ```

The application will be accessible at [`http://localhost:8000`](http://localhost:8000).

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy fastapi.lttle.yaml
```

This will build a Docker image for the FastAPI application and deploy it to lttle.cloud.

After that you can access your FastAPI application at `https://fastapi--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://fastapi--samples--public--aifrim.eu.lttle.host/](https://fastapi--samples--public--aifrim.eu.lttle.host/).
