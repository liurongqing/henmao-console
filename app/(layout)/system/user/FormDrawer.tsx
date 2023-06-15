"use client";

import {
  Drawer,
  Space,
  Button,
  Form,
  InputNumber,
  Input,
  Select,
  message,
} from "antd";
import { forwardRef } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { request } from "@/utils";
import { AUTH_REGISTER_API } from "@/consts";
import useModalStore from "./userModalStore";

export default function FormDrawer({ actionRef }) {
  const useModal = useModalStore();
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
  };

  // 确定添加
  const handleOk = () => {
    form.validateFields().then(async (values) => {
      if (values._id) {
        await request(`${AUTH_REGISTER_API}/${values._id}`, values, "put");
      } else {
        await request(AUTH_REGISTER_API, values, "post");
      }

      message.success("操作成功");
      useModal.onClose();
      actionRef?.current?.reload();
    });
  };

  function afterOpenChange(open: boolean) {
    console.log("rrest open", open);
    if (open) {
      // 打开, 如果一样，就不处理【要不要这样做呢】
      form.setFieldsValue(useModal.formData);
    } else {
      // 关闭
      console.log("关闭重置");
      form.resetFields();
      useModal.onReset();
    }
  }
  const isEdit = !!useModal.formData?._id;

  return (
    <Drawer
      title={isEdit ? "修改数据" : "新建数据"}
      onClose={useModal.onClose}
      open={useModal.isOpen}
      size="large"
      afterOpenChange={afterOpenChange}
      footer={
        <Space className="flex justify-end">
          <Button onClick={useModal.onClose}>取消</Button>
          <Button onClick={handleOk} type="primary">
            确定
          </Button>
        </Space>
      }
    >
      <Form className="mt-10" form={form} {...formItemLayout}>
        <Form.Item name="_id" hidden={true}>
          <InputNumber />
        </Form.Item>
        
        <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
          <Input disabled={isEdit} />
        </Form.Item>
        {!isEdit && (
          <>
            <Form.Item
              label="密码"
              name="password1"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="password2"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item label="用户昵称" name="nickname">
          <Input />
        </Form.Item>
        <Form.Item label="用户头像" name="avatarUrl">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
