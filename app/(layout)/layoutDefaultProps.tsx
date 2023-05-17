import { AiFillDashboard, AiOutlineSetting } from "react-icons/ai";
import { GiCat } from "react-icons/gi";
import Link from "next/link";

export const layoutDefaultProps = {
  layout: "top",
  fixedHeader: true,
  pageTitleRender: false,
  title: "HenMao",
  logo: <GiCat color="black" />,
  footerRender: () => <div className="text-center text-gray-500 py-4">@2023 厦门市狠猫科技有限公司版权所有</div>,
  route: {
    // path: "/",
    routes: [
      {
        path: "/",
        name: "Dashboard",
        icon: <AiFillDashboard />,
      },
      {
        path: "/game",
        name: "游戏管理",
        icon: <AiOutlineSetting />,
        routes: [
          {
            path: "/game/level",
            name: "关卡列表",
          },
        ],
      },
    ],
  },
};
