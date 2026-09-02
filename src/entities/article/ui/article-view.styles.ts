import { css } from "@styled-system/css";

export const article = css({
  maxWidth: "reading",
  marginX: "auto",
});

export const header = css({
  paddingBottom: "7",
  borderBottom: "emphasis",
});

export const title = css({
  margin: "0",
  fontSize: "clamp(token(fontSizes.2xl), 4vw, token(fontSizes.4xl))",
  fontWeight: "semibold",
  letterSpacing: "tight",
  lineHeight: "tight",
});

export const description = css({
  marginTop: "4",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
  lineHeight: "relaxed",
});

export const date = css({
  display: "block",
  marginTop: "4",
  color: "muted",
  fontSize: "xs",
  fontVariantNumeric: "tabular-nums",
});

export const body = css({
  paddingTop: "10",
  fontSize: "md",
  lineHeight: "prose",
  overflowWrap: "break-word",
  "& h2, & h3, & h4": {
    marginTop: "12",
    marginX: "0",
    marginBottom: "4",
    fontWeight: "semibold",
    lineHeight: "snug",
  },
  "& h2": {
    fontSize: "2xl",
  },
  "& h3": {
    fontSize: "xl",
  },
  "& p, & ul, & ol, & pre, & blockquote, & figure, & table": {
    marginY: "5",
    marginX: "0",
  },
  "& blockquote": {
    paddingLeft: "5",
    borderLeft: "emphasis",
    color: "muted",
  },
  "& code": {
    fontFamily: "mono",
    fontSize: "sm",
  },
  "& :not(pre) > code": {
    paddingY: "0.5",
    paddingX: "1",
    background: "code",
  },
  "& pre": {
    maxWidth: "full",
    padding: "4",
    background: "codeBlock",
    overflowX: "auto",
    lineHeight: "relaxed",
  },
  "& table": {
    display: "block",
    maxWidth: "full",
    borderCollapse: "collapse",
    overflowX: "auto",
  },
  "& th, & td": {
    paddingY: "2",
    paddingX: "3",
    border: "rule",
    textAlign: "left",
  },
  "& .katex-display": {
    overflowX: "auto",
    overflowY: "hidden",
  },
  "& a": {
    color: "ink",
    textDecorationColor: "rule",
    textUnderlineOffset: "token(spacing.1)",
    _hover: {
      textDecorationColor: "ink",
    },
  },
});

export const footer = css({
  paddingTop: "8",
  borderTop: "rule",
  marginTop: "14",
});

export const tags = css({
  display: "flex",
  flexWrap: "wrap",
  padding: "0",
  margin: "0",
  color: "muted",
  fontSize: "xs",
  rowGap: "2",
  columnGap: "4",
  listStyle: "none",
});
