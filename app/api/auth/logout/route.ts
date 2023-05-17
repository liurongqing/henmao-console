import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 退出登录
export async function POST(request: NextRequest, response: NextResponse) {
  // @ts-ignore
  cookies().set({
    name: "token",
    value: "",
    httpOnly: true,
    maxAge: -1, // -1马上过期  0是当前session n是n秒后失效
  });

  return NextResponse.json({ code: 0 });
}
