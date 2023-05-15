"use client";
import { ConfigProvider } from "antd";
import { ProLayout, PageContainer, ProCard } from "@ant-design/pro-components";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { layoutSettings } from "./layoutSettings";

dayjs.locale("en");

const RootLayout = ({ children }) => {
  console.log("layout layout...");
  return (
    <ConfigProvider locale={zhCN}>
      <ProLayout {...layoutSettings}>
        <PageContainer fixedHeader>
          <ProCard className="min-h-[calc(100vh-120px)]">{children}</ProCard>
        </PageContainer>
      </ProLayout>
    </ConfigProvider>
  );
};

export default RootLayout;
