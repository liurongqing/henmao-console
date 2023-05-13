"use client";

import { Menu, Dropdown, Layout, Space } from "antd";
import { LogoutOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import { STORAGE_KEY } from "@/consts";
import { storage } from "@/utils";

const { Header, Content, Footer } = Layout;

// 请求用户信息与头像
export const HeaderComponent = () => {
  const router = useRouter();
  const pathname = usePathname();

  function handleLogout() {
    storage.removeItem(STORAGE_KEY.TOKEN);
    storage.removeItem(STORAGE_KEY.NICKNAME);
    storage.removeItem(STORAGE_KEY.USERNAME);
    router.replace(`/login?redirect=${pathname}`);
  }

  // const nickname: string = storage.getItem(STORAGE_KEY.NICKNAME);

  const items = [
    {
      key: "2",
      label: <div onClick={handleLogout}>退出登录</div>,
      danger: true,
      icon: <LogoutOutlined />,
    },
  ];

  const menuItems = [
    {
      key: "001",
      label: "游戏管理",
      children: [
        {
          key: "001-1",
          label: <Link href="/level">关卡管理</Link>,
        },
      ],
    },
    {
      key: "002",
      label: "系统管理",
      children: [
        {
          key: "002-1",
          label: <Link href="/user">用户管理</Link>,
        },
        {
          key: "002-2",
          label: "用户组管理",
        },
        {
          key: "002-3",
          label: "角色管理",
        },
        {
          key: "002-4",
          label: "角色组管理",
        },
        {
          key: "002-5",
          label: "权限管理",
        },
      ],
    },
  ];

  return (
    <Header className="flex fixed w-full z-[1]">
      <div className="my-4 mr-6 w-32 h-8 leading-8 bg-white/20 text-white text-center">
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
            {/* <div>{nickname}</div> */}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};
