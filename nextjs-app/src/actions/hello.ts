import { db } from "@/db/drizzle";
import { hello } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getHello = async () => {
  const whom = await db.select().from(hello).where(eq(hello.id, 1)).limit(1);
  return whom[0];
};

export const upsertHello = async (name: string) => {
  return db
    .insert(hello)
    .values({ id: 1, name })
    .onConflictDoUpdate({
      target: [hello.id],
      set: { name },
    });
};
