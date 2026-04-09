import type { Metadata } from "next";
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
