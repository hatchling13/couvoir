import { defineConfig } from 'astro/config';

import pandacss from '@pandacss/astro';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [pandacss()],
  adapter: vercel(),
});
