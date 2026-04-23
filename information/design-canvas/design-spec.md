# matheus.studio — Design Specification

> Handoff document for Claude Code. Implement against the existing Next.js 16 repo
> (`Matheus-Liberato-dev/matheus-studio`). Tokens and layouts below reflect the
> direction approved on the design canvas. Drop this file into `information/`.

---

## 1. Art direction (one sentence)

An editorial, first-person studio site — warm paper, cobalt accents, long-form serif typography, a small circular avatar in the nav instead of a big hero, and inline colored links woven through prose. The site is the portfolio piece; quiet confidence over visual noise.

---

## 2. Type system

Load these four families from Google Fonts in `app/layout.tsx`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

CSS variables:

```css
--font-display:   'Newsreader', Georgia, serif;       /* H1/H2, hero, headings */
--font-display-alt: 'Instrument Serif', Georgia, serif; /* optional italic emphasis */
--font-body:      'Newsreader', Georgia, serif;       /* long-form body */
--font-ui:        'Inter', -apple-system, sans-serif; /* buttons, nav, forms */
--font-mono:      'JetBrains Mono', ui-monospace, monospace; /* labels, /links */
```

Update `tailwind.config.js`:

```js
fontFamily: {
  sans: ['var(--font-ui)', ...fontFamily.sans],
  serif: ['var(--font-body)'],
  heading: ['var(--font-display)'],
  mono: ['var(--font-mono)'],
},
```

Type scale (mobile → desktop):

| Role | Size | Weight | Notes |
|---|---|---|---|
| Display hero (H1) | 56px → 96px | 400 | `font-heading`, `line-height: 0.95`, `letter-spacing: -0.01em`. Italic variant for emphasis spans. |
| Page title | 48px → 72px | 400 | Same family, tighter top margin. |
| H2 | 28–32px | 400 | Serif, lowercase ok. |
| Lead paragraph | 20–22px | 300 | Body serif, `--ink-soft`, `line-height: 1.45`. |
| Body | 17–18px | 400 | Body serif, `line-height: 1.7`. |
| UI / button | 13px | 500 | Inter, `letter-spacing: 0.02em`. |
| Label / meta | 11px | 500 | Mono, `letter-spacing: 0.12em`, UPPERCASE, `--ink-faint`. |

---

## 3. Color tokens

Replace the HSL blocks in `app/globals.css` with these oklch values. shadcn/ui accepts them directly; keep the `--primary-foreground` etc. pattern.

### Light (default) — warm paper

```css
:root {
  --bg:          oklch(0.985 0.006 85);   /* warm off-white */
  --bg-alt:      oklch(0.965 0.01 80);    /* subtle card surface */
  --ink:         oklch(0.2 0.012 60);     /* primary text */
  --ink-soft:    oklch(0.42 0.012 60);    /* body prose */
  --ink-faint:   oklch(0.62 0.01 60);     /* labels, meta */
  --rule:        oklch(0.88 0.01 70);     /* hairlines */
  --accent:      oklch(0.5 0.12 245);     /* cobalt — inline links, CTAs */
  --accent-soft: oklch(0.92 0.03 245);    /* accent fills, selection bg */
}
```

### Dark — ink

```css
.dark {
  --bg:          oklch(0.14 0.008 80);
  --bg-alt:      oklch(0.18 0.008 80);
  --ink:         oklch(0.94 0.008 85);
  --ink-soft:    oklch(0.72 0.01 80);
  --ink-faint:   oklch(0.5 0.008 80);
  --rule:        oklch(0.28 0.008 80);
  --accent:      oklch(0.72 0.13 240);
  --accent-soft: oklch(0.28 0.04 240);
}
```

Map to the shadcn variables as follows:

```
--background        → --bg
--foreground        → --ink
--muted             → --bg-alt
--muted-foreground  → --ink-soft
--border / --input  → --rule
--primary           → --ink          (dark buttons on light)
--primary-foreground→ --bg
--accent            → --accent-soft  (hover/fill surface)
--accent-foreground → --accent
--ring              → --accent
```

Delete the `retro`, `cyberpunk`, `aurora`, `synthwave`, `paper` themes and remove them from the `safelist` in `tailwind.config.js`. Keep only `light` and `dark`.

---

## 4. Layout rules

