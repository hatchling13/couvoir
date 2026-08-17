import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  taxonomies: z.object({
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const post = defineCollection({
  loader: glob({
    base: "./content/post",
    pattern: "**/*.md",
  }),
  schema: articleSchema,
});

const retrospect = defineCollection({
  loader: glob({
    base: "./content/retrospect",
    pattern: "**/*.md",
  }),
  schema: articleSchema,
});

export const collections = {
  post,
  retrospect,
};
