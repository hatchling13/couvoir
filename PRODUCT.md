# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Couvoir is for anyone who wants to know its owner, whether they are interested
in the owner as a software engineer, as a person, or both. Its audience is not
limited to recruiters, potential employers, other developers, or any other
single professional group.

## Product Purpose

Couvoir is a bilingual personal website that helps visitors understand who its
owner is. It brings together professional interests, personal interests,
selected software projects, and existing writing without reducing the owner to
a job title or treating the website as a conventional employment portfolio.

Success means visitors leave with a clearer understanding of the person behind
the website.

## Positioning

Couvoir presents the same person through both software-related and personal
interests. Its existing project entries and writing are firsthand evidence of
that person's work and thinking; they must not be supplemented with invented
accomplishments or claims.

## Operating Context

Visitors can explore the localized homepage, Projects, Blog, and Me sections in
Korean or English. Korean is the default locale, and localized RSS feeds support
following published writing.

The Me pages currently provide localized profile and contact information.
CV or résumé content and any print-friendly presentation remain postponed until
the rest of the website is settled and their content has been discussed
separately.

## Capabilities and Constraints

- Astro 7 generates a static website with TypeScript 6, Panda CSS, and pnpm.
- The codebase follows an Astro-adapted, Feature-Sliced Design-inspired
  architecture.
- Oxlint and Oxfmt provide project tooling; Prettier is used only for `.astro`
  files.
- Preserve Korean and English localization, localized routes, the shared site
  shell, and localized RSS feeds.
- Existing blog posts and retrospectives have been migrated. The existing
  article content is currently Korean; English routes already exist without
  implying that English article translations are available.
- The portfolio contains exactly two approved projects: Munchkeen and Gluegun.
- Both projects are explicitly marked `experimental` and have complete Korean
  and English Markdown entries.
- Project ordering is explicit. Do not introduce project dates.
- Project summaries, technologies, external links, and descriptions belong on
  the localized Projects pages. Preserve native `<details>` for expandable
  descriptions; do not introduce separate project detail routes.
- Do not add Couvoir itself, Yigil Log, or ShareRoutine as portfolio projects.
- The palette, typography, and interaction direction have been established
  collaboratively. Preserve the decisions below; implementation conventions
  are recorded in `docs/styling.md`.
- Do not invent achievements, experience, activities, interests, project facts,
  testimonials, or public-facing copy. Existing internal product and discovery
  documents are not approved public-facing copy.

## Agreed Design Direction

- Use a white background and monochrome UI. Create emphasis through contrast,
  line weight, typography, and spacing; photographs can supply color without
  requiring a separate UI accent color. Avoid a conventional portfolio hero.
- Use Libertinus Math for entire function-like expressions, including their
  keywords and operators, with italic treatment throughout. Use Fira Sans for
  Latin content and MaruBuri for Korean content. Load the fonts through CSS
  imports; keep expression and content typography separate.
- Function notation represents a whole composed from independent parts, not
  an invented chain of transformations between unrelated interests. The site
  navigation links to real pages; the interests expression expands in place.
- Start interest branches collapsed. Selecting an argument reveals its children
  on the next expression row and dims its siblings. A terminal selection reveals
  a blockquote. Keep keywords in English using kebab-case; never break inside a
  keyword or its surrounding parentheses. Quote text may use either language,
  independently of the page locale, and still needs to be written by the owner.
- Keep the gallery on the homepage, separate from Projects and Me. It is not
  limited to handmade objects. Allow descriptions to wrap on their own line,
  with the date right-aligned on the following line. The current gallery is a
  development-only placeholder and stays out of production until photographs
  and their content are ready.
- Keep Projects as native expandable entries, Blog as a compact index with
  paginated archives, and Me as profile/contact information pending résumé work.
  Center constrained article and archive containers while keeping text
  left-aligned.
- Place the footer definition and acknowledgement on one baseline at opposite
  ends when they fit. When space runs out, wrap into left-aligned rows. Retain
  the thin full-width rule and smaller acknowledgement text.
- Use subtle transitions for selection and revealed content, respecting reduced
  motion. Detailed timing adjustments can wait.
- Author styles with Panda classes on their elements, using shared tokens and
  rem-based scales rather than arbitrary values or `em`. Keep rendered Markdown
  styling at its content boundary. See `docs/styling.md` for the full conventions.

## Brand Commitments

- Site name: `Couvoir`.
- French definition: `Pièce pour couver artificiellement des œufs.`
- Footer acknowledgement: retain `Special thanks to 내가해냄!` with the link to
  `https://crepe.cm/@naega_haenaem_`, alongside the French definition. Omit
  지염도서관 because its color information is no longer used.
- Korean description: `그냥 뭐 이것저것`.
- English description: `A little bit of this, a little bit of that`.
- Existing navigation: `Couvoir = f(projects)(blog)(me)`.
- The function-inspired navigation reflects the owner's interest in functional
  programming.

Confirmed software-related interests:

- Functional programming.
- Effect systems, their implementations, and their ecosystems, including ZIO
  and Effect.ts.
- Exploring types and building type-safe programs.
- Making things with visible results regardless of the technology involved;
  web interfaces and augmented reality are examples, not limitations.
- Open-source contribution, without implying active or ongoing contributions
  when recent opportunities have been limited.

Confirmed personal interests:

- Food, including eating, cooking, and learning about ingredients.
- Games across many genres, generally excluding competitive and turn-based
  games.
- Growing interest in making tangible things by hand, without presenting it as
  an established or currently active hobby.

## Evidence on Hand

- Approved content decisions and boundaries: `docs/content-discovery.md`.
- Munchkeen, a Solid-first interactive graph exploration toolkit:
  `content/project/ko/munchkeen.md` and `content/project/en/munchkeen.md`.
- Gluegun, a Unity as a Library bridge for Expo applications:
  `content/project/ko/gluegun.md` and `content/project/en/gluegun.md`.
- Existing posts: `content/post/ko/`.
- Existing retrospectives: `content/retrospect/ko/`.
- Existing localized homepage, Projects, Blog, Me, and RSS routes:
  `src/pages/ko/` and `src/pages/en/`.
- Existing site identity and navigation:
  `src/widgets/home-introduction/ui/home-introduction.astro` and
  `src/widgets/site-shell/ui/site-navigation.astro`.

## Product Principles

1. Present the owner as a whole person, not only as a software engineer.
2. Ground every professional and personal claim in approved facts or existing
   firsthand work.
3. Keep Korean and English experiences available without implying content exists
   in a language when it does not.
4. Preserve the approved scope and honest experimental status of both projects.
5. Separate durable product truth from unapproved visual direction,
   public-facing copy, and postponed résumé decisions.
