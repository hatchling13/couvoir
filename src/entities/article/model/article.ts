import type { Locale } from "@shared/config/i18n";
import { getRelativeLocaleUrl } from "astro:i18n";
import { getCollection, type CollectionEntry } from "astro:content";

export const articleCollections = ["post", "retrospect"] as const;

export type ArticleCollection = (typeof articleCollections)[number];
export type ArticleCollectionEntry = CollectionEntry<ArticleCollection>;

export interface ArticleSummary {
  title: string;
  description: string;
  date: Date;
  href: string;
}

export const getArticleSlug = (entry: ArticleCollectionEntry, locale: Locale) =>
  entry.id.slice(`${locale}/`.length);

export const getArticleHref = (
  collection: ArticleCollection,
  entry: ArticleCollectionEntry,
  locale: Locale,
) => getRelativeLocaleUrl(locale, `blog/${collection}/${getArticleSlug(entry, locale)}`);

export const getArticles = async <Collection extends ArticleCollection>(
  collection: Collection,
  locale: Locale,
) => {
  const localePrefix = `${locale}/`;
  const entries = await getCollection(collection, ({ id }) => id.startsWith(localePrefix));

  return entries.sort((left, right) => right.data.date.getTime() - left.data.date.getTime());
};

export const toArticleSummary = (
  collection: ArticleCollection,
  entry: ArticleCollectionEntry,
  locale: Locale,
): ArticleSummary => ({
  title: entry.data.title,
  description: entry.data.description,
  date: entry.data.date,
  href: getArticleHref(collection, entry, locale),
});

export const getArticleSummaries = async (collection: ArticleCollection, locale: Locale) =>
  (await getArticles(collection, locale)).map((entry) =>
    toArticleSummary(collection, entry, locale),
  );
