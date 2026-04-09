import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SBTI 人格测试",
  description: "MBTI已经过时，SBTI来了。这是一个更真实、更能暴露你的趣味性格测试。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 百度统计 - 替换为你的统计 ID */}
        <Script
          src="https://hm.baidu.com/hm.js?YOUR_BAIDU_ID_HERE"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
      {/* 谷歌分析 - GA4 测量 ID */}
      <GoogleAnalytics gaId="G-9KRX119DR6" />
    </html>
  );
}
