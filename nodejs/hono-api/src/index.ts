import { serve } from "@hono/node-server";
import { Hono } from "hono";
import {
  getFullList,
  getListItem,
  getListItems,
  updateListItem,
} from "./db/queries";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono from lttle.cloud!");
});

app.get("/lists", async (c) => {
  const lists = await getFullList();

  return c.json(lists);
});

app.get("/lists/:id/items", async (c) => {
  const id = Number(c.req.param("id"));

  const items = await getListItems(id);

  return c.json(items);
});

app.get("/items/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const item = await getListItem(id);

  return c.json(item);
});

app.put("/items/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const { description } = await c.req.json();

  await updateListItem(id, description);

  return c.json({ message: "Item updated" });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
