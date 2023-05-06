"use client";
import {
  HeaderComponent,
  ContentComponent,
  FooterComponent,
} from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </>
  );
}
