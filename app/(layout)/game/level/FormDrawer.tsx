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
import { LEVEL_API } from "@/consts";
import useLevelModal from "./useLevelModal";

const FormDrawer = forwardRef((props, actionRef: any) => {
  // console.log("ref", { ref });
  const useLevel = useLevelModal();
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
  };

  const types = Array(4)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  const frames = Array(16)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  // 确定添加
  const handleOk = () => {
    form.validateFields().then(async (values) => {
      if (values._id) {
        await request(`${LEVEL_API}/${values._id}`, values, "put");
      } else {
        await request(LEVEL_API, values, "post");
      }

      message.success("操作成功");
      useLevel.onClose();
      actionRef?.current?.reload();
    });
  };


  function afterOpenChange(open: boolean) {
    console.log("rrest open", open);
    if (open) {
      // 打开, 如果一样，就不处理【要不要这样做呢】
      // form.setFieldsValue(state.initialForm);
    } else {
      // 关闭
      // form.resetFields();
      // dispatch({ type: "reset" });
    }
  }
  return (
    <Drawer
      title="新建关卡"
      onClose={useLevel.onClose}
      open={useLevel.isOpen}
      size="large"
      destroyOnClose={true}
      afterOpenChange={afterOpenChange}
      footer={
        <Space className="flex justify-end">
          <Button onClick={useLevel.onClose}>取消</Button>
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
        <Form.Item label="关卡" name="level" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.List name="donuts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => {
                return (
                  <Form.Item
                    required
                    className="mb-0"
                    wrapperCol={{ span: 19 }}
                    label="甜甜圈"
                    key={key}
                  >
                    <div className="flex">
                      <Form.Item
                        className="flex-1 mr-2"
                        name={[name, "type"]}
                        rules={[{ required: true, message: "请输入" }]}
                      >
                        <Select options={types} placeholder="type"></Select>
                      </Form.Item>
                      <Form.Item
                        className="flex-1 mr-2"
                        name={[name, "frame"]}
                        rules={[{ required: true, message: "请输入" }]}
                      >
                        <Select options={frames} placeholder="frame"></Select>
                      </Form.Item>
                      <Form.Item
                        className="mr-2"
                        name={[name, "num"]}
                        rules={[{ required: true, message: "请输入" }]}
                      >
                        <InputNumber className="!w-20" placeholder="数量" />
                      </Form.Item>
                      <Form.Item>
                        <MinusCircleOutlined
                          className="w-8"
                          onClick={() => remove(name)}
                        />
                      </Form.Item>
                    </div>
                  </Form.Item>
                );
              })}

              <Form.Item label=" " colon={false} wrapperCol={{ span: 17 }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  新增
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item label="倒计时" name="time" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Drawer>
  );
});

export default FormDrawer;
