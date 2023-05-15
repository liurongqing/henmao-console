import ClientOnly from "./ClientOnly";
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
