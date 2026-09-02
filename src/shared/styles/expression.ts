import { css } from "@styled-system/css";

export const region = css({
  display: "block",
  overflowX: "auto",
  paddingTop: "2",
  paddingX: "2",
  paddingBottom: "8",
  margin: "-2",
});

export const stack = css({
  display: "grid",
  width: "full",
  minWidth: "0",
  gridTemplateColumns: "max-content max-content minmax(0, 1fr)",
  alignItems: "baseline",
  columnGap: "clamp(token(spacing.3), 2vw, token(spacing.6))",
  rowGap: "clamp(token(spacing.6), 4vw, token(spacing.11))",
  fontFamily: "expression",
  fontStyle: "italic",
  fontSynthesis: "style",
  _compact: {
    // Only an oversized keyword should scroll; arguments wrap within the viewport.
    gridTemplateColumns: "max-content minmax(0, 1fr)",
    rowGap: "6",
  },
});

export const row = css({ display: "contents" });
export const subject = css({ color: "ink", whiteSpace: "nowrap" });
export const operator = css({ color: "muted" });

export const application = css({
  display: "flex",
  minWidth: "0",
  flexWrap: "wrap",
  alignItems: "baseline",
  rowGap: "2",
  _compact: {
    gridColumn: "1 / -1",
    paddingLeft: "3",
    marginTop: "-3",
  },
});

export const applicationStart = css({
  display: "inline-flex",
  flex: "0 0 auto",
  alignItems: "baseline",
  whiteSpace: "nowrap",
});

export const argument = css({
  flex: "0 0 auto",
  padding: "0",
  border: "0",
  background: "transparent",
  color: "ink",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  _hover: {
    textDecoration: "underline",
    textUnderlineOffset: "token(spacing.1)",
  },
  '&[data-dimmed="true"]': { color: "quiet" },
  _disabled: {
    color: "quiet",
    cursor: "default",
    _hover: { textDecoration: "none" },
  },
  _motionSafe: {
    transitionProperty: "color",
    transitionDuration: "selection",
    transitionTimingFunction: "ease-out",
  },
});

export const leaf = css({
  gridColumn: "1 / -1",
  maxWidth: "prose",
  marginTop: "2",
  _compact: { marginTop: "2.5" },
});

export const leafName = css({
  marginTop: "0",
  marginX: "0",
  marginBottom: "5",
  color: "ink",
  fontSize: "md",
  whiteSpace: "nowrap",
});

export const quote = css({
  minHeight: "14",
  paddingTop: "1",
  paddingRight: "0",
  paddingBottom: "1",
  paddingLeft: "5",
  borderLeft: "emphasis",
  margin: "0",
  fontFamily: "content",
  fontStyle: "normal",
});

export const quoteContent = css({
  margin: "0",
  color: "muted",
  fontSize: "lg",
  lineHeight: "relaxed",
});

export const reveal = css({
  _motionSafe: {
    animationName: "revealExpression",
    animationDuration: "expression",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  },
});

export const revealQuote = css({
  _motionSafe: {
    animationName: "revealQuote",
    animationDuration: "quote",
    animationDelay: "fastest",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  },
});
