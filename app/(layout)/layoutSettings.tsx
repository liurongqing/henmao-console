import { AiOutlineSmile, AiOutlineCrown } from "react-icons/ai";

export const layoutSettings = {
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
