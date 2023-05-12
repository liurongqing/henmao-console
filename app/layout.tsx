import App from "./components/App";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
