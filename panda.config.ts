import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  exclude: [],
  conditions: {
    extend: {
      // The expression and content grids switch together before their columns crowd.
      compact: "@media (max-width: 42rem)",
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          paper: { value: "#fff" },
          ink: { value: "#161616" },
          muted: { value: "#666" },
          quiet: { value: "#707070" },
          rule: { value: "#dedede" },
          focus: { value: "#343434" },
          soft: { value: "#fafafa" },
          code: { value: "#f4f4f4" },
          codeBlock: { value: "#f6f6f6" },
        },
        fonts: {
          content: { value: '"Fira Sans", "Maru Buri", sans-serif' },
          expression: { value: '"Libertinus Math", serif' },
        },
        letterSpacings: {
          tight: {
            value: "-0.025rem",
            description: "Root-relative tracking, independent of the element's font size.",
          },
        },
        sizes: {
          page: {
            value: "68rem",
            description: "Site measure including the horizontal page gutters.",
          },
          reading: {
            value: "46rem",
            description: "Shared maximum measure for articles and single-column archives.",
          },
        },
        lineHeights: {
          prose: {
            value: "1.75",
            description: "Leading for long-form Korean and English content.",
          },
        },
        borders: {
          rule: { value: "1px solid {colors.rule}" },
          emphasis: { value: "1px solid {colors.ink}" },
          focus: { value: "2px solid {colors.focus}" },
        },
        durations: {
          // Keep the interaction timings selected during the prototype review.
          selection: { value: "160ms" },
          expression: { value: "220ms" },
          quote: { value: "260ms" },
        },
      },
      keyframes: {
        revealExpression: {
          from: { opacity: "0", transform: "translateY(calc(-1 * token(spacing.1)))" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        revealQuote: {
          from: { opacity: "0", transform: "translateY(calc(-1 * token(spacing.0.5)))" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  globalCss: {
    html: {
      minWidth: "80",
      background: "paper",
      colorScheme: "light",
      fontFamily: "content",
      fontSize: "100%",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
    },
    body: {
      minWidth: "80",
      minHeight: "100svh",
      margin: "0",
      background: "paper",
      color: "ink",
    },
    "button, input, textarea, select": {
      font: "inherit",
    },
    // A global rule avoids relying on cross-file extraction of a shared style object.
    ":focus-visible": {
      outline: "focus",
      outlineOffset: "1",
    },
    a: {
      color: "inherit",
    },
    img: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
    },
    "::selection": {
      background: "rule",
      color: "ink",
    },
  },
  outdir: "styled-system",
  importMap: "@styled-system",
});
