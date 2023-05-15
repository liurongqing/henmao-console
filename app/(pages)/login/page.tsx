"use client";

import { useState } from "react";
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AiOutlineWechat,
  AiOutlineGithub,
  AiOutlineQq,
  AiOutlineUser,
  AiOutlineLock,
} from "react-icons/ai";
import { Divider, Space, Tabs, message } from "antd";
import { request } from "@/utils";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleLogin(values) {
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
  }
  return (
    <LoginFormPage
      backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
      logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
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
            <div className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full">
              <AiOutlineWechat size={24} color="#04be02" />
            </div>

            <div className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full">
              <AiOutlineQq size={24} color="#00CAFC" />
            </div>

            <div className="flex justify-center items-center flex-col w-10 h-10 border border-solid border-[#D4D8DD] rounded-full">
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

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Form, Input, Checkbox, Button, message } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { LOGIN_BG, LOGIN_API, STORAGE_KEY } from "@/consts";
// import { request, storage } from "@/utils";

// const { useForm } = Form;

// export default function LoginComponent({}) {
//   const [form] = useForm();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   function handleLogin(e) {
//     e.preventDefault();
//     setLoading(true);
//     form
//       .validateFields()
//       .then(async (values) => {
//         const data = await request("/api/auth/login", values, "post");
//         const { token, nickname, username } = data;
//         // storage.setItem(STORAGE_KEY.TOKEN, token);

//         message.success({
//           content: "登录成功！",
//           duration: 1,
//           onClose() {
//             setLoading(false);
//             // 如果有跳转链接，则加上， redirect=/aa/aa
//             const redirect = searchParams.get("redirect") || "/";
//             // console.log("redirect", { redirect });
//             router.replace(redirect);
//           },
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }

//   return (
//     <div
//       style={{ backgroundImage: `url(${LOGIN_BG})` }}
//       className="bg-no-repeat bg-center bg-cover h-screen flex justify-center items-start"
//     >
//       <Form
//         form={form}
//         name="normal_login"
//         className="bg-white/30 shadow-xl w-7/12 p-10 max-w-lg mt-40 backdrop-blur-lg rounded"
//       >
//         <Form.Item>
//           <h2 className="text-center">登 录 系 统</h2>
//         </Form.Item>
//         <Form.Item
//           name="username"
//           rules={[{ required: true, message: "请输入用户名" }]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="用户名"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "请输入密码" }]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="密码"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             block
//             htmlType="submit"
//             className="login-form-button"
//             loading={loading}
//             onClick={handleLogin}
//           >
//             {loading ? "登 录 中" : "登 录"}
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }
