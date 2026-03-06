import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gittan.kr"),

  title: {
    default: "기탄산업개발",
    template: "%s | 기탄산업개발",
  },

  description: "마이크로파일 및 헬릭스파일 전문 시공업체",

  keywords: [
    "마이크로파일",
    "헬릭스파일",
    "기초공사",
    "지반공사",
    "기탄산업개발",
  ],

  icons: {
    icon: "/gittan_favicon_logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "기탄산업개발",
    description: "마이크로파일 및 헬릭스파일 전문 시공업체",
    url: "https://gittan.kr",
    siteName: "기탄산업개발",
    locale: "ko_KR",
    type: "website",
  },

  verification: {
    other: {
      "naver-site-verification": "4b44d5545227167beb9b6b2b9faee4c61d1acd39",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}