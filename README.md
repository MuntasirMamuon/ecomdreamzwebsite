# eComDreamz website (Next.js reconstruction)

Reconstruction of the eComDreamz site from `Reconstruction UI Mockups.zip`, built with
Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, Motion for React,
Lucide React, `next/image` and `next/font`.

## Run

```bash
npm install          # see "iCloud" below if the project stays in ~/Documents
npm run dev          # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Routes

| Route | Source of truth |
| --- | --- |
| `/` | Live-site screenshots + Elementor export (page 1023) |
| `/career` | Live-site screenshot + Elementor export (page 4329) |
| `/our-services`, `/packages`, `/packages-2`, `/about-us`, `/contacts` | `EcomDreamz Site.dc.html` mockup (no screenshots exist); copy/images corrected from the Elementor export |
| `/specialty-food-brand` | Mockup layout + `case-content.js` |
| `/terms-and-condition`, `/privacy-policy`, `/refund-policy`, `/cookie-policy` | Mockup layout + `legal-content.js` |

Redirects: `/services`, `/about`, `/contact`, `/case-study` → their canonical routes.

## Structure

- `app/` routes, `app/globals.css` design tokens (`@theme`) and utilities
- `components/layout` header (dropdown + mobile menu), footer, subscribe form
- `components/home` home-page sections; `components/sections` shared sections
- `components/ui` primitives (`Img`, `Reveal`, `ShapeDivider`, `PageBanner`, icons)
- `data/` all copy, pricing, FAQs, payment badges, shape dividers, image sizes
- `public/media` images mirrored from ecomdreamz.com (the 40 MB showreel stays remote)

`data/image-sizes.ts` is generated from `public/media`; regenerate it when adding images.

## Forms

The contact and newsletter forms validate in the browser and show a clearly labelled
demo confirmation. Nothing is sent. "Buy Now" buttons link to the existing checkout on
ecomdreamz.com / copecart.com; no payment is handled here.

## iCloud

This folder lives in iCloud-synced `~/Documents`. iCloud evicts files in `node_modules`,
which makes `next dev` / `next build` hang. Dependencies and build output therefore live in
`node_modules.nosync` and `.next.nosync` (iCloud ignores `*.nosync`), with `node_modules` and
`.next` as symlinks. After a fresh `npm install`, re-create this:

```bash
rm -rf node_modules.nosync && mv node_modules node_modules.nosync && ln -s node_modules.nosync node_modules
```

Moving the project outside iCloud Drive (e.g. `~/Developer`) removes the need for this and
also silences the "Module not found" tracing warnings it causes during `next build`.
# ecomdreamzwebsite
