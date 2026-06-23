import type { Metadata } from "next";
import { cormorantGaramond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "온도(ON-DO) — 요즘 내 상태를 말로 정리하는 코칭",
  description:
    "20대를 위한 관계, 진로, 감정, 자기이해 코칭. 심리검사와 1:1 대화로 지금 겪는 장면을 함께 정리합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={cormorantGaramond.variable}
      suppressHydrationWarning
    >
      <head>
        {/* JS 활성 표시 — 스크롤 등장 애니메이션은 이 클래스가 있을 때만 적용된다.
            (JS 비활성 시 .fade-up 콘텐츠가 사라지지 않도록 하는 progressive enhancement) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 이동
        </a>
        {children}
      </body>
    </html>
  );
}
