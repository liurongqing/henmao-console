import { NextResponse } from "next/server";

export async function GET(request, context: { params }) {
  return NextResponse.json({ hello: "Next.js" });
}
