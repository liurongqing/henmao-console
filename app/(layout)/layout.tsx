"use client";
import {
  HeaderComponent,
  ContentComponent,
  FooterComponent,
} from "./components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('layout...')
  return (
    <>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
      <FooterComponent />
    </>
  );
}
