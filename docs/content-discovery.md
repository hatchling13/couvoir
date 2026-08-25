# Content discovery

These notes record confirmed content decisions and personal interests. They are
not public-facing copy and do not prescribe a homepage layout, visual treatment,
or presentation format.

## Homepage

The homepage should help visitors understand what the site owner likes. These
interests have two dimensions: software-related interests and personal
interests outside software development.

### Software-related interests

- Functional programming.
- Effect systems, their implementations, and their ecosystems, including ZIO and
  Effect.ts.
- Exploring types and building type-safe programs.
- Making things with visible results, regardless of the technology involved.
  Web interfaces and augmented reality are examples, not limitations.
- Contributing to open source. Recent opportunities have been limited, so this
  should not imply active or ongoing contributions.

The existing `f(projects)(blog)(me)` navigation already reflects the interest in
functional programming. Munchkeen and Gluegun demonstrate an interest in
building visible things through different technologies.

### Personal interests

- Food in a broad sense: eating, cooking, and learning about ingredients.
- Games across many genres. Competitive and turn-based games are generally not
  preferred.
- A growing interest in making tangible things by hand. This is not currently
  an active pursuit, so it should not be presented as an established hobby.

### Existing site identity

- Site name: `Couvoir`.
- French definition: `Pièce pour couver artificiellement des œufs.`
- Korean description: `그냥 뭐 이것저것`.
- English description: `A little bit of this, a little bit of that`.
- Navigation: `Couvoir = f(projects)(blog)(me)`.

The way these interests and existing identity elements are presented belongs to
the later design phase.

## Projects

Two projects are confirmed:

1. Munchkeen, a Solid-first interactive graph exploration toolkit.
2. Gluegun, a Unity as a Library bridge for Expo applications.

Both projects have complete Korean and English Markdown entries, use the
`experimental` status, and are ready to publish. Their listing order is defined
explicitly instead of using dates.

The localized Projects pages display their summaries, technologies, external
links, and expandable descriptions through native `<details>` elements. Separate
project detail routes are not required.

Yigil Log, ShareRoutine, and Couvoir itself are not part of the Projects list.

## Blog

The existing Korean posts and retrospectives have been migrated. The blog uses
localized routes and RSS feeds. No additional blog content decisions are required
before beginning the design phase.

## CV and resume

The CV and resume are intentionally postponed until the rest of the website is
settled. Their written content requires a dedicated, deliberate content phase;
print-friendly presentation can be addressed afterward.

## Boundaries

- Preserve Korean and English localization.
- Do not invent interests, activities, experience, or public-facing copy.
- Do not treat software preferences as a claim that the owner only works on web
  frontends.
- Do not present inactive interests as ongoing activities.
- Do not add project dates.
- Do not decide homepage layout or add visual styling before the design phase.
- Use Impeccable when the visual design work begins.
