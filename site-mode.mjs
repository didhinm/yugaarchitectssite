// Launch switch.
// true  → the full site is built and published (launched 11 Nov 2026).
// false → every URL shows the "Unearthing soon" holding page (noindex, no sitemap).
const LAUNCHED = true;

// `npm run dev:site` / `npm run build:site` set SHOW_SITE=1 to see the full site locally
// without touching the committed switch above.
export const HOLDING_PAGE = !LAUNCHED && process.env.SHOW_SITE !== '1';
