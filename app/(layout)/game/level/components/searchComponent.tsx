import { Form, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { pickCondition } from "@/utils";
import { useDispatch } from "../store";

export const SearchComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  async function handleSearch() {
    const data = await form.getFieldsValue();
    dispatch({ type: "setSearchQuery", data: pickCondition(data) });
    dispatch({ type: "setCurrent", data: { current: 1 } });
  }

  function handleReset() {
    form.resetFields();
  }

  return (
    <Form layout="inline" form={form}>
      <Space size="middle" wrap>
        <Form.Item label="关卡" name="level">
          <Input allowClear />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button onClick={handleReset}>重置</Button>
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
