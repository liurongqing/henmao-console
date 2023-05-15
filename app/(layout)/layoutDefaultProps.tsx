import {
  AiOutlineSmile,
  AiOutlineCrown,
  AiOutlineLogout,
} from "react-icons/ai";
import Link from "next/link";
import { Dropdown } from "antd";

export const layoutDefaultProps = {
  layout: "top",
  fixedHeader: true,
  menuItemRender: (item, dom) => <Link href={item.path}>{dom}</Link>,
  avatarProps: {
    src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    size: "small",
    title: "一个男孩子",
    render: (props, dom) => {
      return (
        <Dropdown
          menu={{
            items: [
              {
                key: "logout",
                icon: <AiOutlineLogout />,
                label: "退出登录",
                // onClick: handleLogout,
              },
            ],
          }}
        >
          {dom}
        </Dropdown>
      );
    },
  },
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "欢迎",
        icon: <AiOutlineSmile />,
      },
      {
        path: "/admin",
        name: "管理页",
        icon: <AiOutlineCrown />,
        routes: [
          {
            path: "/admin/sub-page1",
            name: "一级页面",
          },
          {
            path: "/admin/sub-page2",
            name: "二级页面",
          },
          {
            path: "/admin/sub-page3",
            name: "三级页面",
          },
        ],
      },
    ],
  },
};
