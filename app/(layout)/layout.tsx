"use client";
import { Breadcrumb, Layout, Menu, theme, Dropdown, Space } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { StyleProvider } from "@ant-design/cssinjs";

import type { MenuProps } from "antd";
import "../globals.css";

const { Header, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function handleLogout() {
    console.log("click..1.");
  }
  const items: MenuProps["items"] = [
    {
      key: "2",
      label: <div onClick={handleLogout}>退出登录</div>,
      danger: true,
      icon: <LogoutOutlined />,
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      key: "001",
      label: "游戏管理",
      children: [
        {
          key: "002",
          label: "游戏列表",
        },
      ],
    },
  ];
  // const menuItems = Array(15)
  //   .fill(null)
  //   .map((v, i) => {
  //     return {
  //       key: i,
  //       label: "游戏管理" + i,
  //     };
  //   });

  return (
    <html lang="en">
      <body className="app">
        <StyleProvider ssrInline={true}>
          <Layout className="min-h-screen flex flex-col">
            <Header className="flex fixed w-full z-[1]">
              <div
                className="my-4 mr-6 w-32 h-8 leading-8 bg-white/20 text-white
            text-center tracking-widest
            "
              >
                管理后台
              </div>
              <Menu
                className="flex-1 flex-wrap"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["002"]}
                items={menuItems}
              />

              <Dropdown menu={{ items }} className="text-white/60">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <Space>
                    刘荣清
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Header>
            <Content className="flex flex-col flex-1 px-12 mt-16">
              <Breadcrumb className="my-4" items={[{ title: "首页" }]} />
              <div className="flex-1 p-6 bg-white">{children}</div>
            </Content>
            <Footer className="text-center">
              厦门市狠猫科技有限公司版权所有 ©2023
              <a className="ml-4" target="_blank" href="https://www.henmao.com">
                https://www.henmao.com
              </a>
            </Footer>
          </Layout>
        </StyleProvider>
      </body>
    </html>
  );
}
