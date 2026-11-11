---
# ─────────────────────────────────────────────────────────────────────────────
# PROJECT TEMPLATE. See docs/content-guide.md, "Add a new project".
# 1. Copy this whole folder (templates/project) to src/content/projects/<slug>/
#    e.g. src/content/projects/laterite-house/
# 2. Put the photos in that folder's images/ subfolder.
# 3. Fill in every field below. Lines starting with # are notes and can stay.
# ─────────────────────────────────────────────────────────────────────────────

title: "Project name"                     # shown on the page, the grid and the browser tab
subtitle: "One-line descriptor"           # optional; shown under the title on the project page
slug: project-name                        # lowercase-with-hyphens; MUST match the folder name; becomes /projects/<slug>/

type: residential                         # one of: residential | commercial | interiors | hospitality | renovation
typeLabel: "Residential"                  # label shown above the title, e.g. "Residential / Villa", "Interiors"

location: "Town, District"                # e.g. "Panaiyur, Chennai"
country: IN                               # IN (India) or AE (UAE)
# year: 2025                              # optional; remove the # to show it
status: completed                         # completed | ongoing

area: "2,500 sq ft"                       # optional; delete the line if unknown
areaLabel: "Built-up area"                # or "Total area", "Site area"
scope: []                                 # optional, e.g. ["Architecture", "Interiors", "Landscape"]
# photographer: "Name"                    # optional; remove the # to credit the photographer

order: 3                                  # position on the Projects grid and home page (1 = first)

# Cover: used as the project page's opening image, the grid tile and link previews.
# A landscape photo works best. The grid crops it to 4:5 portrait around coverFocus.
cover: ./images/cover.jpg
coverAlt: "Describe what the photo shows, e.g. 'Brick farmhouse with a deep entrance verandah'"
coverFocus: "50% 50%"                     # crop centre: "left% top%". Lower first number = further left

# Opening paragraph (40–60 words). Also used as the Google / link-preview description.
lead: "Opening paragraph about the project."

# Gallery, in display order. layout:
#   full  = full screen width (best for landscape photos)
#   pair  = two consecutive "pair" photos sit side by side, cropped to the same 4:5 shape (best for portraits)
#   inset = narrower, centred (a portrait photo on its own is automatically sized to fit the screen)
gallery:
  - { src: ./images/01.jpg, alt: "Describe the space", layout: full }
  - { src: ./images/02.jpg, alt: "Describe the space", layout: pair }
  - { src: ./images/03.jpg, alt: "Describe the space", layout: pair }
  - { src: ./images/04.jpg, alt: "Describe the space", layout: inset }

draft: false                              # true = hidden from the site, sitemap and project lists
---

Write-up paragraphs go here, one blank line between paragraphs.

You can add small headings if you like, starting the line with two hashes:

## The brief

Text…
