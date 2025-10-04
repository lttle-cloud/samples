import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const hello = pgTable("hello", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});
