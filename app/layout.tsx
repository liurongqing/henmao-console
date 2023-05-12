import { redirect } from "next/navigation";
import App from "./App";

interface RootLayoutProps {
  children: React.ReactNode;
}

async function checkLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
export default function RootLayout({ children, params }) {
  console.log("layout1 ...", params);
  // console.log("layout2 ...", n);
  // 得到接口值
  // const pathname = usePathname();
  // const isLogin = await checkLogin();
  // 如果在登录页
  // console.log("is", { isLogin });
  // if (isLogin) {
  // console.log("跳转");
  // redirect("/login");
  // }

  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}


// export async function getServerSideProps(context) {
//   console.log("context", context);
  
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }