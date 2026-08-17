import { createArticleFeed } from "@entities/article";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  if (site === undefined) {
    throw new Error("Astro site URL is required to generate RSS.");
  }

  return createArticleFeed("en", site);
};
