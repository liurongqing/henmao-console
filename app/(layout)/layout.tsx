"use client";
import { ConfigProvider, Dropdown, Breadcrumb, Alert, Spin } from "antd";
import { ProLayout, PageContainer, ProCard } from "@ant-design/pro-components";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { AiOutlineLogout } from "react-icons/ai";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { request } from "@/utils";
import { USER_CENTER_USER_API } from "@/consts";
import { layoutDefaultProps } from "./layoutDefaultProps";
import { useEffect, useState } from "react";

dayjs.locale("cn");
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer
]);

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>({});

  const handleLogout = async () => {
    await request("/api/auth/logout", undefined, "post");
    router.replace(`/login?redirect=${pathname}`);
    // console.log("退出登录");
  };

  const getUserInfo = async () => {
    const { nickname, avatarUrl } = await request(`${USER_CENTER_USER_API}/current`);
    return { nickname, avatarUrl };
  };

  useEffect(() => {
    async function getUserInfoWrapper() {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    }
    getUserInfoWrapper();
  }, []);

  const layoutProps = {
    location: { pathname },
    menuItemRender: (item, dom) => <Link href={item.path}>{dom}</Link>,
    avatarProps: {
      // src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
      src: userInfo.avatarUrl,
      size: "small",
      title: userInfo.nickname,
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: "logout",
                  icon: <AiOutlineLogout color="#dc2626" />,
                  label: "退出登录",
                  onClick: handleLogout,
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    onMenuHeaderClick: () => {
      // 点击 logo，如果 pathname 不是 / 则，跳转到 /
      if (pathname !== "/") {
        router.replace("/");
      }
    },
  };

  return (
    <ConfigProvider locale={zhCN}>
      {/* @ts-ignore */}
      <ProLayout {...layoutDefaultProps} {...layoutProps}>
        <PageContainer
          fixedHeader
          // 解决面包屑点击出错问题，只能自定义，后期看有没有参数处理
          breadcrumbRender={(_, breadcrumbDom: any) => {
            let items = breadcrumbDom?.props?.items;
            if (!items) return null;
            items = items.map((item) => ({ title: item.title }));
            return <Breadcrumb items={items} />;
          }}
        >
          <ProCard className="min-h-[calc(100vh-200px)]">{children}</ProCard>
        </PageContainer>
      </ProLayout>
    </ConfigProvider>
  );
};

export default RootLayout;
