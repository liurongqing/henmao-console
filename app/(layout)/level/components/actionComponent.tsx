import { Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "@/hooks";
import { Store } from "../store";

export const ActionComponent = () => {
  const { dispatch } = useStore(Store);
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
