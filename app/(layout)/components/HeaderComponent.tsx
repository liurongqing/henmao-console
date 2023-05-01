import { Menu, Dropdown, Layout, Space } from "antd";
import { LogoutOutlined, DownOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

export const HeaderComponent = () => {
  function handleLogout() {}

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
          key: "002",
          label: "关卡管理",
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
            刘荣清
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};
