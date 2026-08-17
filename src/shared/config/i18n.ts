export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);

export const getLocale = (value: string | undefined): Locale =>
  isLocale(value) ? value : defaultLocale;

export const localeText = {
  ko: {
    articleBody: "본문",
    tags: "태그",
    posts: "게시글",
    retrospects: "회고",
    more: "더보기",
    empty: "아직 작성된 글이 없습니다.",
    previousPage: "이전 페이지",
    nextPage: "다음 페이지",
    pagination: "페이지",
  },
  en: {
    articleBody: "Article body",
    tags: "Tags",
    posts: "Posts",
    retrospects: "Retrospects",
    more: "View all",
    empty: "No articles yet.",
    previousPage: "Previous page",
    nextPage: "Next page",
    pagination: "Pagination",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export const dateLocales = {
  ko: "ko-KR",
  en: "en-US",
} as const satisfies Record<Locale, string>;
