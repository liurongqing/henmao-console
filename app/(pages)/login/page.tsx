"use client";

import { useState } from "react";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AiOutlineWechat,
  AiOutlineGithub,
  AiOutlineQq,
  AiOutlineUser,
  AiOutlineLock,
} from "react-icons/ai";
import { GiCat } from "react-icons/gi";
import { Divider, Space, Tabs, message } from "antd";
import { request } from "@/utils";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      await request("/api/auth/login", values, "post");
      message.success({
        content: "登录成功！",
        duration: 1,
        onClose() {
          setLoading(false);
          // 如果有跳转链接，则加上， redirect=/aa/aa
          const redirect = searchParams.get("redirect") || "/";
          router.replace(redirect);
        },
      });
    } catch {
      setLoading(false);
    }
  };

  const otherLogin = async () => {
    message.warning("暂不支持，感谢关注！");
  };
  return (
    <LoginFormPage
      backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
      logo={<GiCat size={40} />}
      title="HenMao"
      subTitle="全球最好的个人游戏开发中台"
      submitter={{
        searchConfig: { submitText: loading ? "登录中..." : "登录" },
      }}
      onFinish={handleLogin}
      actions={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Divider plain>
            <span className="text-sm font-normal text-[#ccc]">
              其他登录方式
            </span>
          </Divider>
          <Space align="center" size={24}>
            <div
              onClick={otherLogin}
              className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full"
            >
              <AiOutlineWechat size={24} color="#04be02" />
            </div>

            <div
              onClick={otherLogin}
              className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full"
            >
              <AiOutlineQq size={24} color="#00CAFC" />
            </div>

            <div
              onClick={otherLogin}
              className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full"
            >
              <AiOutlineGithub size={24} color="#222" />
            </div>
          </Space>
        </div>
      }
    >
      <Tabs
        defaultActiveKey="account"
        items={[{ key: "account", label: "账号密码登录" }]}
      />

      <>
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <AiOutlineUser />,
          }}
          placeholder="用户名"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <AiOutlineLock />,
          }}
          placeholder="密码"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
      </>
    </LoginFormPage>
  );
};

export default Login;
