import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const list = pgTable("list", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
});

export const item = pgTable("item", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  description: text("description").notNull(),
  listId: integer("list_id")
    .notNull()
    .references(() => list.id),
});
