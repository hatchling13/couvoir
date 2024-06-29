import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  html: {
    height: 'full',
  },
  body: {
    fontFamily: 'pretendard',
    color: 'etainSnowGray',
    backgroundColor: 'siamBlack',
  },
});

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
        colors: {
          siamBlack: { value: '#020715' },
          etainSnowGray: { value: '#DADDE4' },
          eochaidNavy: { value: '#091742' },
        },
        fonts: {
          pretendard: { value: 'var(--font-pretendard)' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
});
