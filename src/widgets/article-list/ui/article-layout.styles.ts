import { cva } from "@styled-system/css";

export const articleColumns = cva({
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "clamp(token(spacing.12), 8vw, token(spacing.24))",
    marginTop: "clamp(token(spacing.16), 11vw, token(spacing.28))",
    _compact: { gridTemplateColumns: "1fr" },
  },
  variants: {
    single: {
      true: { maxWidth: "reading", marginX: "auto", gridTemplateColumns: "minmax(0, 1fr)" },
    },
  },
});
