// @ts-check
import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeShiftHeading from "rehype-shift-heading";
import remarkMath from "remark-math";
import { rehypeProjectHeadingIds } from "./src/entities/project/lib/rehype-project-heading-ids.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hatchling.dev",
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, { strict: true }],
        [rehypeShiftHeading, { shift: 1 }],
        rehypeHeadingIds,
        [rehypeProjectHeadingIds, { directory: new URL("./content/project/", import.meta.url) }],
      ],
    }),
  },
});