- **Max reading width**: 680px for essays/about/contact; 1000–1100px for the work index.
- **Page padding**: 40–56px horizontal; 72–96px top on first section.
- **Container**: remove the `2rem` Tailwind container padding and use per-page `max-width` instead.
- **Hairlines everywhere**: 1px `--rule` for dividers, no drop shadows, no large border-radius. Use `border-radius: 2px` for buttons/cards.
- **Corners**: set `--radius: 0.125rem` in globals.

---

## 5. Page structure

Keep Next.js App Router. Routes to ship:

| Route | Purpose |
|---|---|
| `/` | Home. Use variant **v1 Essay-first** as default. Short intro, inline-link prose, `Currently` section, CTAs. |
| `/about` | Long-form bio. Single 680px column. Inline cobalt links through prose. `/elsewhere` link list at bottom. |
| `/work` | Editorial project index. Row-based list, not cards. Rename from `/projects`. |
| `/work/[slug]` | Individual project detail. Keep the existing structure but restyle with new type. |
| `/services` | Websites / web tools / AI coaching / 1:1 sessions. Four-cell grid (see v3 wordmark home for the treatment). |
| `/contact` | Email link + Cal.com booking card + `/links` directory. No long contact form. |

**Remove or hide** (redirect to `/`):
- `/skills` — irrelevant for consulting clients.
- `/contributions` — irrelevant.
- `/experience` — fold the useful bits into `/about`.
- `/resume` — optional; keep only if you want a PDF download, otherwise drop.
- `/blogs` — keep as scaffold but hide from nav until there's content.

**Nav items** (top of every page):
`Work · About · Services · Contact` + a `GitHub ↗` external link + a theme toggle (moon glyph).

**Nav header treatment**:
- Left: 36px circular avatar (small, not a hero) + italic serif wordmark "Matheus Liberato" (Newsreader italic 22px, not a script font).
- Right: nav items in Inter 13px weight 500, `--ink-soft`, `--ink` on active, `--accent` on hover.

**Footer**:
Mono 11px uppercase. Left: `matheus.studio`. Center: `Sydney · 2026`. Right: `© Matheus Liberato`.

---

## 6. Home — `/` (variant v1, essay-first)

Content:

> **Index / 2026**
>
> # Matheus  
> ## *Liberato.*  (italic, cobalt period)
>
> **Lead:** I build websites, small web tools and AI workflows for individuals and small businesses in Sydney — in person near [Carlingford], or remotely.
>
> **Body:** You probably found me through [LinkedIn], a [service listing], or a word-of-mouth introduction. If you're here to see what I actually make, start with [the work]. If you want to know who you'd be working with, [read a bit more].
>
> My background is unusual for a developer — psychology at Macquarie, six years tutoring high-school maths and physics, a growing independent R&D practice in [large language models]. I teach clearly because I've spent years doing it, and I build carefully because the systems I design tend to have humans attached to them.
>
> I work with [Claude Code] every day. It is — genuinely — the best leverage a small operator can get right now. Part of what I offer is teaching others how to use it.
>
> ---
>
> **Currently**  
> Building [shajara.au] — a retrieval-augmented research system for steering LLM reasoning over curated text corpora.
>
> `[View the work →]`  `[Get in touch]`

Implementation notes:
- Use `AnimatedText` only on the H1 with a 0.2s fade-up; remove all other animations on the home page. The reference cadence is slow and confident, not animated.
- Inline links: no underline; `border-bottom: 1px solid color-mix(in oklab, var(--accent) 35%, transparent)` that becomes full-accent on hover.

---

## 7. About — `/about`

- Single 680px column, serif prose.
- First-person, plain, warm. Voice samples already in the canvas.
- End with a `/elsewhere` mono list: `/github · /linkedin · /shajara · /email`.

---

## 8. Work — `/work`

Replace card grid with an editorial row list. Each row is a link:

```
┌──── 60px ─────┬─ 110px ─┬──────── 1fr ────────────┬─ 160px ──┐
│  01 (accent) │  2026 —  │  Shajara — R&D · LLM    │  Status  │
│              │          │  blurb 2–3 lines        │  Read →  │
│              │          │  Tech: Python · Next.js │          │
└──────────────┴──────────┴─────────────────────────┴──────────┘
```

Top + bottom of each row: 1px `--rule`. Hover: row background `--bg-alt`, title color shifts to `--accent`.

