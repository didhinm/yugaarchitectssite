# Content guide: projects, hero images and publishing

How to add and update content on yugaarchitects.in without touching the design code.

---

## 1. How publishing works

| Branch | Used for | Goes live? |
|---|---|---|
| `main` | Day-to-day work. Commit freely. | **No** |
| `first-live-build` | The live site. | **Yes.** Every push deploys to https://yugaarchitects.in in about a minute |

Nothing on `main` reaches the live site until you publish it.

**Preview locally (full site):**

```bash
npm run dev:site
```

Then open http://localhost:4321. `npm run dev` shows the holding page while the site isn't launched.

**Check before publishing:**

```bash
npm run check
npm run build:site
```

Both must finish with no errors.

**Publish (copy main to the live branch):**

```bash
git checkout first-live-build
git merge main
git push
git checkout main
```

The deploy runs automatically: GitHub repo → **Actions** tab → "Deploy to GitHub Pages".

> While `LAUNCHED = false` in `site-mode.mjs`, the live site shows "Unearthing soon" on every page even after publishing. To launch, set `LAUNCHED = true` on `main`, commit, and publish as above.

---

## 2. Add a new project

1. **Copy the template folder** `templates/project/` to `src/content/projects/<slug>/`.
   The slug is the web address: lowercase words joined by hyphens, e.g. `laterite-house` → `/projects/laterite-house/`.
2. **Add the photos** to `src/content/projects/<slug>/images/` and delete the `README.txt` there.
3. **Fill in `index.md`.** Every field is explained in the template. The essentials:
   - `title`, `slug` (same as the folder name), `type`, `typeLabel`, `location`, `status`, `order`
   - `cover` + `coverAlt`: the main photo and its description
   - `lead`: the opening paragraph
   - `gallery`: the other photos, in order, each with a description and a layout (`full`, `pair` or `inset`)
   - the write-up below the second `---` line
4. **Preview** with `npm run dev:site` and open `/projects/<slug>/`.
5. **Commit on `main`**, then **publish** when it's ready (section 1).

**Choosing layouts**
- Landscape photo → `full`
- Two portrait photos → both `pair`, one after the other. They sit side by side.
- A single portrait photo → `inset`. It's automatically sized to fit the screen.

**Photo checklist**
- At least 2000 px on the long side (2400 px or more is ideal)
- No house numbers, name plates or identifiable people unless the client has agreed
- Every photo has a description (`alt`) of what the space is, e.g. "Verandah with built-in stone benches". Avoid "image of…".

---

## 3. Update an existing project

All project files live in `src/content/projects/<slug>/`:

| To change… | Edit |
|---|---|
| Text, facts, write-up | `index.md` |
| Swap a photo | Replace the file in `images/` with the same name, or update the file name in `index.md` |
| Add a gallery photo | Add the file to `images/`, then add a line under `gallery:` in `index.md` |
| Reorder projects | Change `order:` (1 = first) |
| Hide a project | `draft: true` |
| Remove a project | Delete its folder |
| Change the grid crop | `coverFocus: "left% top%"`, e.g. `"30% 50%"` shifts the crop to the left |

If you rename a project's `slug`, rename its folder to match. Its web address changes too.

---

## 4. Update the home page hero slideshow

Hero photos live in **`src/assets/hero/`**. Every image in that folder appears in the slideshow automatically.

**Add or replace hero images**
1. Put the images in `src/assets/hero/`, named so they sort in the order you want:
   ```
   01-facade.jpg
   02-pool-deck.jpg
   03-brick-entrance.webp
   04-skylight-atrium.webp
   ```
2. Add a description (and optionally a crop point) for each one in **`src/data/hero.ts`**, inside `heroDetails`. Copy this template for each image:
   ```ts
   '05-new-photo.jpg': {
     alt: 'Describe what the photo shows',
     focus: '50% 50%',        // crop centre on desktop (optional)
     focusMobile: '50% 50%',  // crop centre on phones (optional)
   },
   ```
   The name in quotes must match the file name exactly.
3. To remove an image, delete the file and its entry in `heroDetails`.

**Timing:** in `src/data/hero.ts`, `heroSettings`:
```ts
intervalSeconds: 3,   // seconds each slide stays up
fadeMs: 1000,         // cross-fade length in milliseconds
```

**How photos are arranged:** landscape photos fill the frame. On desktop, two portrait photos that come one after the other are shown side by side as one slide; on phones each is its own slide. If a crop cuts off something important, adjust `focus` / `focusMobile`.

---

## 5. Other content

| What | Where |
|---|---|
| Founder portrait | Drop one image into `src/assets/founder/` (4:5 portrait works best). The Founder page and home teaser pick it up automatically. |
| Founder bio | `src/pages/founder.astro` (text) and `src/data/founder.ts` (role, summary, credentials) |
| Phone, email, address, hours, Instagram | `src/data/site.ts` |
| Services and process text | `src/data/site.ts` (`services`, `process`) |
| Studio / About text | `src/pages/studio.astro` |
| Contact form options (project types, timelines) | `src/data/site.ts` (`form`) |
