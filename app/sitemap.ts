import type { MetadataRoute } from 'next';
import { getAllTypeEntries } from '@/lib/type-catalog';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['/', '/test', '/results'];
  const contentRoutes = ['/what-is-sbti', '/sbti-vs-mbti', '/faq'];

  const pages = [...staticRoutes, ...contentRoutes].map((path) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const typePages = getAllTypeEntries().map((type) => ({
    url: `${siteConfig.url}/type/${type.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...pages, ...typePages];
}
