import { readFile } from "node:fs/promises";
import type { Locale } from "@shared/config/i18n";
import { sharingImage } from "@shared/config/sharing-image";
import { render, type Node } from "takumi-js";

// Build-time assets, separate from the website's CSS font imports.
const fonts = Promise.all(
  ["FiraSans-Regular.ttf", "LibertinusMath-Regular.ttf", "MaruBuri-Regular.ttf"].map((file) =>
    readFile(`src/shared/assets/og-fonts/${file}`),
  ),
);

export const renderSharingImage = async (locale: Locale, site: URL) => {
  // Pixel dimensions belong to this fixed-size raster canvas, not page CSS.
  const node: Node = {
    type: "container",
    style: {
      width: sharingImage.width,
      height: sharingImage.height,
      backgroundColor: "#ffffff",
      color: "#202020",
      padding: 80,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Fira Sans, MaruBuri",
    },
    children: [
      {
        type: "text",
        text: sharingImage.title,
        style: { fontFamily: "Libertinus Math", fontSize: 64, fontStyle: "italic" },
      },
      {
        type: "text",
        text: sharingImage.description[locale],
        style: { fontSize: 32, marginTop: 32 },
      },
      {
        type: "container",
        style: {
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 64,
          borderTop: "1px solid #cccccc",
          paddingTop: 24,
        },
        children: [
          { type: "text", text: site.hostname, style: { fontSize: 24, color: "#666666" } },
        ],
      },
    ],
  };

  return render(node, {
    width: sharingImage.width,
    height: sharingImage.height,
    format: "png",
    fonts: await fonts,
  });
};
