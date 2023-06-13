import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// 退出登录
export async function POST() {
  cookies().set({
    name: "token",
    value: "",
    httpOnly: true,
    maxAge: -1, // -1马上过期  0是当前session n是n秒后失效
  });

  return NextResponse.json({ code: 0 });
}
