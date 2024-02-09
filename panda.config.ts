import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          pretendard: { value: 'var(--font-pretendard)' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
