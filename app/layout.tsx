import { Metadata } from "next";
import ClientOnly from "./ClientOnly";
import "./globals.css";
export const metadata: Metadata = {
  title: "HenMao Game", // 这里无效，因为 procomponent 里的 title 覆盖了【 proCompoent 多此一举】
  description: "HenMao Game",
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon.png",
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="app">
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
