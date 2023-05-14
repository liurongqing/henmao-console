"use client";

import { Layout, ConfigProvider } from "antd";
import { SWRConfig } from "swr";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

import "../public/antd.min.css";
import "./globals.css";

dayjs.locale("en");

export default function App({ children }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false, // 窗口聚焦时，不要重新请求
        shouldRetryOnError: false, // 有错误不重试
      }}
    >
      <ConfigProvider locale={zhCN}>
        <Layout className="min-h-screen flex flex-col">{children}</Layout>
      </ConfigProvider>
    </SWRConfig>
  );
}
