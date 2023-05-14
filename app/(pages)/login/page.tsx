"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LOGIN_BG, LOGIN_API, STORAGE_KEY } from "@/consts";
import { request, storage } from "@/utils";

const { useForm } = Form;

export default function LoginComponent({}) {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    form
      .validateFields()
      .then(async (values) => {
        const data = await request("/api/auth/login", values, "post");
        const { token, nickname, username } = data;
        // storage.setItem(STORAGE_KEY.TOKEN, token);

        message.success({
          content: "登录成功！",
          duration: 1,
          onClose() {
            setLoading(false);
            // 如果有跳转链接，则加上， redirect=/aa/aa
            const redirect = searchParams.get("redirect") || "/";
            // console.log("redirect", { redirect });
            router.replace(redirect);
          },
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <div
      style={{ backgroundImage: `url(${LOGIN_BG})` }}
      className="bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start"
    >
      <Form
        form={form}
        name="normal_login"
        className="bg-white/30 shadow-xl w-7/12 p-10 max-w-lg mt-40 backdrop-blur-lg rounded"
      >
        <Form.Item>
          <h2 className="text-center">登 录 系 统</h2>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            htmlType="submit"
            className="login-form-button"
            loading={loading}
            onClick={handleLogin}
          >
            {loading ? "登 录 中" : "登 录"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
