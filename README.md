# Yuga Architects website

Static portfolio site for Yuga Architects (Ar. Reshmi Ravindran), Palakkad, Kerala. Built with Astro, deployed to GitHub Pages at https://yugaarchitects.in.

- **Adding projects, hero images and publishing:** [`docs/content-guide.md`](docs/content-guide.md)
- Design brief and sitemap: [`docs/design-brief.md`](docs/design-brief.md) (source of truth)
- Working rules for contributors and Claude Code: [`CLAUDE.md`](CLAUDE.md)

## Develop

Requires Node 22.23+ (CI uses Node 24).

```bash
npm install
npm run dev        # http://localhost:4321 (holding page while not launched)
npm run dev:site   # full site, regardless of the launch switch
npm run check      # types + content schema
npm run build      # outputs to dist/
npm run build:site # full-site build
npm run preview
```

## Content

- Firm facts, nav, services, process and the form key: `src/data/site.ts`
- Projects: one folder per project in `src/content/projects/<slug>/` with `index.md` and `images/`. Start from [`templates/project/`](templates/project/). Schema in `src/content.config.ts` (brief §6).
- Hero slideshow: images in `src/assets/hero/`, descriptions and timing in `src/data/hero.ts`.
- `project-03` to `project-05` are hidden placeholders (`draft: true`), kept as examples.

## Holding page

The site launched on 11 Nov 2026 (`LAUNCHED = true` in [`site-mode.mjs`](site-mode.mjs)). Setting it back to `false` and publishing would bring back the "Unearthing soon" holding page on every URL.

## Launch checklist

- [x] First two projects (Talur’s, Summairi) with photos, write-ups and alt text
- [ ] Larger originals of the project photos (≥2400 px long edge) where available
- [x] Web3Forms access key in `src/data/site.ts`
- [x] Spam protection: hCaptcha tick required in the browser (hCaptcha is off in the Web3Forms dashboard by choice) + hidden spam-trap field. Turn it on in the dashboard for full server-side protection if spam appears.
- [x] Studio page: About copy
- [x] Services descriptions and the final process step
- [x] Founder page bio
- [ ] Founder portrait: drop one image into `src/assets/founder/`
- [x] Home hero slideshow (images in `src/assets/hero/`)
- [ ] Exact map pin for the studio (`address.geo` in `src/data/site.ts`)
- [x] Set `LAUNCHED = true` in `site-mode.mjs`

## Deploy

The live site deploys **only from the `first-live-build` branch** (`.github/workflows/deploy.yml`; the GitHub Pages environment also allows only that branch). Work on `main`, then publish:

```bash
git checkout first-live-build
git merge main
git push
git checkout main
```

One-time setup:

1. GitHub repo → Settings → Pages: Source = **GitHub Actions**; custom domain `yugaarchitects.in`; **Enforce HTTPS** once the certificate is issued.
2. Hostinger DNS (remove the default parking A/CNAME records first):
   - A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - AAAA `@` → 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
   - CNAME `www` → `didhinm.github.io`
