"use client";
import { ConfigProvider, Dropdown, Breadcrumb } from "antd";
import { ProLayout, PageContainer, ProCard } from "@ant-design/pro-components";
import { AiOutlineLogout } from "react-icons/ai";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { layoutDefaultProps } from "./layoutDefaultProps";

dayjs.locale("cn");

const RootLayout = ({ children }) => {
  console.log("layout层 layout...");
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    console.log("退出登录");
  };

  console.log("pathname", pathname);
  const layoutProps = {
    location: { pathname },
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
          <ProCard className="min-h-[calc(100vh-150px)]">{children}</ProCard>
        </PageContainer>
      </ProLayout>
    </ConfigProvider>
  );
};

export default RootLayout;
