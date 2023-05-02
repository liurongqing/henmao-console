import { Form, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { pickCondition } from "@/utils";
import { useStore } from "@/hooks";
import { Store } from "../store";

export const SearchComponent = () => {
  const [form] = Form.useForm();
  const { dispatch } = useStore(Store);

  async function handleSearch() {
    const data = await form.getFieldsValue();
    dispatch({ type: "setSearchQuery", data: pickCondition(data) });
    dispatch({ type: "setCurrent", data: { current: 1 } });
  }

  return (
    <Form layout="inline" form={form}>
      <Space size="middle" wrap>
        <Form.Item label="关卡" name="level">
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button>重置</Button>
            <Button
              onClick={handleSearch}
              icon={<SearchOutlined />}
              type="primary"
            >
              搜索
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};
