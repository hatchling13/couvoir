import { css } from "@styled-system/css";

export const resume = css({
  width: "full",
  maxWidth: "reading",
  marginX: "auto",
  fontVariantNumeric: "tabular-nums",
  _print: { maxWidth: "none" },
});

export const resumeHeader = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(token(sizes.48), auto)",
  alignItems: "start",
  paddingBottom: "8",
  borderBottom: "emphasis",
  columnGap: "12",
  _compact: {
    gridTemplateColumns: "1fr",
    rowGap: "6",
  },
  _print: {
    paddingBottom: "5",
    columnGap: "8",
  },
});

export const name = css({
  margin: "0",
  fontSize: "clamp(token(fontSizes.2xl), 4vw, token(fontSizes.4xl))",
  fontWeight: "semibold",
  letterSpacing: "tight",
  lineHeight: "tight",
  textWrap: "balance",
  _print: { fontSize: "3xl" },
});

export const role = css({
  marginTop: "2.5",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
});

export const headerDetails = css({
  display: "grid",
  justifyItems: "end",
  rowGap: "5",
  _compact: { justifyItems: "start" },
});

export const contacts = css({
  display: "grid",
  width: "full",
  margin: "0",
  fontSize: "sm",
  fontStyle: "normal",
});

export const contactRow = css({
  display: "grid",
  gridTemplateColumns: "token(sizes.20) minmax(0, 1fr)",
  alignItems: "baseline",
  paddingY: "1.5",
  borderBottom: "rule",
  columnGap: "4",
});

export const contactLabel = css({
  color: "muted",
  fontSize: "xs",
  whiteSpace: "nowrap",
});

export const contactLink = css({
  justifySelf: "end",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  whiteSpace: "nowrap",
  _hover: { textDecorationColor: "ink" },
  _compact: { justifySelf: "start" },
});

export const printButton = css({
  width: "fit-content",
  padding: "0",
  border: "0",
  background: "transparent",
  color: "muted",
  cursor: "pointer",
  fontSize: "xs",
  textDecoration: "underline",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: {
    color: "ink",
    textDecorationColor: "ink",
  },
  _print: { display: "none" },
});

export const section = css({
  display: "grid",
  gridTemplateColumns: "token(sizes.28) minmax(0, 1fr)",
  paddingY: "10",
  borderBottom: "rule",
  columnGap: "8",
  _compact: {
    gridTemplateColumns: "1fr",
    paddingY: "8",
    rowGap: "5",
  },
  _print: {
    position: "relative",
    display: "block",
    paddingY: "5",
    breakInside: "auto",
  },
});

export const sectionLabel = css({
  margin: "0",
  color: "muted",
  fontFamily: "expression",
  fontSize: "sm",
  fontStyle: "italic",
  fontWeight: "normal",
  lineHeight: "relaxed",
  whiteSpace: "nowrap",
  _print: {
    position: "absolute",
    top: "5",
    left: "0",
    width: "24",
  },
});

export const sectionBody = css({
  minWidth: "0",
  _print: {
    marginLeft: "calc(token(sizes.24) + token(spacing.6))",
  },
});

export const summary = css({
  maxWidth: "prose",
  margin: "0",
  lineHeight: "prose",
  textWrap: "pretty",
});

export const entryHeading = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "baseline",
  columnGap: "6",
  _compact: {
    gridTemplateColumns: "1fr",
    rowGap: "1",
  },
});

export const entryTitle = css({
  margin: "0",
  fontSize: "lg",
  fontWeight: "semibold",
  letterSpacing: "tight",
  lineHeight: "snug",
});

export const titleLink = css({
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  _hover: { textDecorationColor: "ink" },
});

export const entrySubtitle = css({
  marginTop: "1.5",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
  fontSize: "sm",
});

export const period = css({
  margin: "0",
  color: "muted",
  fontSize: "xs",
  whiteSpace: "nowrap",
});

export const workGroupList = css({
  display: "grid",
  marginTop: "9",
  rowGap: "8",
  _print: { display: "block" },
});

export const workGroup = css({});

export const dividedWorkGroup = css({
  paddingTop: "8",
  borderTop: "rule",
});

export const projectList = css({
  display: "grid",
  marginTop: "5",
  rowGap: "9",
  _print: { display: "block" },
});

export const project = css({ breakInside: "avoid" });

export const subentryHeading = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "baseline",
  columnGap: "5",
  _compact: {
    gridTemplateColumns: "1fr",
    rowGap: "1",
  },
});

export const subentryTitle = css({
  margin: "0",
  fontSize: "md",
  fontWeight: "semibold",
  letterSpacing: "tight",
  lineHeight: "snug",
  overflowWrap: "anywhere",
});

export const description = css({
  marginTop: "3",
  marginX: "0",
  marginBottom: "0",
  color: "muted",
  fontSize: "sm",
  lineHeight: "relaxed",
  textWrap: "pretty",
});

export const references = css({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "3",
  gap: "4",
});

export const referenceLink = css({
  color: "muted",
  fontSize: "xs",
  textDecorationColor: "rule",
  textUnderlineOffset: "token(spacing.1)",
  whiteSpace: "nowrap",
  _hover: {
    color: "ink",
    textDecorationColor: "ink",
  },
});

export const bulletList = css({
  display: "grid",
  padding: "0",
  marginTop: "4",
  marginX: "0",
  marginBottom: "0",
  listStyle: "none",
  rowGap: "3",
});

export const bulletItem = css({
  position: "relative",
  paddingLeft: "4",
  fontSize: "sm",
  lineHeight: "relaxed",
  textWrap: "pretty",
  _before: {
    position: "absolute",
    top: "0",
    left: "0",
    content: '"—"',
    color: "quiet",
  },
});

export const inlineReferences = css({
  display: "inline-flex",
  flexWrap: "wrap",
  marginLeft: "3",
  gap: "3",
});

export const additional = css({
  paddingTop: "7",
  borderTop: "rule",
  marginTop: "9",
  breakInside: "avoid",
});

export const minorHeading = css({
  margin: "0",
  color: "muted",
  fontFamily: "expression",
  fontSize: "sm",
  fontStyle: "italic",
  fontWeight: "normal",
});

export const activityList = css({
  display: "grid",
  rowGap: "8",
  _print: { display: "block" },
});

export const activity = css({
  breakInside: "avoid",
  _print: { marginBottom: "8" },
});

export const factList = css({
  display: "grid",
  padding: "0",
  margin: "0",
  listStyle: "none",
  rowGap: "2",
});

export const factLine = css({
  margin: "0",
  lineHeight: "relaxed",
});
