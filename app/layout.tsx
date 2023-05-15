import ClientOnly from "./ClientOnly";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
};

export default Layout;
