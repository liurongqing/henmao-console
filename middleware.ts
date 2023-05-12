import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("rrrrrrrrrequest", request.nextUrl.pathname, request.url);

  if (request.nextUrl.pathname.startsWith("/level")) {
    // return NextResponse.rewrite(new URL("/login1", request.url));
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
