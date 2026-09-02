import { css } from "@styled-system/css";

export const project = css({
  borderTop: "rule",
  _first: {
    borderTop: "0",
  },
});

export const summary = css({
  display: "grid",
  gridTemplateColumns:
    "minmax(token(sizes.36), 0.7fr) minmax(token(sizes.56), 1.5fr) auto token(sizes.4)",
  alignItems: "baseline",
  paddingY: "7",
  paddingX: "0",
  cursor: "pointer",
  columnGap: "7",
  listStyle: "none",
  "&::-webkit-details-marker": {
    display: "none",
  },
  _after: {
    content: '"+"',
    justifySelf: "end",
    color: "muted",
    fontVariantNumeric: "tabular-nums",
  },
  "details[open] > &": {
    _after: {
      content: '"−"',
    },
  },
  _compact: {
    gridTemplateColumns: "minmax(0, 1fr) auto",
    rowGap: "2",
    _after: {
      gridRow: "2",
      gridColumn: "2",
    },
  },
});

export const title = css({
  fontWeight: "semibold",
  letterSpacing: "tight",
});

export const summaryText = css({
  color: "muted",
  lineHeight: "normal",
  _compact: {
    gridColumn: "1",
  },
});

export const status = css({
  justifySelf: "end",
  color: "muted",
  fontSize: "xs",
  whiteSpace: "nowrap",
  _compact: {
    gridRow: "1",
    gridColumn: "2",
  },
});

export const body = css({
  display: "grid",
  gridTemplateColumns: "minmax(token(sizes.36), 0.7fr) minmax(token(sizes.56), 1.5fr) auto",
  paddingTop: "1",
  paddingX: "0",
  paddingBottom: "10",
  columnGap: "7",
  _compact: {
    display: "block",
    paddingRight: "8",
  },
});

export const copy = css({
  gridColumn: "2",
  maxWidth: "prose",
  "& h2, & h3": {
    marginTop: "8",
    marginX: "0",
    marginBottom: "3",
    fontSize: "md",
    fontWeight: "semibold",
  },
  "& h2:first-child, & h3:first-child": {
    marginTop: "0",
  },
  "& p": {
    marginTop: "0",
    marginX: "0",
    marginBottom: "4",
    lineHeight: "prose",
  },
});

export const meta = css({
  gridColumn: "2",
  display: "flex",
  flexWrap: "wrap",
  padding: "0",
  marginTop: "4",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
  fontSize: "sm",
  rowGap: "2",
  columnGap: "4",
  listStyle: "none",
});

export const technology = css({
  whiteSpace: "nowrap",
});

export const links = css({
  gridColumn: "2",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "6",
  rowGap: "2.5",
  columnGap: "5",
});

export const link = css({
  color: "ink",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: {
    textDecorationColor: "ink",
  },
});
