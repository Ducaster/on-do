import type { Metadata } from "next";
import { gowunBatang, cormorantGaramond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "온도(ON-DO) — 20대를 위한 코칭센터",
  description:
    "온도 — 따뜻할 溫과 실천할 DO. 20대 청년을 위한 인간관계, 소통, 자존감, 심리코칭, 철학코칭 전문 코칭센터입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
