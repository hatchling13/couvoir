import { css } from "@styled-system/css";

export const visuallyHidden = css({
  // These 1px dimensions are the accessible clipping technique, not layout spacing.
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  border: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
});

export const pageBody = css({
  marginTop: "clamp(token(spacing.16), 11vw, token(spacing.28))",
});

export const pageHeading = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "baseline",
  paddingBottom: "6",
  borderBottom: "emphasis",
  columnGap: "6",
});

export const pageTitle = css({
  margin: "0",
  fontSize: "clamp(token(fontSizes.xl), 2vw, token(fontSizes.3xl))",
  fontWeight: "semibold",
  letterSpacing: "tight",
});

export const pageMeta = css({
  margin: "0",
  color: "muted",
  fontSize: "sm",
});
