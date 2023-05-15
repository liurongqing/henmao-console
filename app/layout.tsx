import ClientOnly from "./ClientOnly";
import "./globals.css";

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
