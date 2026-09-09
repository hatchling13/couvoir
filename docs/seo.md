# SEO metadata

`astro.config.mjs` supplies the production origin, `https://hatchling.dev`.
The shared site shell renders Unhead metadata at build time, using a fresh
instance for each page. No Unhead runtime is sent to the browser.

## Page metadata

- Pages supply their title and existing description to `SiteShell`. Search
  descriptions do not have to be promotional; preserve the owner's wording.
  Empty descriptions are omitted rather than replaced with invented summaries.
- Home and Blog titles follow their navigation expressions. Me keeps
  `me = f(cv)`. Terminal pages and individual articles retain their titles.
- Archive titles include the collection and page number. Each archive page
  has its own canonical URL, not the first page's URL.
- Canonical URLs use the configured production origin and a trailing slash,
  without query strings or fragments.
- Open Graph and Twitter titles/descriptions reuse the page metadata.
  Open Graph also declares the URL, site name, locale, and page type.
- Article routes pass their existing publication date and tags. No modification
  date is inferred from the build time.
- Open Graph images and Twitter large-image cards use a shared site image in
  the page's language, including on articles. Article-specific artwork is not
  generated yet.

## Sharing images

`src/pages/og/[locale].png.ts` generates `/og/ko.png` and `/og/en.png` during
`astro build`. Takumi renders a 1200 × 630 monochrome image with the home
navigation expression, existing localized home description, and site hostname.
The renderer lives in `src/widgets/site-shell/model/sharing-image.ts`; shared
dimensions, text, paths, and alt text live in `src/shared/config/sharing-image.ts`.

Image rendering uses bundled font files under `src/shared/assets/og-fonts`
(with source links and licenses), so it does not fetch fonts during builds.
Build from the project root, as with the existing package scripts. The website's
CSS font imports remain unchanged. Neither Takumi nor the bundled font sources
are shipped to browsers; Cloudflare serves the generated PNGs as static assets.

The fixed raster template uses pixel dimensions independently of the website's
responsive Panda styles. Image metadata includes an absolute production URL,
PNG type, dimensions, and localized alt text. Error pages remain excluded.

## Discovery and language variants

`@astrojs/sitemap` generates `sitemap-index.xml` and its child sitemap files.
It includes real generated pages and excludes the root redirect and error pages.
No speculative priorities, update frequencies, or last-modified dates are added.

Language alternates are declared in the sitemap, not duplicated in HTML.
The integration pairs existing Korean and English routes with the same path
after the locale prefix. A Korean article with no matching English route has
no English alternate. If translated slugs diverge in future, this pairing must
be updated explicitly.

`robots.txt` allows crawling and points to the sitemap index. It is generated
from the same configured origin.

## Error pages

Error pages pass `noindex` to the site shell. They receive no canonical URL or
social metadata. Crawling is not blocked, so crawlers can see the HTTP status
and indexing directive.

Cloudflare serves the nearest `404.html` with HTTP 404. The build copies the
localized Astro pages to `ko/404.html` and `en/404.html`; the root `404.html`
is the Korean fallback. Use Wrangler's local preview to verify this behavior.

## After deployment

Verify the production sitemap, robots.txt, canonical URLs, and HTTP error
statuses. Search Console registration and sitemap submission are separate
account-level tasks; they are not performed by a build or deployment.
