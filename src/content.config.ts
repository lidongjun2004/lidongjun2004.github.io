import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SECTIONS } from './lib/sections';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    section: z.enum(SECTIONS),
    category: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
