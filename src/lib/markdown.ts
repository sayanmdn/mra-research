export interface FrontmatterFields {
  title?: string;
  description?: string;
  author?: string;
  slug?: string;
  tags?: string[];
}

export interface ParsedMarkdown {
  data: FrontmatterFields;
  content: string;
}

const KNOWN_KEYS = ['title', 'description', 'author', 'slug', 'tags'] as const;

function unquote(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 1) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length > 1)
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Pulls simple `key: value` YAML front matter off the top of a markdown
 * document. Only the fields a paper needs are recognised; anything else in the
 * block is ignored (but still stripped from the body).
 */
export function parseFrontmatter(raw: string): ParsedMarkdown {
  const text = raw.replace(/^﻿/, '');
  const match = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text);
  if (!match) return { data: {}, content: text.trim() };

  const data: FrontmatterFields = {};
  const lines = match[1].split(/\r?\n/);
  let listKey: string | null = null;

  for (const line of lines) {
    const listItem = /^\s*-\s+(.*)$/.exec(line);
    if (listItem && listKey === 'tags') {
      const value = unquote(listItem[1]);
      if (value) data.tags = [...(data.tags || []), value];
      continue;
    }

    const pair = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!pair) continue;

    const key = pair[1].toLowerCase();
    const value = pair[2];
    listKey = key;

    if (!(KNOWN_KEYS as readonly string[]).includes(key)) continue;

    if (key === 'tags') {
      const inline = value.trim().replace(/^\[|\]$/g, '');
      if (inline) {
        data.tags = inline
          .split(',')
          .map((t) => unquote(t))
          .filter(Boolean);
      }
      continue;
    }

    const clean = unquote(value);
    if (clean) data[key as 'title' | 'description' | 'author' | 'slug'] = clean;
  }

  return { data, content: text.slice(match[0].length).trim() };
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
