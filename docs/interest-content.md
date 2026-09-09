# Interest content

Interest quotes use the `interest` collection. The expression tree remains in
the explorer; collection entries supply only the writing for its leaves.

## Files

Use `content/interest/<locale>/<keyword>.md`, for example:

- `content/interest/ko/functional-programming.md`
- `content/interest/en/functional-programming.md`

The filename matches the tree's English kebab-case keyword. The directory
selects the page locale, not the language required in the writing.

## Frontmatter and body

```yaml
---
draft: true
lang: en
---
```

- `draft` defaults to `false`. Set it to `true` while writing.
- `lang` optionally declares the body's primary language (`ko` or `en`).
  If omitted, the entry's directory supplies it. Set `lang: en` for English
  writing intended for a Korean page; mixed-language writing is also allowed.
- Write the quote as ordinary Markdown in the body. The explorer will provide
  the outer blockquote; do not wrap the entire body in `>` markers.

All six Korean entries contain approved copy: functional-programming,
user-interface, effect-systems, type-systems, gastronomy, and games. English
translations are not yet written, so English pages use the Korean fallback.
The English functional-programming file remains an empty draft.

## Loading

`getInterest(keyword, locale)` returns a renderable Astro collection entry:

1. Use the requested locale's published, nonempty entry.
2. Otherwise use the Korean entry if it is published and nonempty.
3. Otherwise return `undefined` so the caller can omit the quote.

Draft and whitespace-only bodies count as missing. Korean pages do not fall
back to English. `getInterestLanguage(entry)` resolves the selected entry's
language, including when fallback occurs.

The homepage passes its locale to the explorer. Astro renders resolved leaf
entries into inert HTML templates at build time. Selecting a leaf clones its
template into the blockquote and applies the resolved language, without a
browser request. Missing entries show only the selected keyword, with no empty
blockquote. Branches still start collapsed.
