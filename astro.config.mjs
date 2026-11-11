// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that must never appear in the sitemap (drafts, utility pages).
const EXCLUDED = ['/founder/', '/contact/thanks/', '/404/'];

export default defineConfig({
  site: 'https://yugaarchitects.in',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.some((path) => new URL(page).pathname === path),
    }),
  ],
});
