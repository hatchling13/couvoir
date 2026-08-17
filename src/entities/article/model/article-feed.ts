import type { Locale } from "@shared/config/i18n";
import rss from "@astrojs/rss";
import { getArticleHref, getArticles } from "./article";

const feedDescriptions = {
  ko: "생각, 회고, 소프트웨어에 관한 글.",
  en: "Thoughts, retrospects, and software notes.",
} as const satisfies Record<Locale, string>;

export const createArticleFeed = async (locale: Locale, site: URL) => {
  const [posts, retrospects] = await Promise.all([
    getArticles("post", locale),
    getArticles("retrospect", locale),
  ]);
  const items = [
    ...posts.map((entry) => ({ collection: "post" as const, entry })),
    ...retrospects.map((entry) => ({
      collection: "retrospect" as const,
      entry,
    })),
  ]
    .sort((left, right) => right.entry.data.date.getTime() - left.entry.data.date.getTime())
    .map(({ collection, entry }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: getArticleHref(collection, entry, locale),
      categories: entry.data.taxonomies.tags,
    }));

  return rss({
    title: "Couvoir",
    description: feedDescriptions[locale],
    site,
    items,
    customData: `<language>${locale}</language>`,
  });
};
