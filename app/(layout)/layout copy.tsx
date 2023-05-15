"use client";

import {
  HeaderComponent,
  ContentComponent,
  FooterComponent,
} from "./components";

const RootLayout = async ({ children }) => {
  console.log("layout layout...");
  return (
    <>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </>
  );
};

export default RootLayout;
