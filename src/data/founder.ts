import type { ImageMetadata } from 'astro';

// Founder bio supplied by the studio (11 Nov 2026). Keep wording as given.

export const founder = {
  name: 'Ar. Reshmi Ravindran',
  role: 'Founder & Principal Architect',
  /** One-line summary used on the home page teaser. */
  summary:
    'Driven by a passion for creating meaningful spaces that seamlessly blend functionality, aesthetics, and a deep connection with nature.',
  credentials: [
    { label: 'Bachelor of Architecture', detail: 'Pillai College of Architecture' },
    {
      label: 'Master of Architecture',
      detail: 'Energy Efficient and Sustainable Architecture, National Institute of Technology (NIT), Tiruchirappalli. Gold Medal.',
    },
    { label: 'IGBC Accredited Professional', detail: 'Indian Green Building Council' },
    { label: 'NCARB certification', detail: 'Council of Architecture, India-listed' },
  ],
};

/** Portrait: drop one image into src/assets/founder/ (e.g. portrait.jpg) and it is used automatically. */
const portraits = import.meta.glob<{ default: ImageMetadata }>('../assets/founder/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
export const founderPortrait: ImageMetadata | undefined = Object.values(portraits)[0]?.default;
