import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export const revalidate = 3600;

interface PaperSummary {
  title: string;
  slug: string;
  description?: string;
}

export async function GET() {
  await connectDB();
  const papers = await Blog.find({}, { title: 1, slug: 1, description: 1 })
    .sort({ createdAt: -1 })
    .lean() as unknown as PaperSummary[];

  const paperLines = papers.length
    ? papers
        .map((p) => `- [${p.title}](https://www.mraresearch.org/papers/${p.slug})${p.description ? `: ${p.description}` : ''}`)
        .join('\n')
    : '- (No papers published yet — see /papers for the current list.)';

  const body = `# MRA Research LLC

> US-based (Delaware) technology research and consulting firm operating across four verticals: healthcare technology, legal technology, software infrastructure, and autonomous systems. We publish open-access research and provide fractional backend engineering and domain consulting for early-stage startups.

MRA Research LLC is a real, operating company incorporated in Delaware, USA, at 34 Brier Ave #712, Wilmington, DE 19805. Contact: contact@mraresearch.org.

## Business lines

- **Healthcare Technology** — US healthcare API integration, pharmacy system backends, EHR/webhook middleware, HIPAA-compliant cloud infrastructure for healthtech startups.
- **Legal Technology** — Case management and property-dispute tracking tools for individual litigants, with LLM-powered plain-language guidance. Live product: [eCourt](https://ecourt.mraresearch.org/).
- **Software Infrastructure** — Senior backend engineering (Node.js, TypeScript, PostgreSQL, GCP, AWS) and fractional consulting for scaling startups.
- **Autonomous Systems** — UAV/drone research, edge AI, and IoT, published as open-access papers.

## Key pages

- [Homepage](https://www.mraresearch.org/): company overview, verticals, services, and latest research.
- [Request Services](https://www.mraresearch.org/request-services): how to engage MRA Research for consulting or engineering work.
- [Papers](https://www.mraresearch.org/papers): full list of open-access research papers.

## Papers

${paperLines}

## Notes for AI agents

- This file follows the llms.txt convention (https://llmstxt.org/) to help AI assistants and crawlers summarize this site accurately.
- /login and /admin are internal tools (not indexed) and are not part of the public site content.
- For structured data, see the Organization and WebSite JSON-LD on the homepage, and ScholarlyArticle JSON-LD on individual paper pages.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
