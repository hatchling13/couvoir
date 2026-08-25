import type { Locale } from "@shared/config/i18n";
import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectCollectionEntry = CollectionEntry<"project">;

export const getProjects = async (locale: Locale) => {
  const localePrefix = `${locale}/`;
  const projects = await getCollection(
    "project",
    ({ id, data }) => id.startsWith(localePrefix) && !data.draft,
  );

  return projects.sort((left, right) => left.data.order - right.data.order);
};
