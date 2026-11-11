// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { HOLDING_PAGE } from './site-mode.mjs';

// Where the site is served. Defaults to the custom domain at the root.
// The deploy workflow overrides these while the site lives at didhinm.github.io/yugaarchitectssite/.
const SITE_URL = process.env.SITE_URL || 'https://yugaarchitects.in';
const BASE_PATH = process.env.BASE_PATH || '/';
const base = BASE_PATH.replace(/\/$/, '');

// Pages that must never appear in the sitemap (drafts, utility pages).
const EXCLUDED = ['/contact/thanks/', '/404/'].map((path) => `${base}${path}`);

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    responsiveStyles: false,
  },
  // No sitemap while the holding page is up (every page is noindex).
  integrations: HOLDING_PAGE
    ? []
    : [
        sitemap({
          filter: (page) => !EXCLUDED.includes(new URL(page).pathname),
        }),
      ],
});
