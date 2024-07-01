import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date().transform((d) => new Date(d)),
    taxonomies: z.object({
      categories: z.array(z.string()),
      tags: z.array(z.string()),
    }),
  }),
});

const retrospectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date().transform((d) => new Date(d)),
    taxonomies: z.object({
      categories: z.array(z.string()),
      tags: z.array(z.string()),
    }),
  }),
});

export const collections = {
  post: postCollection,
  retrospect: retrospectCollection,
};
