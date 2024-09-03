import { z, defineCollection } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z
    .string()
    .date()
    .transform((d) => new Date(d)),
  taxonomies: z.object({
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  post: defineCollection({ schema: postSchema }),
  retrospect: defineCollection({ schema: postSchema }),
};
