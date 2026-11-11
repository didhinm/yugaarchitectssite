import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

export const heroWidths = [640, 960, 1280, 1920, 2400];
export const heroSizes = '100vw';

/** AVIF srcset for <link rel="preload">; must match the options Hero.astro passes to <Picture>. */
export async function heroPreload(src: ImageMetadata) {
  const img = await getImage({ src, widths: heroWidths, sizes: heroSizes, format: 'avif' });
  return { srcset: img.srcSet.attribute, sizes: heroSizes };
}
