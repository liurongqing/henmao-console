import { request } from "@/utils";
import { LEVEL_API } from "@/consts";
import { Modal, Form, Input, Select, message } from "antd";

export const ModalComponent = ({ open, setOpen }: any) => {
  // 确定添加
  function handleOk() {
    form.validateFields().then(async (values) => {
      await request(LEVEL_API, values, "post");
      message.success("添加成功");
      setOpen(false);
    });
  }

  // 取消/关闭
  function handleCancel() {
    form.resetFields();
    setOpen(false);
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
    <Modal title="添加关卡" open={open} onOk={handleOk} onCancel={handleCancel}>
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
