import type { Locale } from "./i18n";

export const sharingImage = {
  width: 1200,
  height: 630,
  title: "Couvoir = f(projects)(blog)(me)",
  description: {
    ko: "그냥 뭐 이것저것",
    en: "A little bit of this, a little bit of that",
  },
} as const;

export const sharingImagePath = (locale: Locale): string => `/og/${locale}.png`;

export const sharingImageAlt = (locale: Locale): string =>
  `${sharingImage.title} — ${sharingImage.description[locale]}`;
