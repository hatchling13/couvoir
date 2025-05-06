import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

import remarkMath from 'remark-math';

import rehypeKatex from 'rehype-katex';
import rehypeShiftHeading from 'rehype-shift-heading';

import type { RehypePlugins, RemarkPlugins } from 'astro';

const remarkPlugins: RemarkPlugins = [remarkMath];
const rehypePlugins: RehypePlugins = [
  [rehypeKatex, { strict: true }],
  [rehypeShiftHeading, { shift: 1 }],
];

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [icon()],
  markdown: {
    remarkPlugins,
    rehypePlugins,
  },
  site: 'https://www.hatchling.dev',
});
