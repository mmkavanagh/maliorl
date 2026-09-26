import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Empty until later phases add MDX entries under src/content/pages.
 * Slugs in `related` match entry ids (filename without extension).
 */
const pages = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/pages',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    type: z.enum(['condition', 'procedure', 'guide', 'page']),
    about: z.string(),
    keywords: z.array(z.string()),
    lastReviewed: z.coerce.date(),
    related: z.array(z.string()),
    faq: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      }),
    ),
  }),
});

export const collections = { pages };
