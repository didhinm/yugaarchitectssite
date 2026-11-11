# Yuga Architects: Design Brief & Sitemap

Version 1.0 · 10 Nov 2026 · Status: draft for client review
Items marked **[TBC]** are waiting on the client.

---

## 1. The firm

| | |
|---|---|
| Firm name | **Yuga Architects** |
| Wordmark lockup | "Yuga Architects" with "Ar. Reshmi Ravindran" beneath, in a smaller size |
| Tagline | *Unearthing your dreams* |
| Founder | Ar. Reshmi Ravindran, Founder & Principal Architect. Bio received 11 Nov 2026; portrait **[TBC]** |
| Studio | Palakkad, Kerala, India |
| Practice area | Projects across India and the UAE |
| Language | English only |
| Domain | `yugaarchitects.in` (bare domain is canonical; `www` redirects) |

**Positioning in one line:** an architecture and interiors studio from Palakkad, working across India and the UAE. It makes calm, carefully detailed spaces where the photography does the talking.

**Primary goal of the site:** turn a visitor who likes the work into a qualified enquiry (form, WhatsApp or call).
**Secondary goals:** credibility (founder, process, completed work), and local search visibility ("architect Palakkad", "architect Kerala", "villa architect Kerala UAE").

---

## 2. Audience

1. **Private clients planning a home or villa** in Kerala, elsewhere in India, or the UAE. This includes NRIs in the Gulf building back home, a key segment that the UAE number and WhatsApp serve directly.
2. **Business owners** planning offices, shops, cafés or hospitality spaces.
3. **Owners of existing buildings** looking at a renovation or interior refit.
4. Secondary: press, collaborators, prospective staff and interns.

Most visitors arrive on **mobile, often from Instagram**. Design mobile-first. Pages must load fast on Indian 4G.

---

## 3. Design direction

**Feel:** minimal, editorial, quiet. It should read like an architecture monograph, not a template. Whitespace is a material. The photography is the hero, and the interface stays out of its way.

**Principles**
1. **Images first.** Large, uncropped wherever possible, never overlaid with heavy text or gradients.
2. **Restraint.** One typeface pairing, a neutral palette, no decorative graphics, no stock imagery, no icons beyond the functional.
3. **Rhythm.** Generous vertical spacing; alternate full-bleed images with set-in text and 2-up image pairs.
4. **Precision.** A strict grid, aligned baselines, small uppercase labels with open letter-spacing. The site's details should feel as considered as her buildings.
5. **Calm motion.** Only subtle fades or reveals on scroll (≤300 ms, ease-out). No parallax. The one exception is the home-page hero, which cross-fades through a set of images on a loop (see §5.1). No other autoplaying carousels. Respect `prefers-reduced-motion`.

### 3.1 Palette

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Main background |
| `--stone` | `#F4F2EE` | Alternate section background, image placeholders. A warm off-white that nods to earth and "unearthing" |
| `--ink` | `#141414` | Text, wordmark, buttons |
| `--muted` | `#6E6B66` | Secondary text, labels, metadata (passes WCAG AA on white and stone) |
| `--rule` | `#E4E1DB` | Hairlines, dividers, input borders |

No accent colour. Links are ink with an underline; hover thins or offsets the underline.

### 3.2 Typography (aligned to the logo)

The logo is an all-sans geometric identity: a heavy uppercase wordmark, a regular-weight name line, and a YA monogram in a circle. The site type echoes it without competing:

- **Headings & labels:** *Jost* (variable, geometric, Futura-like). Headings use **light weights (300–400)** so the bold wordmark stays the only heavy element on the page. That contrast is what makes it feel editorial.
- **Body text:** *Instrument Sans* (quiet grotesk, very readable at small sizes).
- Both are free and self-hosted via Fontsource (no Google Fonts calls). Use `font-display: swap`.
- No serif anywhere.

| Role | Font | Size (mobile → desktop) | Notes |
|---|---|---|---|
| Hero / H1 | Jost 300 | 40 → 76 px | Leading 1.05, letter-spacing −0.01em |
| H2 | Jost 300 | 28 → 44 px | |
| H3 | Jost 500 | 18 → 20 px | |
| Body | Instrument Sans 400 | 17 → 18 px | Leading 1.6, measure 60–70ch |
| Label | Jost 500 | 12 → 13 px | UPPERCASE, letter-spacing 0.14em (echoes the wordmark), `--muted` |

### 3.2a Logo usage

Files are in `public/brand/` (transparent PNGs cropped from the master; replace them with SVGs when the vector source is found):

| File | Use |
|---|---|
| `monogram.png` / `-white` | Header on mobile; favicon source; small marks |
| `wordmark.png` / `-white` | Header on desktop, next to the monogram ("YUGA ARCHITECTS / Ar. Reshmi Ravindran") |
| `logo-full.png` / `-white` | Footer and social preview: the full lockup including "India \| UAE" |
| `icon-32/180/512.png` | Favicon, Apple touch icon, web manifest |

