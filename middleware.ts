import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function checkLogin() {
  try {
    const res = await fetch("http://localhost:3002/auth/checkLogin", {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  } catch {
    return null;
  }
}

// 验证是否登录
export async function middleware(request: NextRequest) {
  console.log("rrrrrrrrrequest", request.nextUrl.pathname);

  const isLogin = await checkLogin();

  // 如果是登录页面，如果已经登录了，则跳转到到首页
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (isLogin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    // 如果不是登录页面，还没有登录，则跳转到登录页
    if (!isLogin) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
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
