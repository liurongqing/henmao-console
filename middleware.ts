import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function getData() {
  const res = await fetch("http://localhost:3002/auth/checkLogin", {
    method: "POST",
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export async function middleware(request: NextRequest) {
  console.log("rrrrrrrrrequest", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/level")) {
    // return NextResponse.rewrite(new URL("/login1", request.url));
    const data = await getData();
    console.log("data", { data });
    // return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