- Header height: monogram 36 px (mobile) / 44 px (desktop). Never stretch, recolour (ink or white only) or add effects.
- Clear space around the logo is at least the height of the "Y" in the monogram.
- Use the white version only over solid ink or very dark image areas.

### 3.3 Layout & grid

- 12 columns on desktop, 4 on mobile; gutter 24 px; outer margin 20 px (mobile) → 64 px (desktop).
- Max content width 1440 px; text blocks capped at ~680 px.
- Vertical spacing scale: 8 / 16 / 24 / 40 / 64 / 96 / 160 px.
- Header: wordmark lockup left, nav right. Shrinks to a minimal bar on scroll. On mobile, a full-screen overlay menu.
- Footer: wordmark, tagline, address, hours, contact links, Instagram, ©.

### 3.4 Photography rules

- Serve AVIF/WebP via Astro's `<Picture>`, with responsive `srcset`, lazy-loading below the fold, and explicit width and height (no layout shift).
- The cover image of each project sets its tile on the grid. Use a consistent aspect ratio on the grid (4:5 portrait suggested) via `object-fit: cover` with a per-image focal point.
- Every image needs meaningful `alt` text (what the space is, not "image of").
- Credit the photographer on project pages where known.

---

## 4. Sitemap

```
/                         Home
/projects/                Projects (grid)
/projects/<slug>/         Project detail (×5 at launch)
/studio/                  About the Firm
/founder/                 About the Founder
/services/                Services
/contact/                 Contact (form)
/contact/thanks/          Form success page
/404                      Not found
/sitemap-index.xml        (generated)
/robots.txt
```

**Main navigation:** Projects · Studio · Founder · Services · Contact
(Nav labels are short on purpose. "Studio" means About the Firm.)

---

## 5. Page specifications

### 5.1 Home `/`
1. **Hero:** a full-bleed slideshow of hero photographs that cross-fades to the next image every 3 s on a loop (interval and fade length are settings in `src/data/hero.ts`). The tagline *Unearthing your dreams* is set small beneath it, with a slide counter and Prev / Pause / Next controls on the same row. It pauses while its controls have keyboard focus and when the tab is hidden, and doesn't autoplay under `prefers-reduced-motion`. *(Changed 11 Nov 2026 at the client's request; was a single still image.)*
2. **Intro line:** one or two sentences on who Yuga is and where they work, linking to Studio.
3. **Selected work:** all launch projects as large tiles (alternating full-width and 2-up). Each tile shows the image, project name, type label and location.
4. **Services strip:** the six services as a simple text list, linking to Services.
5. **Founder teaser:** name, role and one line from the bio, linking to Founder. Shows the portrait once it is added to `src/assets/founder/`.
6. **Enquiry CTA:** "Planning a home, workplace or renovation?" with buttons for Start a conversation (/contact) and WhatsApp.

### 5.2 Projects `/projects/`
- Page title plus a one-line intro.
- Grid: 1 column on mobile, 2 on tablet and desktop (larger tiles suit 5 projects better than 3 small columns).
- Each tile: cover image, **type label** (e.g. `RESIDENTIAL / VILLA`), project name, location and year.
- No filters. Order is set manually (`order` field).

### 5.3 Project detail `/projects/<slug>/`
1. Full-bleed hero image.
2. Title, with a **facts panel**: Type · Location · Year · Status (Completed / Ongoing) · Built-up area · Scope · Photographer.
3. **Write-up:** a short lead paragraph (40–60 words), then two or three short sections (e.g. *The brief*, *The response*, *Materials & light*), 250–450 words in total.
4. **Gallery:** a sequence of full-bleed, set-in and 2-up pairs, set by the order in the content file. Optional lightbox (vanilla JS, keyboard-accessible).
5. **Next project** link, then an enquiry CTA.

### 5.4 Studio (About the Firm) `/studio/`
- Opening statement (what "Yuga" means and the tagline idea).
- Approach: three or four short principles.
- Where we work: Palakkad studio, projects across India and the UAE.
- Process summary, linking to Services.
- Studio photo if available.

### 5.5 Founder `/founder/` (bio received 11 Nov 2026; text in `src/pages/founder.astro` and `src/data/founder.ts`)
- Portrait (one strong image, muted or B&W).
- Ar. Reshmi Ravindran: bio, education, experience, why she founded Yuga, design philosophy, recognition and memberships.
- Published in the nav and sitemap. Without a portrait the page shows the bio with a credentials panel; adding an image to `src/assets/founder/` switches it to the portrait layout.

### 5.6 Services `/services/`
Six services, each with a two- or three-sentence description (drafted 11 Nov 2026; text lives in `src/data/site.ts`):
1. Architectural design
2. Interior design
3. Renovation & adaptive reuse
4. Landscape design
5. Design consultation
6. 3D visualisation

