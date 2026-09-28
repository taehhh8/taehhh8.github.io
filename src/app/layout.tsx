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
  title: "박태현 | Frontend Developer Portfolio",
  description:
    "4년 경력의 프론트엔드 개발자. React·Next.js·TypeScript로 대시보드, 미니앱, 검색·조회형 웹을 설계하고 운영했습니다.",
  keywords: [
    "Frontend Developer",
    "프론트엔드 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "박태현",
  ],
  authors: [{ name: "박태현", url: "https://taehhh8.github.io" }],
  creator: "박태현",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://taehhh8.github.io",
    title: "박태현 | Frontend Developer",
    description:
      "React·Next.js·TypeScript 기반 제품 프론트엔드 포트폴리오",
    siteName: "박태현 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "박태현 | Frontend Developer",
    description:
      "React·Next.js·TypeScript 기반 제품 프론트엔드 포트폴리오",
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
