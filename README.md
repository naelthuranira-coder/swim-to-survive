# Watersafe Hub

A free water-safety education hub for parents — step-by-step swim
guides, everyday safety habits, and articles. Built with React,
TypeScript, Vite, React Router, and Tailwind CSS v4.

Created by Nael Thuranira.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

The production files are output to `dist/`.

## Project structure

```
src/
  components/         Navbar, Footer, section headings, wave dividers
  components/illustrations/   Original SVG artwork and icon set
  data/               Guide and blog post content
  pages/              One file per route
  App.tsx             Route definitions
  index.css           Tailwind + design tokens (colors, fonts)
```

## Pages

- `/` — Home
- `/guides` and `/guides/:slug` — Swim-teaching guides
- `/blog` and `/blog/:slug` — Safety articles
- `/contact` — Contact form and details
- `/disclaimer`, `/privacy-policy`, `/terms-of-use` — Legal pages

## Contact

- Email: nael.thuranira@akamom.org
- Phone: 0117 716 131
# watersafehub
