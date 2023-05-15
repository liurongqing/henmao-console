"use client";

const HomePage = () => {
  return <h1>这是首页</h1>;
};

export default HomePage;

// import { useState } from "react";
// import { ProLayout, PageContainer, ProCard } from "@ant-design/pro-components";
// import { Dropdown } from "antd";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import { LogoutOutlined } from "@ant-design/icons";
// import defaultProps from "./data";

// const HomePage = () => {
//   // const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleLogout = () => {
//     console.log("退出登录");
//   };

//   const proLayoutProps = {
//     layout: "top",
//     fixedHeader: true,

//     menuItemRender: (item, dom) => {
//       // return <div>{dom}</div>;
//       return <Link href={item.path}>{dom}</Link>
//     },
//     avatarProps: {
//       src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
//       size: "small",
//       title: "一个男孩子",
//       render: (props, dom) => {
//         return (
//           <Dropdown
//             menu={{
//               items: [
//                 {
//                   key: "logout",
//                   icon: <LogoutOutlined />,
//                   label: "退出登录",
//                   onClick: handleLogout,
//                 },
//               ],
//             }}
//           >
//             {dom}
//           </Dropdown>
//         );
//       },
//     },
//     ...defaultProps,
//     location: {
//       pathname,
//     },
//     pageTitleRender: false, // 不需要标题
//     onMenuHeaderClick: () => {
//       // 点击 logo，如果 pathname 不是 / 则，跳转到 /
//       if (pathname !== "/") {
//         router.replace("/");
//       }
//     },
//   };
//   return (
//     <ProLayout {...proLayoutProps}>
//       <PageContainer fixedHeader>
//         <ProCard className="min-h-[calc(100vh-120px)]">
//           <h1>186</h1>
//           <h1>187</h1>
//           <h1>188</h1>
//           <h1>189</h1>
//           <h1>190</h1>
//           <h1>191</h1>
//           <h1>192</h1>
//           <h1>193</h1>
//           <h1>194</h1>
//           <h1>195</h1>
//           <h1>196</h1>
//           <h1>197</h1>
//           <h1>198</h1>
//           <h1>199</h1>
//           <h1>200</h1>
//         </ProCard>
//       </PageContainer>
//     </ProLayout>
//   );
// };

// export default HomePage;
