import { defaultLocale, type Locale } from "@shared/config/i18n";
import { getCollection, type CollectionEntry } from "astro:content";

export type InterestCollectionEntry = CollectionEntry<"interest">;

export const getInterest = async (
  slug: string,
  locale: Locale,
): Promise<InterestCollectionEntry | undefined> => {
  const localizedId = `${locale}/${slug}`;
  const fallbackId = `${defaultLocale}/${slug}`;
  const entries = await getCollection(
    "interest",
    ({ id, data, body }) =>
      (id === localizedId || id === fallbackId) && !data.draft && Boolean(body?.trim()),
  );

  return (
    entries.find(({ id }) => id === localizedId) ?? entries.find(({ id }) => id === fallbackId)
  );
};

export const getInterestLanguage = (entry: InterestCollectionEntry): Locale =>
  entry.data.lang ?? (entry.id.startsWith("en/") ? "en" : defaultLocale);
