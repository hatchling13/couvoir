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

const project = defineCollection({
  loader: glob({
    base: "./content/project",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
    status: z.enum(["experimental", "active", "maintained", "completed", "archived"]).optional(),
    technologies: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          kind: z.enum(["website", "repository", "package", "documentation", "other"]),
          label: z.string().optional(),
          url: z.url(),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  post,
  project,
  retrospect,
};
