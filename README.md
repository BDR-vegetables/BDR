# BDR Vegetables Wholesale Shop — GitHub Pages Website

A lightweight, responsive static website designed for BDR Vegetables Wholesale Shop. It uses plain HTML5, modern CSS and small vanilla JavaScript modules, making it well suited to GitHub Pages.

## 1. Folder structure

```text
/
├── index.html
├── css/
│   ├── variables.css
│   ├── styles.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── data.js
│   ├── app.js
│   └── animations.js
├── assets/
│   ├── logo/
│   │   └── bdr-logo.svg
│   ├── images/
│   ├── icons/
│   └── vegetables/
├── favicon/
│   └── favicon.svg
├── .nojekyll
└── README.md
```

## 2. Deploy to GitHub Pages

1. Create a new GitHub repository, for example `bdr-vegetables`.
2. Upload the contents of this folder to the repository root.
3. Commit and push to the `main` branch.
4. Open **Repository → Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. GitHub will publish the site at a URL similar to `https://USERNAME.github.io/bdr-vegetables/`.
8. In `index.html`, replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO` in the canonical/Open Graph URLs with the actual values.

## 3. Update contact information or business details

Edit only:

`js/data.js`

This central file contains business name, owner, shop numbers, phone numbers, WhatsApp messages, email, address, map URL, hero copy, supplier copy and vegetable categories.

Keep phone numbers as uninterrupted digits in `data.js`. The website automatically formats them for display and builds `tel:` / WhatsApp links.

## 4. Replace the logo

Current logo path:

`assets/logo/bdr-logo.svg`

You can replace this file while keeping the same filename. The header, hero medallion and footer use `object-fit: contain`, so the logo will not be stretched.

For a new filename, update the three references to the logo path in `index.html` and the structured-data path in `js/app.js`.

## 5. Replace hero/shop photographs

Current visual placeholders:

- `assets/images/hero-vegetables.svg`
- `assets/images/shop-front.svg`
- `assets/images/market-map.svg`

Recommended real-photo replacements:

- `assets/images/hero-vegetables.webp`
- `assets/images/shop-front.webp`
- `assets/images/wholesale-market.webp`

After adding real files, update the corresponding `<img src="...">` paths in `index.html`. Prefer AVIF/WebP, ideally under roughly 250–500 KB per large image after compression. Keep dimensions large enough for retina displays, but avoid multi-megabyte source files.

The small “placeholder” labels in the hero/about visuals can then be removed from `index.html`.

## 6. Edit vegetable categories

Open `js/data.js` and edit `vegetableCategories`.

Example:

```js
{ name: "Tomatoes", image: "assets/vegetables/tomato.webp" }
```

Do not add availability or price claims unless they are confirmed and supplied.

## 7. Edit WhatsApp prefilled messages

In `js/data.js`, update:

```js
contacts: {
  bdr: {
    whatsappMessage: "..."
  },
  ramesh: {
    whatsappMessage: "..."
  }
}
```

The final WhatsApp URL is generated automatically.

## 8. Change theme colors

Edit the design tokens in:

`css/variables.css`

Primary variables include:

- `--green-800`
- `--green-500`
- `--amber-500`
- `--orange-500`
- `--brand-gold`
- `--brand-ink`
- `--cream`
- `--sage`
- `--text-primary`

Most site components inherit from these tokens, so broad visual changes do not require editing each component.

## 9. Social preview image

Current path:

`assets/images/social-preview.webp`

A starter preview is included. If you replace it, keep a 1200 × 630 px image for reliable WhatsApp/Facebook/LinkedIn previews. After deployment, ensure the absolute Open Graph URL in `index.html` points to the final GitHub Pages domain/repository.

## 10. Future expansion

The architecture is ready for future additions such as:

- daily availability
- product catalogue
- market updates
- supplier registration
- enquiry form (via a static-form provider or external service)
- gallery
- delivery/service-area information
- verified testimonials/reviews
- English/Telugu language toggle
- downloadable product list
- WhatsApp ordering

The `products` array in `js/data.js` is intentionally empty until actual data is supplied.

## 11. Accessibility and motion

The website includes semantic sections, keyboard focus states, large touch targets, a skip link, reduced-motion support and non-hover access to core actions. The 390 px mobile breakpoint has dedicated layout handling.

## 12. Performance notes

- No front-end framework.
- No icon library runtime dependency; lightweight inline SVG icons are used.
- Below-the-fold images are lazy-loaded.
- Motion uses transform/opacity.
- The only external front-end dependency is Google Fonts. If maximum privacy/offline performance is required, switch to the system-font fallbacks already defined in CSS.
