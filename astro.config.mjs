// @ts-check
import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { copyFile } from "node:fs/promises";
import rehypeKatex from "rehype-katex";
import rehypeShiftHeading from "rehype-shift-heading";
import remarkMath from "remark-math";
import { rehypeProjectHeadingIds } from "./src/entities/project/lib/rehype-project-heading-ids.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://hatchling.dev",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== "/" && !/^\/(?:ko\/|en\/)?404(?:\.html)?\/?$/.test(pathname);
      },
      i18n: {
        defaultLocale: "ko",
        locales: { ko: "ko", en: "en" },
      },
    }),
    {
      name: "localized-404",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          // Astro emits nested pages as directories; Cloudflare needs 404.html
          // in each locale directory to select the nearest localized fallback.
          for (const locale of ["ko", "en"]) {
            await copyFile(
              new URL(`${locale}/404/index.html`, dir),
              new URL(`${locale}/404.html`, dir),
            );
          }
        },
      },
    },
  ],
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
