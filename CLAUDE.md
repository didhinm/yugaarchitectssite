# CLAUDE.md: Yuga Architects website

Static portfolio site for **Yuga Architects** (Ar. Reshmi Ravindran), an architecture and interiors studio in Palakkad, Kerala, working across India and the UAE.
Live at **https://yugaarchitects.in**.

**Read `docs/design-brief.md` before any design or content work.** It is the source of truth for the palette, type, layout, page specs, sitemap and content model. If this file and the brief disagree, the brief wins. Update both when a decision changes.

## Stack
- Astro (static output, `output: 'static'`), TypeScript (strict)
- Plain CSS with custom properties in `src/styles/`. No Tailwind or CSS frameworks.
- Fonts self-hosted via Fontsource (`@fontsource-variable/jost` for headings and labels, `@fontsource-variable/instrument-sans` for body). Headings use light weights (300–400); the logo is the only heavy element. No serif. Never load Google Fonts from a CDN.
- Logo files in `public/brand/` (see brief §3.2a). Never redraw the logo in CSS or text. Use the image files.
- Images via `astro:assets` (`<Picture>` with `formats={['avif','webp']}`)
- `@astrojs/sitemap`
- Contact form: Web3Forms (`https://api.web3forms.com/submit`), access key in `src/data/site.ts`
- Hosting: GitHub Pages via GitHub Actions (`withastro/action`); `public/CNAME` = `yugaarchitects.in`

## Commands
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview
npm run check      # astro check (types + content schema)
```

## Project structure
```
src/
  assets/brand/    Copies of monogram, wordmark, logo-full PNGs so astro:assets can resize them (header/footer)
  components/      Header, Footer, Hero, ProjectTile, ProjectFacts, Gallery, Lightbox, ContactForm, CTA, Seo
  content.config.ts  Zod schema for the projects collection (see brief §6)
  content/
    projects/<slug>/index.md + images/
  data/site.ts     Single source for firm name, tagline, contact details, socials, nav, services, process, form key
  lib/             projects.ts (published/sorted projects, gallery rows), hero.ts (hero widths + preload)
  layouts/         BaseLayout.astro (head, SEO, header, footer)
  pages/           index, projects/index, projects/[slug], studio, founder, services, contact, contact/thanks, 404
  styles/          tokens.css (palette, type scale, spacing), base.css, utilities.css
public/            CNAME, favicon, robots.txt, og-default.jpg
docs/              design-brief.md
```

## Holding page (pre-launch)
`site-mode.mjs` → `HOLDING_PAGE = true` makes `BaseLayout` render `src/components/Holding.astro` ("Unearthing soon", black background with a line-drawn plan) on every URL, including 404. All pages are noindex and no sitemap is built. Develop the full site with `HOLDING_PAGE = false` locally, but don't commit that until the client approves launch.

## Rules
- **All firm facts come from `src/data/site.ts`.** Never hard-code a phone number, email, address or tagline in a component.
- Design tokens only: use `var(--ink)` etc. Don't add new colours, fonts or font weights without updating the brief.
- Photography leads. No gradients over images, no stock photos, no decorative icons, no autoplay carousels, no parallax.
- Motion: subtle fades only, ≤300 ms, disabled under `prefers-reduced-motion`.
- Mobile-first CSS. Test at 375 px, 768 px, 1280 px and 1600 px.
- Minimal JS: ship only what the menu, lightbox and form need. Prefer `<script>` in components over UI frameworks. No React/Vue.
- Every image needs descriptive `alt` text, explicit dimensions, and lazy loading below the fold. Preload the hero image.
- Accessibility: WCAG 2.2 AA, semantic HTML, visible focus rings, keyboard-operable menu and lightbox, labelled form fields.
- SEO: every page sets a title, description and OG image through `<Seo>`; JSON-LD `ProfessionalService` on every page, `CreativeWork` on project pages.
- Pages or projects with `draft: true` are excluded from the build output, nav and sitemap. `/founder/` stays draft until the client sends the bio.
- British/Indian English spelling (visualisation, colour, practising).
- Don't invent content. Use `[TBC: …]` placeholders where the client hasn't supplied facts.

## Firm facts (mirror of `src/data/site.ts`)
- Name: Yuga Architects · Sub-line: Ar. Reshmi Ravindran · Tagline: *Unearthing your dreams*
- Email: yugaarchitects01@gmail.com
- WhatsApp: +91 73059 92045 (`https://wa.me/917305992045`)
- Call India: +91 62382 82925 · Call UAE: +971 56 593 9195
- Instagram: https://www.instagram.com/yuga.architects
- Studio: 20/160, Edayar Street 3, Palakkad, Kerala 678001. Visits by appointment only.
- Hours: Mon–Sat, 9:00–17:00 IST

## Deployment
1. `astro.config.mjs`: `site: 'https://yugaarchitects.in'`, no `base`.
2. `.github/workflows/deploy.yml` uses `withastro/action` + `actions/deploy-pages` on push to `main`.
3. Repo → Settings → Pages: Source = GitHub Actions; custom domain `yugaarchitects.in`; Enforce HTTPS.
4. Hostinger DNS: A records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; AAAA → 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153; CNAME `www` → `<github-username>.github.io`. Remove Hostinger's default parking A/CNAME records first.

## Definition of done (each page)
- `npm run build` and `npm run check` pass with no warnings
- Lighthouse mobile ≥ 95 in all categories
- No layout shift on load; checked at all four breakpoints
- Keyboard-only walkthrough works
- Matches the page spec in `docs/design-brief.md` §5
