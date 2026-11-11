import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const typeLabels = {
  residential: 'Residential / Villa',
  commercial: 'Commercial / Office',
  interiors: 'Interiors',
  hospitality: 'Hospitality / Retail',
  renovation: 'Renovation',
} as const;

/** Published projects (no drafts), in the manual `order`. */
export async function getPublishedProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function projectHref(project: Project): string {
  return `/projects/${project.data.slug}/`;
}

export const countryNames = { IN: 'India', AE: 'United Arab Emirates' } as const;

/** Group gallery items into rows: consecutive `pair` items sit side by side. */
export function galleryRows<T extends { layout: 'full' | 'inset' | 'pair' }>(items: T[]) {
  const rows: { layout: T['layout']; items: T[] }[] = [];
  for (const item of items) {
    const last = rows[rows.length - 1];
    if (item.layout === 'pair' && last?.layout === 'pair' && last.items.length < 2) {
      last.items.push(item);
    } else {
      rows.push({ layout: item.layout, items: [item] });
    }
  }
  return rows;
}
