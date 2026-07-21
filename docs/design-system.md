# Design System — "MONO" (Minimal Monochrome)

Master reference for the portfolio's visual system. Light, typographic,
near-black-on-white, Linear/Vercel-in-light-mode. No dark mode, no glass,
no 3D, no gradients. Restraint is the aesthetic.

## 1. Color tokens (HSL CSS variables → tailwind.config.js)

Defined on `:root` in `src/index.css`, consumed as `hsl(var(--token) / <alpha>)`.
Components use semantic tokens only — never raw hex.

| Token                  | Value          | Use |
|------------------------|----------------|-----|
| `--background`         | `0 0% 100%`    | Page (white) |
| `--foreground`         | `0 0% 9%`      | Primary text / actions (#171717) |
| `--muted`              | `0 0% 96.5%`   | Subtle surfaces / chips |
| `--muted-foreground`   | `0 0% 42%`     | Secondary text (AA on white) |
| `--subtle-foreground`  | `0 0% 58%`     | Tertiary/meta only |
| `--border`             | `0 0% 91%`     | Hairlines (#e8e8e8) |
| `--primary`            | `0 0% 9%`      | Black buttons |
| `--accent`             | `0 0% 9%`      | Monochrome — emphasis stays black |
| `--success`            | `142 68% 42%`  | The ONE color: "available" dot |

Rule: the palette is grayscale + white. The green success dot is the only
chromatic accent on the whole site. Emphasis comes from **weight, size, and
whitespace** — not color.

## 2. Typography
- Display (headings): **Space Grotesk**, `font-semibold` (600), `tracking-tight`.
- Body: **Inter**, 400.
- Mono (labels, meta, numbers): **IBM Plex Mono**, uppercase, `tracking-[0.2em]`.
- Scale: hero `text-5xl→8xl`; section H2 `text-3xl→5xl`; card H3/H4 `text-lg→xl`;
  body `text-base`, lead `text-xl→2xl` in `text-muted-foreground`.
- `text-balance` on headings/leads.

## 3. Layout
- Container: `.section-container` = `max-w-6xl mx-auto px-6 sm:px-8` (narrower than dark ver.).
- Sections separated by `border-t border-border` + `py-20 sm:py-28`.
- Generous whitespace is the primary design tool.
- Editorial grids: `sm:grid-cols-12` splits (e.g. 4/8), definition-list rows with hairline dividers.
- Numbered sections: mono `01 / About` eyebrow (`<Eyebrow index>`).

## 4. Components (src/components/ui/)
- `Button`: `primary` (bg-foreground/black, white text), `secondary` (border hairline, hover bg-muted),
  `ghost` (muted text). `rounded-full`, sizes md/lg, sans `font-medium` (NOT mono/uppercase).
- `Card`: `rounded-xl border border-border bg-card`; optional hover (border darken + soft shadow + -0.5 lift).
- `Badge`: hairline pill, mono 11px; `dot` → green success dot.
- `Tag`: `rounded-md border` mono-xs chip for tech.
- `TextLink`: `.link-underline` (underline wipes in on hover).
- `Eyebrow` / `SectionHeading`: numbered mono label + big semibold heading.
- Icons: `ui/Icon.js` only, `currentColor`, stroke 1.5. No emoji.

## 5. Motion (deliberately minimal + ROBUST)
- `Reveal` = subtle upward slide (`translateY(14px) → 0`), IntersectionObserver-driven.
- **Content is ALWAYS opaque** — reveals never fade from opacity 0. This is a hard rule:
  a throttled render clock must never be able to leave content invisible (the repeated
  "all white / can't see anything" bug). Worst case = content sits a few px low.
- Interaction motion (accordion expand) via Framer `AnimatePresence` — fine, it's user-triggered.
- Respect `prefers-reduced-motion` (CSS kill-switch + Reveal skips transform).
- Hover: color/opacity/underline transitions only. No transform-heavy effects.

## 6. White-out defense (do not remove)
- `public/index.html` `<body>` has inline `background:#fff; color:#171717; font-family:Inter…`
  so the page is readable black-on-white even before/without the CSS bundle.
- `<meta name="color-scheme" content="light">`.
- Light design means the unstyled fallback (white bg) is the intended look, not a failure.

## 7. Architecture
- Single page. No router. `App.js` → `Nav` + `Portfolio` + `Footer`.
- `Portfolio.js` composes `sections/{Hero,About,Work,Stack,Journey,Contact}`.
- `lib/sections.js` = SECTIONS registry shared by Nav / Footer.
- Nav: scroll-spy via IntersectionObserver (not rAF), thin progress line, mobile sheet.

## 8. Accessibility
- Contrast: foreground #171717 on white ≈ 16:1; muted #6b6b6b ≈ 5.4:1 (AA). subtle only for meta.
- `focus-visible` ring on all interactive; 44px targets; one h1; sequential headings;
  `aria-expanded`/`aria-controls` on accordions + menu; alt/aria on icons; reduced-motion honored.
