# add2cart website

Next.js 15 (App Router) + Tailwind CSS v4 + three.js + Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start
```

## Before you go live

1. Open `lib/site.ts` and set your WhatsApp number (country code first, digits only):
   ```ts
   export const WHATSAPP_NUMBER = "8801712345678";
   ```
2. When you have a domain, add it on Vercel as an environment variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`. Until then, leave it empty.

## Deploy on Vercel

Import the repo on vercel.com. Framework is detected as Next.js. No settings needed.

## Files

```
app/page.tsx               Homepage
app/work/[slug]/page.tsx   Case study page (one template for every project)
app/layout.tsx             Fonts, header, footer, SEO
app/globals.css            Colors, fonts and small helpers
lib/projects.ts            All project data (text, screenshots, colors)
lib/site.ts                WhatsApp number, site name, menu
components/WaveField.tsx   The 3D dot wave in the hero (three.js)
components/WorkStack.tsx   Stacking project cards on the homepage
components/Gallery.tsx     Screenshot switcher on case pages
public/work/               Website screenshots
```

## Add a new project

1. Put screenshots in `public/work/`: desktop at 788 x 493, mobile at 750 x 1624.
2. Add one object to `PROJECTS` in `lib/projects.ts`. Copy an existing one and change it.
   The homepage card, case page, footer link and "next project" link all update by themselves.

## Change the brand color

Edit the brand color lines at the top of `app/globals.css`. The 3D wave reads the same color, so nothing else needs changing.

## Merge notes

This Next.js site incorporates the original HTML version’s project cart, persistent selections, WhatsApp checkout message and original WhatsApp number. The original HTML/CSS/JS site remains unchanged in `original-html-version/` for reference or standalone deployment. The existing Next.js visuals and pages are otherwise retained.
