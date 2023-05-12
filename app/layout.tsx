"use client";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "../public/antd.min.css";
import "./globals.css";

dayjs.locale("en");
{
  /* <link rel="icon" href="/favicon.ico" sizes="any" /> */
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 在这验证接口，成功，则进入页面
  // request()
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <html lang="en">
      <body className="app">
        <ConfigProvider locale={zhCN}>
          <Layout className="min-h-screen flex flex-col">{children}</Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
