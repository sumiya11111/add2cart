# add2cart website

A plain HTML, CSS and JavaScript site. No build step, no packages.

## Before you upload

Open `assets/js/main.js` and change this line to your WhatsApp number (country code first, digits only):

```js
var WHATSAPP_NUMBER = "8801XXXXXXXXX";
```

Example: `"8801712345678"`.

## Files

```
index.html               Homepage
work/baah-store.html     Case study: Baah Store
work/paarel.html         Case study: PAARÉL
work/fiero.html          Case study: FIERO
assets/css/style.css     All styles
assets/js/main.js        Cart, WhatsApp link, filters, gallery
assets/img/              Logo, favicon, share image
assets/work/             Website screenshots
```

## Deploy

**GitHub Pages:** push this folder to a repo, then Settings > Pages > Deploy from branch > `main` / root.

**Vercel or Netlify:** import the repo. Framework: "Other". No build command. Output folder: root.

## Add a new project

1. Put screenshots in `assets/work/` as `name-home.jpg`, `name-mobile.jpg` and so on (788 x 493 for desktop works well).
2. Copy one card in `index.html` (the `<article class="card">` block) and change the text, image and `data-add`.
3. Add the project to `PROJECTS` at the top of `assets/js/main.js` with the same id.
4. Copy a page in `work/` and change its text and images.

## Add a client quote

Each case study page has a commented block near "Who it is for". Remove the `<!--` and `-->` marks and write the quote.

## How the cart works

Visitors add projects they like. The cart is saved in their browser. "Place order on WhatsApp" opens WhatsApp with a message that lists the chosen projects, their name and what they sell.
