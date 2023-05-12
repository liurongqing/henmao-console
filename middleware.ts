import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.error("request.nextUrl.pathname", request.nextUrl.pathname);

  const response = NextResponse.next();
  return response;
  // return NextResponse.redirect(new URL('/home', request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/api/*",
// };
// export const runtime = 'nodejs';
export const config = {
  matcher: ["/api", "/level"],
};
