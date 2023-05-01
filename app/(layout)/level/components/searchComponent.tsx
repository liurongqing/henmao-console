import { Form, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const SearchComponent = () => {
  return (
    <Form layout="inline">
      <Space size="middle" wrap>
        <Form.Item label="名字">
          <Input />
        </Form.Item>
        <Form.Item label="昵称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button>重置</Button>
            <Button icon={<SearchOutlined />} type="primary">
              搜索
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};
