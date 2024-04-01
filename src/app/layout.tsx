import { Metadata } from "next";
import Gnb from "./gnb";
import "./globals.scss";

export const metadata: Metadata = {
  title: "UI 요소 모음 | dm.choi",
  description: "Vanilla / React로 UI 요소 만들기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
