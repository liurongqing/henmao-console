import { Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
export const ActionComponent = () => {
  return (
    <Space>
      <Button icon={<PlusOutlined />} type="primary">
        新建
      </Button>
      <Button>导出</Button>
      <Button>导入</Button>
    </Space>
  );
};
