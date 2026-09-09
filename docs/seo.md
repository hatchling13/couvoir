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
- Sharing images and image-card metadata are deferred until an image is chosen.

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
