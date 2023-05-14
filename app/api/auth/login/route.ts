import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOGIN_API } from "@/consts";

// 登录
export async function POST(request: NextRequest) {
  const values = await request.json();
  try {
    const res = await fetch(LOGIN_API, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (data.code === 0) {
      const { token } = data.data;
      // 不知道为什么是只读，但是可以设置
      // @ts-ignore
      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        maxAge: 7200, // 与服务端一致
      });
    }
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ code: -1, e, message: e.message });
  }
}
