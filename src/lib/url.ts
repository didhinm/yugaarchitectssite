// Base-aware URLs, so the site works both at the domain root and under a subpath (e.g. GitHub Pages project URL).
// Always link internal pages and public/ files through these helpers, never with a bare "/path".

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Root-relative URL for an internal path, e.g. url('/contact/') → '/yugaarchitectssite/contact/'. */
export function url(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Absolute URL on the deployed site, e.g. for canonical, Open Graph and JSON-LD. */
export function absoluteUrl(path: string): string {
  return new URL(url(path), import.meta.env.SITE).href;
}

/** Strip the base from a pathname, so it can be compared with nav hrefs. */
export function stripBase(pathname: string): string {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
