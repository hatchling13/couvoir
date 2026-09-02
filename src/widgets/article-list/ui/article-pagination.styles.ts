import { css } from "@styled-system/css";

export const pagination = css({
  display: "grid",
  gridTemplateColumns: "minmax(token(sizes.20), 1fr) auto minmax(token(sizes.20), 1fr)",
  alignItems: "baseline",
  paddingTop: "6",
  fontSize: "sm",
  gap: "6",
  _compact: {
    gridTemplateColumns: "minmax(token(sizes.14), 1fr) auto minmax(token(sizes.14), 1fr)",
    gap: "3",
  },
});

export const pages = css({
  display: "flex",
  padding: "0",
  margin: "0",
  gap: "4",
  listStyle: "none",
  _compact: {
    gap: "2",
  },
});

export const link = css({
  color: "muted",
  textDecoration: "none",
  _hover: {
    color: "ink",
    textDecoration: "underline",
    textUnderlineOffset: "token(spacing.1)",
  },
});

export const current = css({
  color: "ink",
  fontWeight: "semibold",
});

export const next = css({
  justifySelf: "end",
});

export const placeholder = css({
  color: "quiet",
});
