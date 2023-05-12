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
  console.log("layout layout...");
  
  return (
    <>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </>
  );
}
