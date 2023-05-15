import { Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "../store";

export const ActionComponent = () => {
  const dispatch = useDispatch();

  return (
    <Space>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => {
          dispatch({ type: "open" });
        }}
      >
        新建
      </Button>
    </Space>
  );
};
