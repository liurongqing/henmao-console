import ClientOnly from "./ClientOnly";
import "./globals.css";

export const metadata = {
  title: "HenMao Game", // 这里无效，因为 procomponent 里的 title 覆盖了【 proCompoent 多此一举】
  description: "HenMao Game",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
