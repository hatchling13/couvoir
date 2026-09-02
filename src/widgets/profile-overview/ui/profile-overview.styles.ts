import { css } from "@styled-system/css";

export const profile = css({
  display: "grid",
  gridTemplateColumns: "minmax(token(sizes.40), 0.75fr) minmax(token(sizes.64), 1.25fr)",
  alignItems: "start",
  gap: "clamp(token(spacing.12), 9vw, token(spacing.28))",
  _compact: {
    gridTemplateColumns: "1fr",
  },
});

export const name = css({
  margin: "0",
  fontSize: "clamp(token(fontSizes.xl), 2vw, token(fontSizes.3xl))",
  fontWeight: "semibold",
  letterSpacing: "tight",
});

export const role = css({
  marginTop: "2.5",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
});

export const contacts = css({
  padding: "0",
  margin: "0",
  listStyle: "none",
});

export const contact = css({
  display: "grid",
  gridTemplateColumns: "token(sizes.20) minmax(0, 1fr)",
  paddingY: "4",
  paddingX: "0",
  borderBottom: "rule",
  gap: "5",
});

export const label = css({
  color: "muted",
  fontSize: "sm",
});

export const link = css({
  width: "fit-content",
  color: "ink",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: {
    textDecorationColor: "ink",
  },
});
