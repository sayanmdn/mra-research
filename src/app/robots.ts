import type { MetadataRoute } from 'next';

const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Meta-ExternalAgent',
  'CCBot',
  'Bytespider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/login', '/admin'],
      },
      // Explicitly allowed: AI crawlers/agents are welcome to index and cite this site.
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/api/', '/login', '/admin'],
      },
    ],
    sitemap: 'https://www.mraresearch.org/sitemap.xml',
  };
}
