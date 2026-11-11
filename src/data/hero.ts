import type { ImageMetadata } from 'astro';

// Home-page hero slideshow.
// Images live in src/assets/hero/. Name them so they sort in the order you want (01-…, 02-…).
// Landscape images fill the frame on their own. On wide screens, two portrait images next to
// each other in the order are shown side by side as one slide; on narrow screens each is its own slide.

export const heroSettings = {
  /** Seconds each slide stays on screen before the next one fades in. */
  intervalSeconds: 3,
  /** Length of the cross-fade between slides, in milliseconds. */
  fadeMs: 1000,
};

/**
 * Per-image details, keyed by filename. Give every image real alt text (what the space is).
 * `focus` is the crop centre on wide screens and `focusMobile` on phones and tablets,
 * as CSS object-position values ('50% 50%' = centre; lower % = further left / up).
 */
export const heroDetails: Record<string, { alt: string; focus?: string; focusMobile?: string }> = {
  '01-facade-screen.jpg': {
    alt: 'Multi-storey house with a perforated rust-coloured screen, glass balconies and terrace planting, seen through trees',
    focus: '50% 55%',
    focusMobile: '62% 50%',
  },
  '02-pool-deck.jpg': {
    alt: 'Covered timber deck with a hanging rattan chair beside a narrow pool and a water spout on a grey stone wall',
    focus: '50% 60%',
    focusMobile: '42% 50%',
  },
  '03-brick-entrance.webp': {
    alt: 'Entrance passage between exposed brick walls and a glass-block wall, with stepping stones set in grass',
    focus: '50% 62%',
  },
  '04-skylight-atrium.webp': {
    alt: 'Double-height atrium with a ceiling of circular skylights, a dark stone feature wall and a steel-railed staircase',
    focus: '50% 30%',
  },
};

export type HeroImage = {
  src: ImageMetadata;
  alt: string;
  focus: string;
  focusMobile: string;
  file: string;
  portrait: boolean;
};

/** One slide: a single image, or a portrait pair (wide screens only). */
export type HeroSlide = { images: HeroImage[]; only?: 'wide' | 'narrow' };

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
});

export function getHeroImages(): HeroImage[] {
  return Object.entries(files)
    .map(([path, mod]) => {
      const file = path.split('/').pop()!;
      const details = heroDetails[file];
      const focus = details?.focus ?? '50% 50%';
      return {
        src: mod.default,
        file,
        alt: details?.alt ?? `[TBC: describe ${file}]`,
        focus,
        focusMobile: details?.focusMobile ?? focus,
        portrait: mod.default.height > mod.default.width,
      };
    })
    .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
}

/** Group images into slides: consecutive portraits pair up on wide screens. */
export function toSlides(images: HeroImage[]): HeroSlide[] {
  const slides: HeroSlide[] = [];
  for (let i = 0; i < images.length; i++) {
    const a = images[i];
    const b = images[i + 1];
    if (a.portrait && b?.portrait) {
      slides.push({ images: [a, b], only: 'wide' });
      slides.push({ images: [a], only: 'narrow' });
      slides.push({ images: [b], only: 'narrow' });
      i++;
    } else {
      slides.push({ images: [a] });
    }
  }
  return slides;
}
