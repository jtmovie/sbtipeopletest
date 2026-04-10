import type { Metadata } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import JsonLd from '@/components/JsonLd';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';
import { getWebsiteJsonLd } from '@/lib/structured-data';
import './globals.css';

const baiduAnalyticsId = process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID;
const gaId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-9KRX119DR6';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {baiduAnalyticsId ? (
          <Script
            src={`https://hm.baidu.com/hm.js?${baiduAnalyticsId}`}
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body className="min-h-screen">
        <JsonLd data={getWebsiteJsonLd()} />
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(250,250,250,0.85)_45%,_rgba(250,250,250,0)_80%)]" />
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[rgba(255,214,170,0.26)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[rgba(191,219,254,0.22)] blur-3xl" />
          <div className="relative">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
