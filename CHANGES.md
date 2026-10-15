# Kouman – what changed

## Critical fixes
1. **Unresolved git merge conflicts** (`<<<<<<< HEAD … >>>>>>>`) were left in 27 files
   (all pages, components, CSS, the product data, the context, and even the 3 footer SVGs).
   The project could not build. Both sides were identical except line endings
   (and an unused `Banners` import in `Clothes.jsx`), so the HEAD side was kept.
2. **Case-sensitive import bug**: `all_products.js` imported `MiaLand1.jpg` / `MiaLand2.png`
   but the files are `Mialand1.jpg` / `Mialand2.png`. This works on Windows but fails on
   Linux (GitHub Actions, Netlify, Vercel).
3. **GitHub Pages routing**: `base: '/Kouman/'` in Vite + router `basename` + `404.html`
   fallback, so `/Kouman/cart` etc. work on refresh.
4. `ProductInfo` crashed on an unknown product id → now shows a 404 page.
5. (v1.2) Fonts/icons: reverted to the original loading method (`import ... from '../../public/duotone/...'`
   and the original `@font-face` paths). My v1.1 URL-based approach failed silently when `public/` was missing
   or elsewhere; imports now fail loudly. Persian digits were also reverted to the original Latin style (850,000),
   and a fallback font stack was added.

## Cart
- Rewritten with `useReducer`; pure logic lives in `Context/cartLogic.js` (unit-tested).
- Persists in `localStorage` (validated on load), quantity capped at 99.
- Cart page: +/- quantity, remove, working discount form (demo code `KOUMAN10` = 10%),
  disabled checkout when empty, stable keys (no `.map()` for side effects).
- Header badge only shows when the cart is not empty.

## UX / design
- Header nav driven by the URL (`NavLink`) – the active item is correct after refresh/back.
- New: product search (`/search?q=`), 404 page, "added to cart" feedback.
- Scroll-to-top on route change (replaces `scrollTo(0, 100)` hacks).
- Login/Register: controlled form, validation, mode toggle, correct `label`/`id`
  (password label pointed at `username` before). Still UI-only (no backend).
- Prices formatted with `fa-IR`; breadcrumb shows Persian category names.
- Footer dead `<a href="">` links replaced with real routes.

## Accessibility
- Real `<button>`s instead of clickable `<div>`/`<img>`, `aria-label`s, meaningful `alt` text,
  visible focus rings, `lang="fa" dir="rtl"`, `<main>/<header>/<footer>/<nav>` landmarks,
  `prefers-reduced-motion`.

## Language switch (v1.2)
- **EN / فارسی button** in the green top bar of the header. Choice is saved in `localStorage`.
- Whole UI is translated (`src/i18n/translations.js`), product names/descriptions too (`src/i18n/productsEn.js`).
- `<html lang dir>` flips between RTL and LTR; English uses a Latin font, Persian keeps Yekan.
- The Login/Register form was English in the original and stays English in both languages.

## Tooling
- `npm test` (Node's built-in test runner, no extra dependency): cart logic + translation key parity.
- GitHub Actions: lint → test → build → deploy to Pages.

## Routes
| Route | Page |
| --- | --- |
| `/` | Home |
| `/clothes` | Clothes |
| `/accessory` | Accessories |
| `/product/:productId` | Product details |
| `/search?q=…` | Search |
| `/loginsignup` | Login / Register |
| `/cart` | Cart |
| `*` | 404 |
