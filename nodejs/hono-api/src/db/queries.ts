import { eq } from "drizzle-orm";
import { db } from "./drizzle";
import { item, list } from "./schema";

export const getFullList = async () => {
  return db.select().from(list);
};

export function getListItems(id: number) {
  return db.select().from(item).where(eq(item.listId, id));
}

export const getListItem = async (id: number) => {
  const items = await db.select().from(item).where(eq(item.id, id)).limit(1);
  return items[0];
};

export const updateListItem = async (id: number, description: string) => {
  return db.update(item).set({ description }).where(eq(item.id, id));
};
