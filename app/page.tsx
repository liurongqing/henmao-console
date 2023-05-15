"use client";

import { useState } from "react";
import {
  ProLayout,
  PageContainer,
  ProCard,
  ProBreadcrumb,
} from "@ant-design/pro-components";
import { Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import defaultProps from "./data";

// import "../public/antd.min.css";
// import { redirect } from "next/navigation";
// export default async function HomePage() {
//   redirect("/level");
// }

const HomePage = () => {
  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");

  const proLayoutProps = {
    layout: "top",
    fixedHeader: true,

    menuItemRender: (item, dom) => (
      <div
        onClick={() => {
          setPathname(item.path || "/welcome");
        }}
      >
        {dom}
      </div>
    ),
    avatarProps: {
      src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
      size: "small",
      title: "七妮妮",
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: "logout",
                  icon: <LogoutOutlined />,
                  label: "退出登录",
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    ...defaultProps,
    location: {
      pathname,
    },
    pageTitleRender: false,
    menuExtraRender: () => <h1>123</h1>,
    onMenuHeaderClick: () => {
      console.log("head...");
    },
    actionsRender() {
      return <div>action</div>;
    },
    collapsedButtonRender() {
      return <h1>collased</h1>;
    },
    footerRender() {
      return <h1>footerrender</h1>;
    },
    menuRender() {
      return <h1>menurender</h1>;
    },
    links() {
      return <h1>links</h1>;
    },
  };
  return (
    <ProLayout {...proLayoutProps}>
      <PageContainer fixedHeader>
        <ProCard className="min-h-[800px]">
          <h1>186</h1>
          <h1>187</h1>
          <h1>188</h1>
          <h1>189</h1>
          <h1>190</h1>
          <h1>191</h1>
          <h1>192</h1>
          <h1>193</h1>
          <h1>194</h1>
          <h1>195</h1>
          <h1>196</h1>
          <h1>197</h1>
          <h1>198</h1>
          <h1>199</h1>
          <h1>200</h1>
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default HomePage;
