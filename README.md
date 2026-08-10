# BDR Vegetables Wholesale Shop — GitHub Pages Website

Production target:

**https://bdr-vegetables.github.io/BDR/**

GitHub account: **bdr-vegetables**  
Repository: **BDR**

This project is a static, framework-free website built with HTML5, modern CSS and vanilla JavaScript. It is designed specifically for GitHub Pages project hosting under the `/BDR/` path. Local assets use safe relative paths such as `./css/styles.css`, `./js/app.js` and `./assets/...`.

## Core production features

- Responsive one-page wholesale business website
- English / తెలుగు translation toggle
- Persistent Light / Dark theme toggle
- Primary Call + WhatsApp routing to **Ramesh — 9948122236**
- Product-specific WhatsApp enquiries
- BDR and shop-staff secondary contacts
- Copy-number actions with localized toast feedback
- Responsive desktop/mobile navigation
- Keyboard-accessible, focus-contained mobile menu
- Mobile Call / WhatsApp / Directions action bar
- Desktop floating WhatsApp action
- Safe-area support for modern phones
- Reduced-motion accessibility support
- LocalBusiness/Store structured data
- Open Graph / social sharing metadata
- `robots.txt`, `sitemap.xml`, favicon and web manifest
- GitHub Pages `.nojekyll`
- Central business, product and translation configuration

---

## Folder structure

```text
BDR/
├── .nojekyll
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── site.webmanifest
│
├── css/
│   ├── variables.css
│   ├── themes.css
│   ├── styles.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── data.js
│   ├── products.js
│   ├── translations.js
│   ├── theme.js
│   ├── language.js
│   ├── app.js
│   └── animations.js
│
├── assets/
│   ├── logo/
│   │   ├── bdr-logo.png
│   │   └── bdr-logo.svg
│   ├── vegetables/
│   │   ├── cauliflower.webp
│   │   ├── carrot.webp
│   │   ├── curry-potato.webp
│   │   ├── chips-potato.webp
│   │   ├── brinjal.webp
│   │   ├── okra.webp
│   │   ├── cabbage.webp
│   │   └── drumstick.webp
│   ├── images/
│   │   ├── hero-vegetables.webp
│   │   └── social-preview.webp
│   └── icons/
│
└── favicon/
    └── favicon.svg
```

---

# Deployment to GitHub Pages

## 1. Use the repository

Sign in to GitHub using the account:

```text
bdr-vegetables
```

Create or open the repository:

```text
BDR
```

The repository name is case-sensitive for the final URL structure. Keep it as **BDR**.

## 2. Upload the website

Upload the **contents inside this project folder** to the root of the `BDR` repository. `index.html` must therefore be directly inside the repository root, not inside an additional nested folder.

Correct:

```text
BDR/index.html
BDR/css/
BDR/js/
BDR/assets/
```

Avoid:

```text
BDR/bdr-vegetables-website/index.html
```

unless you intentionally configure Pages differently.

## 3. Enable GitHub Pages

In the repository:

1. Open **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main**.
5. Select folder **/(root)**.
6. Press **Save**.

After GitHub completes deployment, the website should be available at:

```text
https://bdr-vegetables.github.io/BDR/
```

## 4. Why the site works under `/BDR/`

Local resources use project-safe relative paths:

```text
./css/styles.css
./js/app.js
./assets/logo/bdr-logo.png
./assets/vegetables/cauliflower.webp
```

The project does **not** depend on root-only paths such as:

```text
/css/styles.css
/assets/logo/bdr-logo.png
```

Therefore GitHub Pages project hosting will not incorrectly look for files at `https://bdr-vegetables.github.io/assets/...`.

---

# Updating business information

The principal business configuration is:

```text
js/data.js
```

Edit the `BUSINESS` object rather than searching throughout the HTML.

Important fields include:

```js
primaryContact: {
  name: "Ramesh",
  phone: "9948122236",
  international: "919948122236"
}
```

The primary number is currently used for:

- Hero WhatsApp CTA
- Main Call CTA
- Header WhatsApp CTA
- Supplier primary CTA
- Contact-section primary card
- Desktop floating WhatsApp action
- Mobile Call / WhatsApp action bar
- Final CTA

### Change the primary number

Update:

```js
BUSINESS.primaryContact.phone
BUSINESS.primaryContact.international
SITE_SETTINGS.whatsappPrimary
```

If the primary number changes, also update the static SEO/schema fallback inside `index.html` so non-JavaScript crawlers receive the correct phone number.

### Change BDR's secondary number

Edit:

```js
BUSINESS.contacts.bdr.phone
BUSINESS.contacts.bdr.international
```

### Change shop-staff numbers

Edit:

```js
BUSINESS.contacts.shop1.phone
BUSINESS.contacts.shop2.phone
```

### Change owner

Edit:

```js
BUSINESS.owner
```

