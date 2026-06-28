## Maruti Blow Tech — Website Plan

A bold, industrial multi-page marketing site for **Maruti Blow Tech Pvt. Ltd.**, manufacturer of HDPE plastic drums, jerry cans, carboys, and injection-moulded articles (50 ml – 230 L). The Girnari Moulders associate-company module is excluded per request.

### Pages (routes)

- `/` — Home: hero ("Your search for quality packaging ends here"), multi-layer HDPE tech highlight, product category teaser grid, salient features strip, CTA to Contact.
- `/products` — Full catalog with one card per product type:
  - Narrow Mouth Drums (50–70 L)
  - Full Open Mouth Drums (30–120 L)
  - Mouser Jerry Cans (20–40 L)
  - Wide Mouth Drums (50 L, 6"–10")
  - Rocket Drums (50 L)
  - Jerry Cans (5–35 L)
  - Accessories: lids, locking rings, vent caps, pilfer-proof seals, custom-mould drums
- `/about` — Company story (incorporated 2013, two decades of experience, parent group: L.K. Continental Plastic, Maruti Industries), multi-layer HDPE technology explainer, salient features grid, quality policy.
- `/contact` — Address (C 1 - 4727/1/2, Opp. Rallis, GIDC Estate, Ankleshwar 393002, Gujarat), phones, sales contacts, emails, website, and **working inquiry form**.

### Design direction — Industrial & bold

- Palette: deep navy / drum-blue primary (`oklch` blue ~ #0C2340 + #1E63A8 accent), warm steel grey neutrals, off-white background, single ember/orange accent for CTAs.
- Typography: heavy display sans for headings (Archivo Black / Bebas Neue feel) + clean grotesk body (Barlow / Inter).
- Visual moves: large slab headlines, factory-floor numeric callouts ("50 ml → 230 L"), sectioned bands with thin rule dividers, subtle drum cross-section diagram motif, hard-edged buttons (small radius), zero gradients beyond a navy→blue depth wash on hero.
- Imagery: generated photographic shots of blue HDPE drums, jerry cans, and manufacturing line; cross-section illustration of multi-layer drum wall.
- Motion: restrained — fade/slide on section entry, no parallax circus.

### Tech / structure

- TanStack Start routes under `src/routes/`: `index.tsx`, `products.tsx`, `about.tsx`, `contact.tsx` — each with its own `head()` metadata (title, description, og:title, og:description).
- Shared `Header` + `Footer` components rendered in `__root.tsx` (above `<Outlet />`).
- Design tokens defined in `src/styles.css` via `@theme` (navy, drum-blue, ember, steel) — no hardcoded color utilities in components.
- Product data lives in a typed array in `src/lib/products.ts` for reuse on Home teaser + Products page.
- Generated images saved to `src/assets/` and referenced via imports.
- SEO: unique title/description/OG per route; semantic H1 per page; alt text on all imagery.

### Out of scope (per user)

- No Girnari Moulders section, page, or branding anywhere.
- No admin dashboard for inquiries in this pass — submissions are reviewed via Cloud's table view.
- No e-commerce / quote calculator.

Confirm to proceed and I'll build it.