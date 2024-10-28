import rss from '@astrojs/rss';

import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const blog = await getCollection('post');
  const retrospect = await getCollection('retrospect');

  return rss({
    title: 'Couvoir',
    description: 'couvoir = f(web)(log)',
    site: context.site!,
    items: [
      ...blog.map(({ data, slug }) => {
        const { title, description, date } = data;

        return {
          title,
          description,
          date,
          link: `/blog/post/${slug}`,
        };
      }),
      ...retrospect.map(({ data, slug }) => {
        const { title, description, date } = data;

        return {
          title,
          description,
          date,
          link: `/blog/retrospect/${slug}`,
        };
      }),
    ].toSorted((a, b) => b.date.getTime() - a.date.getTime()),
  });
}
