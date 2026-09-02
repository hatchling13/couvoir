import { css } from "@styled-system/css";

export const articleItem = css({
  display: "grid",
  gridTemplateColumns: "token(sizes.24) minmax(0, 1fr)",
  paddingY: "4",
  paddingX: "0",
  borderBottom: "rule",
  gap: "4",
  _compact: {
    gridTemplateColumns: "token(sizes.20) minmax(0, 1fr)",
  },
});

export const articleDate = css({
  color: "muted",
  fontSize: "xs",
  fontVariantNumeric: "tabular-nums",
  lineHeight: "relaxed",
});

export const articleTitle = css({ margin: "0", fontSize: "md", fontWeight: "normal" });

export const articleLink = css({
  color: "ink",
  lineHeight: "normal",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: { textDecorationColor: "ink" },
});
