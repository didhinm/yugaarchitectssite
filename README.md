# Yuga Architects website

Static portfolio site for Yuga Architects (Ar. Reshmi Ravindran), Palakkad, Kerala. Built with Astro, deployed to GitHub Pages at https://yugaarchitects.in.

- Design brief and sitemap: [`docs/design-brief.md`](docs/design-brief.md) (source of truth)
- Working rules for contributors and Claude Code: [`CLAUDE.md`](CLAUDE.md)

## Develop

Requires Node 22.23+ (CI uses Node 24).

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # types + content schema
npm run build      # outputs to dist/
npm run preview
```

## Content

- Firm facts, nav, services, process and the form key: `src/data/site.ts`
- Projects: one folder per project in `src/content/projects/<slug>/` with `index.md` and `images/`. Schema in `src/content.config.ts` (brief §6).
- The five projects in the repo are **placeholders**: plain stone-coloured images and `[TBC]` text. Replace the images and frontmatter with the real projects before launch.

## Holding page

The live site currently shows an "Unearthing soon" holding page on every URL. Run `npm run dev:site` to see the full site locally. To go live, set `LAUNCHED = true` in [`site-mode.mjs`](site-mode.mjs), then commit and push.

## Before launch

- [x] First two projects (Talur’s, Summairi) with photos, write-ups and alt text
- [ ] Larger originals of the project photos (≥2400 px long edge) where available
- [x] Web3Forms access key in `src/data/site.ts`
- [ ] Turn on hCaptcha for the form in the Web3Forms dashboard
- [x] Studio page: About copy
- [x] Services descriptions and the final process step
- [x] Founder page bio
- [ ] Founder portrait: drop one image into `src/assets/founder/`
- [x] Home hero slideshow (images in `src/assets/hero/`)
- [ ] Exact map pin for the studio (`address.geo` in `src/data/site.ts`)
- [ ] Set `LAUNCHED = true` in `site-mode.mjs`

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup:

1. GitHub repo → Settings → Pages: Source = **GitHub Actions**; custom domain `yugaarchitects.in`; **Enforce HTTPS** once the certificate is issued.
2. Hostinger DNS (remove the default parking A/CNAME records first):
   - A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - AAAA `@` → 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
   - CNAME `www` → `didhinm.github.io`
