import { css } from "@styled-system/css";

export const sectionHeader = css({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  paddingBottom: "4",
  borderBottom: "emphasis",
  gap: "5",
});

export const sectionHeading = css({
  margin: "0",
  fontSize: "md",
  fontWeight: "semibold",
  letterSpacing: "tight",
});

export const articleCount = css({ color: "muted", fontSize: "xs" });

export const archiveLink = css({
  color: "muted",
  fontSize: "xs",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: { textDecorationColor: "ink" },
});