**Real project entries to seed with** (pull from repo's `config/projects.ts` after rewriting):

1. **Shajara** — `2026 —`, In progress · shajara.au
2. **Small-business sites** — `2025`, Ongoing engagements
3. **matheus.studio** — `2025`, You are here
4. **Transcript pipelines** — `2024`, Internal

Delete the old `namanbarkiya` project entries.

---

## 9. Services — `/services`

4-cell grid, 1px hairline separators, mono numerals in cobalt:

```
01 Websites        | 02 Web tools       | 03 AI coaching     | 04 Maintenance
Design & build     | Custom apps. iOS.  | 1:1 sessions on    | Learn to run your
for individuals    | Internal           | Claude & Claude    | site yourself.
and small bus.     | utilities.         | Code.              |
```

Below: a single paragraph in body serif explaining how engagement works (intro call → scoped proposal → build → handoff session).

---

## 10. Contact — `/contact`

- Headline "Get in **touch**." (italic on second word).
- Two-card grid (1px border, no radius):
  - **Email** — `hello@matheus.studio` in cobalt, large serif.
  - **Intro call — free** — "Book 20 min →" Cal.com link.
- Remove the existing contact form. For people who prefer forms, link to Cal.com.
- Bottom: `/links` directory — mono path + serif description, dashed hairline between rows.

```
/about     longer bio, background, how I got here
/work      selected client and research projects
/services  websites, tools, AI coaching, 1:1 sessions
/shajara   current R&D project — shajara.au
/writing   notes on building, learning, AI  (hidden until populated)
/github    code — Matheus-Liberato-dev
/linkedin  for the recruiters and referrals
/email     hello@matheus.studio
```

---

## 11. Component changes

| File | Change |
|---|---|
| `components/common/main-nav.tsx` | Small circular avatar (36px) + italic serif wordmark. Remove text logo. Nav items left-aligned right side with 28px gap. |
| `components/common/mode-toggle.tsx` | Replace with a single mono `☾` / `☀` glyph link. Drop the retro/cyberpunk/etc theme picker. |
| `components/projects/project-card.tsx` | Rewrite as horizontal row component (see §8). |
| `components/common/animated-text.tsx` | Keep, but reduce default delay and use only on H1s. Remove from section headers. |
| `components/forms/contact-form.tsx` | Delete. Replaced by email link + Cal.com. |
| `components/common/site-footer.tsx` | Three-column mono footer. |
| `components/blogs/blog-card.tsx` | If keeping, restyle to match `/work` row pattern. |

---

## 12. Voice / copywriting

- First person. Plain. No "I'm passionate about." No "leveraging cutting-edge."
- Short sentences followed by one longer sentence. Read the About copy in the canvas as reference tone.
- Link prose, don't label it. Prefer "start with [the work]" over "see my work".
- Numbers are fine. Dates are `2024`, `2025`, `2026`. Not `Jan 2024`.

---

## 13. Animation / motion

- One fade-up on H1 per page, 0.6s easing.
- Links: 150ms border-bottom opacity transition.
- No section-entry animations. No framer-motion on scroll reveal. Remove `AnimatedSection` from `page.tsx` sections (or downgrade it to a no-op wrapper for now).

---

## 14. Implementation order

1. Token swap in `globals.css` + `tailwind.config.js`.
2. Load the four Google fonts in `app/layout.tsx`.
3. Update `main-nav` + `site-footer` + `mode-toggle`.
4. Rewrite `/` as v1 Essay-first.
5. Rewrite `/about` with the copy from `uploads/About Me.md` + the voice samples in the canvas.
6. Rewrite `/projects` → `/work` with row-based index.
7. Build new `/services` page.
8. Simplify `/contact` (remove form, add email + Cal.com + /links).
9. Hide/redirect `/skills`, `/contributions`, `/experience`, `/resume`.
10. Delete the six unused theme classes from `globals.css`.

---

## 15. Reference

The approved visual direction lives on the design canvas at `Matheus Studio Design.html` in this project. Open it, focus any artboard fullscreen (press the expand icon), and use it as the source of truth for spacing, proportions, and hierarchy.

Selected design tweaks (already saved in the canvas file):

- theme: `light`
- accent: `cobalt`
- display font: `Newsreader`
- body font: `Newsreader`
- density: `default`

— end of spec —
