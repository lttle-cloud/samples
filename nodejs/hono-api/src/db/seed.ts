import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import { item, list } from "./schema";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await seed(db, { list, item }).refine((f) => ({
    list: {
      columns: {
        name: f.country(),
      },
      count: 2,
      with: {
        item: 3,
      },
    },
    item: {
      columns: {
        description: f.loremIpsum({ sentencesCount: 1 }),
      },
      count: 3,
    },
  }));
}

main();
