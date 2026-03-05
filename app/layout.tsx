import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

// One-line summary: Applies a Korean-safe base font and metadata for the app-router pages.
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: '기탄기업개발',
  description: '마이크로파일 및 헬릭스파일 전문 시공업체',
  icons: '/gittan_favicon_logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta name="naver-site-verification" content="74fe3e706c585a3ecad2f51549918a5a307ff211" />
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
