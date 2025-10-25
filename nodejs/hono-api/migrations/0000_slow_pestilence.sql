CREATE TABLE "item" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "item_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"description" text NOT NULL,
	"list_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "list" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "list_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_list_id_list_id_fk" FOREIGN KEY ("list_id") REFERENCES "public"."list"("id") ON DELETE no action ON UPDATE no action;