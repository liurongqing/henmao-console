"use client";
import { Layout, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "../globals.css";

dayjs.locale("en");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app">
        <ConfigProvider locale={zhCN}>
          <StyleProvider ssrInline={true}>
            <Layout className="min-h-screen flex flex-col">{children}</Layout>
          </StyleProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}