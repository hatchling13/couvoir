import type { APIRoute, GetStaticPaths } from "astro";
import { isLocale, locales } from "@shared/config/i18n";
import { renderSharingImage } from "@widgets/site-shell/model/sharing-image";

export const getStaticPaths: GetStaticPaths = () =>
  locales.map((locale) => ({ params: { locale } }));

export const GET: APIRoute = async ({ params, site }) => {
  if (!site) {
    throw new Error("Sharing images require Astro.site.");
  }
  if (!isLocale(params.locale)) {
    throw new Error("Unsupported sharing image locale.");
  }

  const image = await renderSharingImage(params.locale, site);

  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": "image/png" },
  });
};
