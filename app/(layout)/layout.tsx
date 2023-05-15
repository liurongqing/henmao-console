"use client";
import { ConfigProvider } from "antd";
import { ProLayout, PageContainer, ProCard } from "@ant-design/pro-components";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { layoutDefaultProps } from "./layoutDefaultProps";

dayjs.locale("en");

const RootLayout = ({ children }) => {
  console.log("layout层 layout...");
  return (
    <ConfigProvider locale={zhCN}>
      <ProLayout {...layoutDefaultProps}>
        <PageContainer fixedHeader>
          <ProCard className="min-h-[calc(100vh-120px)]">{children}</ProCard>
        </PageContainer>
      </ProLayout>
    </ConfigProvider>
  );
};

export default RootLayout;
