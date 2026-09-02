import { css } from "@styled-system/css";

export const navigation = css({
  display: "flex",
  minWidth: "max-content",
  alignItems: "baseline",
  whiteSpace: "nowrap",
  fontFamily: "expression",
  fontStyle: "italic",
  fontSynthesis: "style",
});

export const brand = css({
  padding: "0",
  border: "0",
  background: "transparent",
  color: "ink",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontSize: "lg",
  letterSpacing: "tight",
});

export const notation = css({
  display: "inline-flex",
  alignItems: "baseline",
  marginLeft: "1",
  color: "muted",
  gap: "1",
});

export const route = css({
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
  '&[data-dimmed="true"]': {
    color: "quiet",
  },
  _motionSafe: {
    transitionProperty: "color",
    transitionDuration: "selection",
    transitionTimingFunction: "ease-out",
  },
});
