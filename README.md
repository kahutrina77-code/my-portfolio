# TRINA KAHU — Developer Portfolio

A sleek, dark-minimal personal portfolio built with **React + Vite**.

## Features
- Dark minimal aesthetic — monospace font, lime-green accent, noise overlay
- Typewriter hero with animated role cycling
- Animated skill bars with percentage levels
- Projects list with tags and live/GitHub links
- One-click email copy to clipboard
- Custom cursor with blend-mode hover effect
- Fully responsive

## Tech Stack
- React 18 + Vite
- DM Mono font via @fontsource

## Getting Started

```bash
git clone https://github.com/kahutrina77-code/my-portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Deploy to Vercel
1. Push this repo to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repo → Deploy

## Customise
- `src/components/Hero.jsx` — name, bio, roles
- `src/components/Skills.jsx` — skill names and levels
- `src/components/Projects.jsx` — project list, links, tags
- `src/components/Contact.jsx` — email, social links
- `src/index.css` — colors (--accent, --bg, etc.)