**Process** (confirmed 11 Nov 2026):
Consultation → Concept → Design development → Drawings → Through construction
*(Step 4 was "Drawings & approvals"; approvals removed at the client's request. Step 5 is design supervision during construction. The studio does not offer full project management.)*

Not offered (for internal reference; don't list publicly): turnkey / design-and-build, project management, master planning.

### 5.7 Contact `/contact/`
- Intro line plus **"Studio visits by appointment only."**
- **Form** (Web3Forms): Name*, Email*, Phone (with country code), Project type (select: Residential / Villa · Commercial / Office · Interiors · Hospitality / Retail · Renovation · Other), Project location (city / country), Approx. timeline (select), Message*. Includes a honeypot and hCaptcha. Redirects to `/contact/thanks/`.
- **Direct contact:**
  - Email: yugaarchitects01@gmail.com
  - WhatsApp: +91 73059 92045 → `https://wa.me/917305992045`
  - Call (India): +91 62382 82925 → `tel:+916238282925`
  - Call (UAE): +971 56 593 9195 → `tel:+971565939195`
  - Instagram: instagram.com/yuga.architects
- **Studio:** 20/160, Edayar Street 3, Palakkad, Kerala 678001, with a "Get directions" link to Google Maps. A static link, not an embedded map, to keep the page fast.
- **Hours:** Mon–Sat, 9:00–17:00 IST.
- A short privacy note under the form: details are used only to respond to the enquiry.

---

## 6. Content model: projects

One Markdown file per project in `src/content/projects/`. Frontmatter:

```yaml
title: "Laterite House"            # project name
slug: laterite-house
type: residential                  # residential | commercial | interiors | hospitality | renovation
typeLabel: "Residential / Villa"   # shown on grid
location: "Palakkad, Kerala"
country: IN                        # IN | AE
year: 2025
status: completed                  # completed | ongoing
area: "3,200 sq ft"                # optional
scope: ["Architecture", "Interiors", "Landscape"]
photographer: "Name"               # optional
order: 1                           # grid order
cover: ./images/cover.jpg
coverAlt: "…"
coverFocus: "50% 40%"              # object-position for grid crop
lead: "40–60 word opening paragraph"
gallery:
  - { src: ./images/01.jpg, alt: "…", layout: full }   # full | inset | pair
  - { src: ./images/02.jpg, alt: "…", layout: pair }
  - { src: ./images/03.jpg, alt: "…", layout: pair }
draft: false
```
The body holds the write-up sections (`## The brief`, etc.).

**Type labels used on the grid**
| `type` | Label |
|---|---|
| residential | Residential / Villa |
| commercial | Commercial / Office |
| interiors | Interiors |
| hospitality | Hospitality / Retail |
| renovation | Renovation |

---

## 7. Technical requirements

- **Stack:** Astro (static output), TypeScript, plain CSS with custom properties (no CSS framework needed). Minimal client JS: menu toggle, optional lightbox, form submit.
- **Hosting:** GitHub Pages via GitHub Actions (`withastro/action`), custom domain `yugaarchitects.in`, HTTPS enforced. `public/CNAME` contains `yugaarchitects.in`.
- **Form:** Web3Forms (free plan: 250 submissions/month, hCaptcha, custom redirect). The access key is public-safe and lives in `src/data/site.ts`.
- **SEO:** unique title and description per page; Open Graph and Twitter images (project cover); `@astrojs/sitemap`; canonical URLs; JSON-LD `ProfessionalService` with address, geo, phone and `areaServed` (India, UAE); one JSON-LD `CreativeWork` per project.
- **Performance targets:** Lighthouse ≥ 95 on all four scores (mobile); LCP < 2.5 s on 4G; hero image preloaded; total JS < 30 KB.
- **Accessibility:** WCAG 2.2 AA; semantic landmarks; visible focus styles; keyboard-operable menu and lightbox; form labels and error messages; `prefers-reduced-motion`.
- **Analytics (optional):** privacy-friendly and cookie-free (e.g. Cloudflare Web Analytics or GoatCounter). No cookie banner needed if cookie-free.
- **Browser support:** last two versions of evergreen browsers, iOS Safari 16+.

---

## 8. Assets checklist

| Asset | Status |
|---|---|
| Logo | Received (transparent PNG, 2172×724); crops made in `public/brand/`. **Ask the logo designer for the SVG/AI/PDF source** for sharper rendering |
| Favicon | Made from the monogram (`icon-32/180/512.png`) |
| Project photos (×5) | Ready. Need originals at full resolution, ≥2400 px on the long edge |
| Project write-ups | To be drafted via interview (next step) |
| Founder bio | Received 11 Nov 2026 |
| Founder portrait | **[TBC]**: drop into `src/assets/founder/` |
| Studio photo | Optional |
| Social preview image | Generated from the logo plus a hero photo |

## 9. Open decisions

1. ~~Typeface pairing~~ Resolved: Jost (light) + Instrument Sans, to match the logo.
2. ~~Final step of the process~~ Resolved: design supervision through construction.
3. ~~Which project is the home-page hero~~ Resolved: a hero slideshow from images in `src/assets/hero/`.
4. Analytics: yes / no.
