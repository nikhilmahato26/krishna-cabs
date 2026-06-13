# Krishna Cabs — Taxi Service Website

A pixel-faithful recreation of the Krishna Cabs landing page (Junagadh & All Gujarat Taxi Service), built as a production-ready React app.

## Tech Stack

- **React 18** + **Vite** — fast SPA tooling
- **Tailwind CSS** — utility-first styling (no SCSS / UI kits)
- **Framer Motion** — subtle fade / scroll-reveal / hover animations
- **React Router DOM** — client-side routing
- **React Icons** + **Lucide React** — iconography
- **Swiper** — available for future carousels

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── assets/                 # static assets
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Reusable primitives (Button, Logo, FareTable, …)
│   └── sections/           # Page sections (Hero, FeaturesBar, FaresSection, …)
├── data/                   # siteData.js — single source of content/copy
├── hooks/                  # useScrollToTop
├── utils/                  # cn() className helper
├── pages/                  # Home, Placeholder
├── App.jsx                 # routes + layout shell
└── main.jsx                # entry
```

## Notes on Images

The hero backdrop, car, and fleet thumbnails currently use high-quality remote
placeholder photos. Drop the final brand artwork into `src/assets/` and swap the
URLs in `src/components/sections/Hero.jsx`, `SafetyCard.jsx`, and
`src/data/siteData.js` (the `FLEET` array) to finalise.
