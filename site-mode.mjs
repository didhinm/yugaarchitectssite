// Launch switch.
// true  → every URL shows the "Unearthing soon" holding page (noindex, no sitemap).
// false → the full site is built and published.
// Flip to false, commit and push when the design and content are final.
const LAUNCHED = false;

// `npm run dev:site` / `npm run build:site` set SHOW_SITE=1 to see the full site locally
// without touching the committed switch above.
export const HOLDING_PAGE = !LAUNCHED && process.env.SHOW_SITE !== '1';
