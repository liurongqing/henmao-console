import { useCallback } from "react";
import { request, throttle } from "@/utils";
import { LEVEL_API } from "@/consts";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  Modal,
  Form,
  Input,
  Select,
  message,
  Space,
  Button,
  Row,
  Col,
} from "antd";
// import { useStore } from "@/hooks";
import { useStore, useDispatch } from "../store";

export const ModalComponent = () => {
  const state = useStore();
  const dispatch = useDispatch();

  // 确定添加
  function handleOk() {
    form.validateFields().then(async (values) => {
      if (values._id) {
        await request(`${LEVEL_API}/${values._id}`, values, "put");
      } else {
        await request(LEVEL_API, values, "post");
      }

      message.success("操作成功");
      dispatch({ type: "close" });
      dispatch({ type: "refresh" });
    });
  }

  // 取消/关闭
  function handleCancel() {
    dispatch({ type: "close" });
  }

  const [form] = Form.useForm();

  const types = Array(4)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  const frames = Array(16)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  function afterOpenChange(open: boolean) {
    console.log("rrest open", open);
    if (open) {
      // 打开, 如果一样，就不处理【要不要这样做呢】
      form.setFieldsValue(state.initialForm);
    } else {
      // 关闭
      form.resetFields();
      dispatch({ type: "reset" });
    }
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
  };

  return (
    <Modal
      title={state.initialForm._id ? "修改关卡" : "添加关卡"}
      open={state.isOpen}
      onOk={handleOk}
      afterOpenChange={afterOpenChange}
      onCancel={handleCancel}
    >
      <Form className="mt-10" form={form} {...formItemLayout}>
        <Form.Item name="_id" hidden={true}>
          <Input />
        </Form.Item>
        <Form.Item label="关卡" name="level">
          <Input />
        </Form.Item>
        <Form.List name="donuts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => {
                return (
                  <Form.Item label="糖果">
                    <div className="flex items-center">
                      <Form.Item className="mb-0 mr-2">
                        <Select
                          options={types}
                          className="!w-40"
                          placeholder="type"
                        ></Select>
                      </Form.Item>
                      <Form.Item className="mb-0 mr-2">
                        <Select
                          options={frames}
                          className="!w-40"
                          placeholder="frame"
                        ></Select>
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
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
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        {/* <Form.Item label="类型" name="type">
          <Select options={types}></Select>
        </Form.Item>
        <Form.Item label="帧数" name="frame">
          <Select options={frames}></Select>
        </Form.Item> */}
        <Form.Item label="倒计时" name="time">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
