import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박태현 | Web3 Frontend Developer Portfolio",
  description: "3년 8개월 경력의 Web3 프론트엔드 개발자. DeFi 플랫폼, 텔레그램/LINE 미니앱, 블록체인 익스플로러 등 8개 이상의 Web3 프로젝트를 Next.js, TypeScript, ethers.js로 개발했습니다.",
  keywords: ["Web3 Developer", "Frontend Developer", "React", "Next.js", "TypeScript", "DeFi", "Blockchain", "Portfolio", "박태현"],
  authors: [{ name: "박태현", url: "https://taehhh8.github.io" }],
  creator: "박태현",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://taehhh8.github.io",
    title: "박태현 | Web3 Frontend Developer",
    description: "3년 8개월 경력의 Web3 프론트엔드 개발자 포트폴리오",
    siteName: "박태현 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "박태현 | Web3 Frontend Developer",
    description: "3년 8개월 경력의 Web3 프론트엔드 개발자 포트폴리오",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}