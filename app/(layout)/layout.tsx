"use client";
import { Layout, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import {
  HeaderComponent,
  ContentComponent,
  FooterComponent,
} from "./components";
import "../globals.css";
import Provider from "./Provider";

dayjs.locale("en");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app">
        <Provider>
          <ConfigProvider locale={zhCN}>
            <StyleProvider ssrInline={true}>
              <Layout className="min-h-screen flex flex-col">
                <HeaderComponent />
                <ContentComponent>{children}</ContentComponent>
                <FooterComponent />
              </Layout>
            </StyleProvider>
          </ConfigProvider>
        </Provider>
      </body>
    </html>
  );
}
