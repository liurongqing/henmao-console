import { fetcher } from "@/utils";
import { LEVEL_API } from "@/consts";
import { Modal, Form, Input, Select } from "antd";

export const ModalComponent = ({ open, setOpen }: any) => {
  function handleOk() {
    console.log("我点击了 ok");

    form.validateFields().then((values) => {
      console.log("values", values);
      fetcher(LEVEL_API, { method: "post" });
    });
  }
  const [form] = Form.useForm();

  const types = Array(4)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  const frames = Array(16)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  const initialValues = {
    level: 1,
    type: types?.[0]?.value,
    frame: frames?.[0]?.value,
    time: 60,
  };
  return (
    <Modal
      title="添加关卡"
      open={open}
      onOk={handleOk}
      onCancel={() => {
        setOpen(false);
      }}
    >
      <Form
        className="mt-10"
        initialValues={initialValues}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
      >
        <Form.Item label="关卡" name="level">
          <Input />
        </Form.Item>
        <Form.Item label="类型" name="type">
          <Select options={types}></Select>
        </Form.Item>
        <Form.Item label="帧数" name="frame">
          <Select options={frames}></Select>
        </Form.Item>
        <Form.Item label="倒计时" name="time">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