### Change shop numbers

Edit:

```js
BUSINESS.shopNumbers
```

Example:

```js
shopNumbers: ["41", "42", "43", "44"]
```

---

# Updating WhatsApp messages

Open:

```text
js/data.js
```

Main enquiry message:

```js
MESSAGES.primaryWhatsApp
```

Supplier enquiry message:

```js
MESSAGES.supplierWhatsApp
```

Product enquiry template:

```js
MESSAGES.productWhatsAppTemplate
```

The product template supports:

```text
{product}
```

For example, selecting Cauliflower automatically produces an enquiry based on:

```text
Hello BDR Vegetables, I would like to enquire about Cauliflower availability.
```

The JavaScript URL-encodes WhatsApp messages automatically.

---

# Updating email

Open:

```text
js/data.js
```

Change:

```js
BUSINESS.email
BUSINESS.emailSubject
```

The website automatically rebuilds the `mailto:` action.

For SEO consistency, also update the email in the JSON-LD fallback inside `index.html` if the email changes.

---

# Updating the address / Google Maps

Open:

```text
js/data.js
```

Edit:

```js
BUSINESS.address.market
BUSINESS.address.road
BUSINESS.address.locality
BUSINESS.address.state
BUSINESS.address.pincode
BUSINESS.maps
```

The visible location block and all Google Maps CTAs derive from this configuration.

If the official business address changes, also update the static SEO metadata / JSON-LD fallback inside `index.html` and the URL in `sitemap.xml` only if the website URL itself changes.

---

# Replacing the BDR logo

Primary logo file:

```text
assets/logo/bdr-logo.png
```

Recommended replacement requirements:

- PNG with transparent background where appropriate
- Square or near-square canvas works best
- At least 512 × 512 px recommended
- Keep the filename exactly `bdr-logo.png` for zero code changes
- Do not stretch or crop the logo manually

The CSS uses:

```css
object-fit: contain;
```

The source SVG is also stored as:

```text
assets/logo/bdr-logo.svg
```

If you replace only the PNG, the live website will use the new PNG immediately. Update the SVG and favicon too if you want all brand assets synchronized.

---

# Replacing vegetable images

Current vegetable visuals are optimized local WebP showcase assets. They are **illustrative website visuals**, not claims about today's stock or exact produce appearance.

For the strongest production result, replace them with high-quality real BDR / market / produce photography while keeping the same filenames:

```text
assets/vegetables/cauliflower.webp
assets/vegetables/carrot.webp
assets/vegetables/curry-potato.webp
assets/vegetables/chips-potato.webp
assets/vegetables/brinjal.webp
assets/vegetables/okra.webp
assets/vegetables/cabbage.webp
assets/vegetables/drumstick.webp
```

Recommended image preparation:

- WebP or AVIF
- Around 1000–1400 px wide
- Prefer landscape crops around 4:3 / 1.3:1
- Avoid text embedded into photographs
- Compress appropriately; normally keep each image under ~250 KB where quality allows
- Use consistent lighting and crop style across products

The card layout uses fixed aspect ratios, so replacing the images does not require redesign.

---

# Adding / removing vegetable cards

Product data is stored in:

```text
js/products.js
```

Example:

```js
{
  id: "cauliflower",
  name: {
    en: "Cauliflower",
    te: "కాలీఫ్లవర్"
  },
  image: "./assets/vegetables/cauliflower.webp",
  accent: "leaf"
}
```

To add a product:

1. Add its image to `assets/vegetables/`.
2. Add a new object to `window.BDR_PRODUCTS`.
3. Provide both English and Telugu names.
4. Do not add price, stock or availability claims unless the business explicitly supplies that data.

The product grid is responsive and will automatically recalculate columns.

---

# Editing English / Telugu content

Translations are stored in:

```text
js/translations.js
```

Structure:

```js
window.BDR_TRANSLATIONS = {
  en: { ... },
  te: { ... }
};
```

Static HTML uses translation keys such as:

```html
data-i18n="nav.home"
```

Dynamic cards use the same translation dictionary through `BDRLanguage.t()`.

Language preference is saved using:

```text
bdr-language
```

in `localStorage`.

Supported values:

```text
en
te
```

Default language is English.

---

# Light / Dark theme

Theme logic:

```text
js/theme.js
```

Theme design tokens:

```text
css/themes.css
css/variables.css
```

On the first visit, the website checks the visitor's system preference using:

```css
prefers-color-scheme
```

A manual selection is saved under:

```text
bdr-theme
```

Supported values:

```text
light
dark
```

The small script in the `<head>` applies the stored/system theme before page rendering to reduce visible theme flashing.

---

# Changing theme colors

Primary design tokens are in:

```text
css/variables.css
```

Examples:

