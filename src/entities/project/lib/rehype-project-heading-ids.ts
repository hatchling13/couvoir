import type { RehypePlugin } from "@astrojs/markdown-remark";
import { isAbsolute, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

// Run after rehypeHeadingIds: each project shares a page with other Markdown entries.
export const rehypeProjectHeadingIds: RehypePlugin<[{ directory: URL }]> = ({ directory }) => {
  const projectDirectory = fileURLToPath(directory);

  return (tree, file) => {
    if (!file.path) return;

    const path = relative(projectDirectory, file.path);
    if (isAbsolute(path) || path.startsWith(`..${sep}`) || !path.endsWith(".md")) return;

    // content/project/<locale>/<project>.md; keep nested paths distinct, if present.
    const [, ...segments] = path.split(sep);
    if (segments.length === 0) return;
    const project = segments.join("/").slice(0, -3);
    const ids = new Map<string, string>();

    for (const heading of file.data.astro?.headings ?? []) {
      const id = `${project}-${heading.slug}`;
      ids.set(heading.slug, id);
      heading.slug = id;
    }

    const nodes = [...tree.children];
    while (nodes.length > 0) {
      const node = nodes.pop();
      if (node?.type !== "element") continue;
      nodes.push(...node.children);

      const { id, href } = node.properties;
      if (/^h[1-6]$/.test(node.tagName) && typeof id === "string" && ids.has(id)) {
        node.properties.id = ids.get(id);
      }

      // Preserve same-document heading links, including percent-encoded Korean fragments.
      if (node.tagName !== "a" || typeof href !== "string" || !href.startsWith("#")) continue;
      let fragment: string;
      try {
        fragment = decodeURIComponent(href.slice(1));
      } catch {
        continue;
      }
      const target = ids.get(fragment);
      if (target) node.properties.href = `#${encodeURIComponent(target)}`;
    }
  };
};
