import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "기탄산업개발",
  description: "내진보강시공 전문건설기업 기탄산업개발 \n Micro Piles & Helix Piles 전문시공업체",
  icons:'/gittan_logo.svg',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
