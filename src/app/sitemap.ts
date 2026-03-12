import type { MetadataRoute } from 'next';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  const papers = await Blog.find({}, { slug: 1, updatedAt: 1 }).lean() as any[];

  const paperEntries: MetadataRoute.Sitemap = papers.map((p) => ({
    url: `https://www.mraresearch.org/papers/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.mraresearch.org',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.mraresearch.org/papers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...paperEntries,
  ];
}
