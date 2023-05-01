import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export const ContentComponent = ({ children }: any) => {
  return (
    <Content className="flex flex-col flex-1 px-12 mt-16">
      <Breadcrumb className="my-4" items={[{ title: "首页" }]} />
      <div className="flex-1 p-6 bg-white rounded-lg">{children}</div>
    </Content>
  );
};
