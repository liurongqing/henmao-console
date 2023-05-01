import { Layout } from "antd";
const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className="text-center">
      厦门市狠猫科技有限公司版权所有 ©2023
      <a className="ml-4" target="_blank" href="https://www.henmao.com">
        https://www.henmao.com
      </a>
    </Footer>
  );
};
