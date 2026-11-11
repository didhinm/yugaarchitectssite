import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects content model: docs/design-brief.md §6
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line descriptor shown under the title on the project page. */
      subtitle: z.string().optional(),
      slug: z.string().regex(/^[a-z0-9-]+$/),
      type: z.enum(['residential', 'commercial', 'interiors', 'hospitality', 'renovation']),
      typeLabel: z.string(),
      location: z.string(),
      country: z.enum(['IN', 'AE']),
      // Optional only while placeholders are in place; every real project should have one.
      year: z.number().int().min(1990).max(2100).optional(),
      status: z.enum(['completed', 'ongoing']),
      area: z.string().optional(),
      /** Label for `area` in the facts panel, e.g. "Total area". */
      areaLabel: z.string().default('Built-up area'),
      scope: z.array(z.string()).default([]),
      photographer: z.string().optional(),
      order: z.number().int(),
      cover: image(),
      coverAlt: z.string().min(1),
      coverFocus: z.string().default('50% 50%'),
      lead: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            layout: z.enum(['full', 'inset', 'pair']),
          }),
        )
        .default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
