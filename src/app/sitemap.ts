import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.phimindflow.com';
  const pages = [
    '', '/about', '/trading', '/credit-repair', '/funding', '/pricing',
    '/contact', '/consultation', '/free-guide', '/resources',
    '/privacy', '/terms', '/disclaimer',
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly' as const,
    priority: path === '' ? 1 : path === '/pricing' ? 0.9 : 0.7,
  }));
}
