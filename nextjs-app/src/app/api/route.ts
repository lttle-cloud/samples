import { getHello, upsertHello } from "@/actions/hello";
import { NextResponse } from "next/server";

export async function GET() {
  const hello = await getHello();

  const whom = hello?.name ?? "World";

  return NextResponse.json({ whom });
}

export async function POST(request: Request) {
  const { whom } = await request.json();

  console.log("POST /api", { whom });

  if (typeof whom !== "string" || whom.length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  await upsertHello(whom);

  return NextResponse.json({ success: true });
}
