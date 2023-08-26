import {
  AiFillDashboard,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { GiCat } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { Layout } from "antd";
import Link from "next/link";
const { Footer } = Layout;

export const layoutDefaultProps = {
  layout: "top",
  fixedHeader: true,
  pageTitleRender: false,
  title: "HenMao",
  logo: <GiCat color="black" />,
  // footerRender: () => <div className="text-center text-gray-500 py-4">@2023 厦门市狠猫科技有限公司版权所有</div>,
  footerRender: () => (
    <Footer className="text-center">
      厦门市狠猫科技有限公司版权所有 ©2023
      <a className="ml-4" target="_blank" href="https://www.henmao.com">
        https://www.henmao.com
      </a>
      <a className="ml-4" target="_blank" href="https://www.liurongqing.com">
        https://www.liurongqing.com
      </a>
    </Footer>
  ),
  route: {
    // path: "/",
    routes: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiFillDashboard />,
      },
      {
        path: "/user",
        name: "用户管理",
        icon: <AiOutlineUser />,
        routes: [
          {
            path: "/user/wechat",
            name: "微信用户",
          },
        ],
      },
      {
        path: "/game",
        name: "游戏管理",
        icon: <GrGamepad />,
        routes: [
          {
            path: "/game/yummi",
            name: "美味消一消",
            routes: [
              {
                path: "/game/yummi/level",
                name: "关卡管理",
              },
            ],
          },
          {
            path: "/game/drawlots",
            name: "抽个冰糖葫芦",
            routes: [
              {
                path: "/game/drawlots",
                name: "用户管理",
              },
            ],
          },
          {
            path: "/game/sudoku",
            name: "数独迷题",
            routes: [
              {
                path: "/game/sudoku",
                name: "用户管理",
              },
            ],
          },
          {
            path: "/game/sliding",
            name: "拼动滑图",
            routes: [
              {
                path: "/game/sliding",
                name: "用户管理",
              },
            ],
          },
        ],
      },

      {
        path: "/system",
        name: "系统管理",
        icon: <AiOutlineSetting />,
        routes: [
          {
            path: "/system/user",
            name: "管理员列表",
          },
        ],
      },
    ],
  },
};