```css
--green-800: #166534;
--green-500: #22c55e;
--lime-500: #84cc16;
--amber-500: #f59e0b;
--orange-500: #f97316;
--brinjal-500: #6d4c7d;
--potato-500: #c89b5b;
--brand-gold: #d8a84e;
```

Light/dark surface colors are in:

```text
css/themes.css
```

Do not change individual component colors throughout `styles.css` unless you need a component-specific exception. Prefer updating design tokens.

---

# Hero imagery

The live hero currently uses a responsive composition built from the local vegetable image files so it scales safely without overlapping the hero text.

A prepared future hero image asset is also included at:

```text
assets/images/hero-vegetables.webp
```

If a professional shop/produce hero photograph becomes available, you can either:

- replace the individual product images while retaining the collage; or
- modify the hero visual markup in `index.html` to use the single hero image.

The decorative hero visual is in a separate layout column and does not cross into the text/CTA zone.

---

# Social preview image

Current social-sharing image:

```text
assets/images/social-preview.webp
```

Required target size:

```text
1200 × 630 px
```

If you replace it, keep the same path. Open Graph metadata already points to:

```text
https://bdr-vegetables.github.io/BDR/assets/images/social-preview.webp
```

---

# Responsive architecture

Important design behavior:

- Core layout uses Grid, Flexbox and normal document flow.
- Absolute positioning is limited to hero decorations and visual-only layers.
- Desktop navigation switches to a hamburger before the navigation becomes crowded.
- Around narrow phone widths, header language/theme controls move into the mobile menu.
- The hero changes from side-by-side to vertical stacking.
- Product and business-card grids reduce columns automatically.
- Supplier flow changes from horizontal to vertical.
- The mobile bottom action bar receives additional footer clearance.
- `env(safe-area-inset-bottom)` protects fixed controls on supported devices.
- Section anchors use `scroll-margin-top` so sticky navigation does not hide headings.

---

# Animation system

Animation styles:

```text
css/animations.css
```

Observer behavior:

```text
js/animations.js
```

The motion system uses opacity/transform-based transitions and `IntersectionObserver`.

The website respects:

```css
@media (prefers-reduced-motion: reduce)
```

Decorative hero motion remains inside the hero visual container and has `pointer-events: none` where appropriate, so it cannot block text or CTA interaction.

---

# Performance guidance

The project intentionally avoids a frontend framework and heavy animation library.

Current production strategy:

- Static GitHub Pages files
- Vanilla JavaScript
- CSS custom properties
- Local optimized WebP vegetable assets
- Lazy loading for below-the-fold product images
- Explicit image width/height attributes
- Minimal runtime DOM work
- IntersectionObserver instead of scroll-loop animation logic
- No preloader / loading screen
- No server-side dependency

When adding real photographs, image optimization will have the biggest performance impact.

---

# Accessibility notes

Implemented:

- Semantic landmarks and section hierarchy
- Skip link
- Visible keyboard focus styles
- Large touch targets
- Accessible mobile menu controls
- Escape-key menu close
- Menu focus containment while open
- Body scroll lock while drawer is open
- ARIA state for language/theme/menu controls
- Reduced-motion support
- High-contrast theme tokens
- Actionable phone, WhatsApp, email and Maps links
- Localized copy confirmation through an `aria-live` toast

---

# SEO / sharing files

Production URL:

```text
https://bdr-vegetables.github.io/BDR/
```

SEO-related files / metadata:

- Canonical URL in `index.html`
- Open Graph metadata in `index.html`
- Twitter card metadata in `index.html`
- Local business structured data in `index.html`, refreshed from `js/data.js` at runtime
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- Social preview image

Do not add unsupported ratings, reviews, awards, operating hours, certificates, sales volume or current pricing to structured data.

---

# Future expansion

The code structure can later support:

- Today's vegetable availability
- Wholesale rates
- Larger product catalogue
- Daily market updates
- Search / vegetable filters
- Shop and market gallery
- Supplier registration
- Customer enquiry form
- Delivery/service-area information when supplied
- Farmer information
- Seasonal produce
- Downloadable rate sheet
- WhatsApp ordering
- Telugu-first default mode
- Google reviews when actual review data/integration is supplied

Keep future factual features data-driven and do not display unsupported claims.

---

# Final pre-publish checklist

Before publishing real business photography or future content changes, verify:

- `https://bdr-vegetables.github.io/BDR/` opens successfully
- All images load from relative project paths
- Ramesh / `9948122236` remains the primary CTA unless intentionally changed
- WhatsApp opens the correct number and message
- Call actions use the expected phone number
- Email opens correctly
- Google Maps opens the supplied location
- English and Telugu both fit without clipping
- Light and Dark modes both remain readable
- Hamburger opens, closes, and closes after section selection
- No horizontal scroll on mobile
- Mobile action bar does not cover footer content
- Actual product images are compressed before upload
- Social preview image still exists at the expected path

