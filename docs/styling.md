# Styling conventions

Author UI styles with Panda `css()` and `cva()`, and apply the generated classes
directly to the elements they style. Keep small local declarations beside their
Astro markup; use `*.styles.ts` for substantial or shared definitions, not as a
mandatory companion file for every component.
`src/shared/styles/global.css` contains only font imports and Panda's layer order.
Theme decisions live in `panda.config.ts`; do not edit generated `styled-system` files.

## Element ownership

- Give authored tags explicit classes, such as `<h2 class={styles.title}>`.
  Avoid applying all of a component's styles through parent selectors like
  `& .project-title`.
- Client-created DOM elements follow the same convention:
  `subject.className = styles.subject`. Astro's initial expression markup and
  its client-side controller import the same style definitions.
- Use `data-*` attributes for behavioral DOM queries, independent of styling
  classes. Put visual state on the affected element (`data-dimmed`), and compose
  reveal classes on the elements that actually animate.
- Keep descendant selectors at rendered Markdown boundaries, where the article
  renderer supplies the tags. Self selectors, pseudo-elements, and native state
  selectors (for example, a summary inside an open `<details>`) remain appropriate.
- Keep inherited typography and global defaults shared; an unstyled tag does
  not need a class just to satisfy this convention.

## Spacing and sizing

Do not use `em` in authored styles or the tokens they consume. Keep sizing and
spacing on the `rem`-based Panda scale; use pixels for borders and clipping.

Use Panda's default spacing scale rather than raw pixel/rem values. Common steps
are `1` (4px), `2` (8px), `3` (12px), `4` (16px), `6` (24px), `8` (32px),
`12` (48px), and `16` (64px), at the browser's default 16px root size. The smaller
half-steps are available for compact details, such as inline-code padding.

Use `paddingX`/`paddingY` and individual margin/gap properties, not multi-value
strings of token names: `padding: "4 6"` does not resolve two spacing tokens.

Fluid layouts may interpolate between scale values:

```ts
css({
  gap: "4",
  paddingY: "6",
  paddingX: "clamp(token(spacing.6), 6vw, token(spacing.20))",
});
```

The `vw` term controls interpolation, so the computed value may be fractional;
the minimum and maximum must still reference the scale. Do not add a custom
token merely to preserve an arbitrary value from a mockup.

Use size tokens for grid tracks and image ratios. `page` preserves the site
measure including gutters; `reading` is shared by articles and single-column
archives. Text-only quote measures use `prose`. These are content/layout
constraints, not additional spacing steps.
Center the constrained blog article and archive containers within the page,
while keeping their text left-aligned.

The shared `_compact` condition stacks the expression and content grids at
42rem. Change it centrally if those grids need a different minimum usable width.

## Typography, lines, and motion

- Use the default `xs`/`sm`/`md`/`lg`/`xl`/`2xl`/`3xl`/`4xl` font sizes and
  token-referenced bounds for fluid headings.
- Use `normal`/`semibold` weights, `tight` tracking, and named line heights.
  The local `tight` token overrides Panda's element-relative tracking with
  `-0.025rem`. Underline offsets use `token(spacing.1)`.
  `prose` leading is 1.75 for long-form content; shorter text uses the preset scale.
- Keep `content` (Fira Sans + MaruBuri) and `expression` (Libertinus Math) separate.
- Use `rule` and `emphasis` borders (1px) and the `focus` outline (2px).
  Keyboard focus is defined once in Panda's global `:focus-visible` rule, with a
  one-step (4px) outline offset.
- Use the reviewed `selection`, `expression`, and `quote` duration tokens.
  Motion is restricted to `_motionSafe`; keep `ease-out` unchanged.

Deliberate non-scale values: the 1px visually-hidden clipping technique,
viewport-relative layout interpolation, grid ratios, and transforms that depend
on the element's own size. Document a new exception's purpose instead of
introducing unexplained offsets. Third-party styles such as KaTeX retain their
own internal units.
