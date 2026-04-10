import type { Metadata } from 'next';
import { defaultKeywords, siteConfig } from './site';

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  keywords = defaultKeywords,
  noIndex = false,
}: MetadataInput = {}): Metadata {
  const normalizedPath = path === '/' ? '' : path;
  const url = `${siteConfig.url}${normalizedPath}`;
  const finalTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  return {
    title: finalTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: finalTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
