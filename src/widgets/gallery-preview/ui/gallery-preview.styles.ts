import { css } from "@styled-system/css";

export const header = css({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  paddingBottom: "4",
  borderBottom: "emphasis",
  gap: "6",
});

export const heading = css({
  margin: "0",
  fontSize: "md",
  fontWeight: "semibold",
  letterSpacing: "tight",
});

export const label = css({
  margin: "0",
  color: "muted",
  fontSize: "xs",
});

export const sheet = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  paddingTop: "6",
  gap: "clamp(token(spacing.4), 3vw, token(spacing.8))",
  _compact: {
    gridTemplateColumns: "1fr",
    gap: "8",
  },
});

export const figure = css({
  minWidth: "0",
  margin: "0",
});

export const photograph = css({
  display: "grid",
  aspectRatio: "landscape",
  placeItems: "center",
  border: "rule",
  background: "soft",
  color: "quiet",
  fontSize: "xs",
  fontVariantNumeric: "tabular-nums",
});

export const caption = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr)",
  paddingTop: "2.5",
  color: "muted",
  fontSize: "xs",
  lineHeight: "relaxed",
  gap: "2",
});

export const date = css({
  justifySelf: "end",
  color: "quiet",
  whiteSpace: "nowrap",
});

export const note = css({
  maxWidth: "prose",
  marginTop: "6",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
  fontSize: "xs",
  lineHeight: "relaxed",
});
