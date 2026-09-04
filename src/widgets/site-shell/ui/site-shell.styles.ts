import { css } from "@styled-system/css";

export const skipLink = css({
  position: "fixed",
  zIndex: "20",
  top: "3",
  left: "3",
  paddingY: "2",
  paddingX: "3",
  border: "emphasis",
  background: "paper",
  color: "ink",
  fontSize: "sm",
  transform: "translateY(-160%)",
  _focus: { transform: "translateY(0)" },
  _print: { display: "none" },
});

export const sitePage = css({
  display: "flex",
  minHeight: "100svh",
  maxWidth: "page",
  flexDirection: "column",
  marginY: "0",
  marginX: "auto",
  paddingY: "0",
  paddingX: "clamp(token(spacing.6), 6vw, token(spacing.20))",
  _compact: {
    paddingRight: "6",
    paddingLeft: "6",
  },
  _print: {
    minHeight: "auto",
    maxWidth: "none",
    padding: "0",
  },
});

export const masthead = css({
  paddingTop: "clamp(token(spacing.8), 5vw, token(spacing.16))",
  paddingX: "0",
  paddingBottom: "6",
  borderBottom: "rule",
  _compact: { overflowX: "auto" },
  _print: { display: "none" },
});

export const siteMain = css({
  flex: "1",
  paddingTop: "clamp(token(spacing.16), 10vw, token(spacing.28))",
  paddingX: "0",
  paddingBottom: "clamp(token(spacing.24), 14vw, token(spacing.36))",
  _compact: { paddingTop: "14" },
  _print: { padding: "0" },
});

export const identity = css({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  justifyContent: "space-between",
  columnGap: "6",
  rowGap: "2",
  paddingTop: "7",
  paddingX: "0",
  paddingBottom: "10",
  borderTop: "rule",
  color: "muted",
  fontSize: "sm",
  lineHeight: "relaxed",
  _print: { display: "none" },
});
