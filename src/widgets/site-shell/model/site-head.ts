import type { Locale } from "@shared/config/i18n";
import { useHead, useSeoMeta } from "unhead";
import { createHead } from "unhead/server";

export interface ArticleMetadata {
  publishedAt: Date;
  tags: string[];
}

interface SiteHeadOptions {
  title: string;
  description: string;
  site: URL;
  pathname: string;
  locale: Locale;
  noindex?: boolean;
  article?: ArticleMetadata;
}

export const renderSiteHead = ({
  title,
  description,
  site,
  pathname,
  locale,
  noindex = false,
  article,
}: SiteHeadOptions): string => {
  // A separate instance per page prevents metadata leaking between builds.
  const head = createHead({ disableDefaults: true });
  const documentTitle = title.startsWith("Couvoir") ? title : `${title} | Couvoir`;
  const summary = description.trim() || undefined;
  const canonical = new URL(pathname, site);
  canonical.search = "";
  canonical.hash = "";
  canonical.pathname = `${canonical.pathname.replace(/\/+$/, "")}/`;

  useSeoMeta(head, {
    title: documentTitle,
    description: summary,
    ...(noindex
      ? { robots: "noindex" }
      : {
          ogTitle: documentTitle,
          ogDescription: summary,
          ogUrl: canonical.href,
          ogSiteName: "Couvoir",
          ogType: article ? "article" : "website",
          ogLocale: locale === "ko" ? "ko_KR" : "en_US",
          twitterTitle: documentTitle,
          twitterDescription: summary,
          ...(article && {
            articlePublishedTime: article.publishedAt.toISOString(),
            articleTag: article.tags,
          }),
        }),
  });

  if (!noindex) {
    useHead(head, {
      link: [
        { rel: "canonical", href: canonical.href },
        { rel: "sitemap", type: "application/xml", href: "/sitemap-index.xml" },
      ],
    });
  }

  return head.render().headTags;
};
