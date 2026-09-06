import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login', '/admin'],
    },
    sitemap: 'https://www.mraresearch.org/sitemap.xml',
  };
}
