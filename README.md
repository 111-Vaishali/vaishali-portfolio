# Vaishali Sunepwar — Portfolio

Built with React + Vite + Tailwind CSS v4 + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with:

```bash
npm run preview
```

## Deploy (Vercel — easiest)

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Click Deploy. Done — you'll get a live `.vercel.app` URL, and every push to `main` auto-redeploys.

(Netlify works the same way: build command `npm run build`, publish dir `dist`.)

## Where to edit your content

Everything personal (name, bio, skills, projects, experience, education, contact links)
lives in **one file**: `src/data.js`. Edit that file and every section updates automatically —
you don't need to touch the component files unless you want to change layout or design.

### Adding certificates
`src/components/Certificates.jsx` currently shows 3 empty placeholder slots.
Once you have certificate images/PDFs, drop them in `public/certificates/`, then replace
the placeholder loop with real cards (happy to wire this up for you whenever you're ready —
just share the certificate files or names).

### Adding real GitHub/live links
In `src/data.js`, several `projects` entries point `github` to your profile
(`https://github.com/111-Vaishali`) as a placeholder because I couldn't confirm each project's
exact repo URL. Swap in the specific repo links once you have them, and add a `live` URL
(e.g. a Vercel/Render link) for any project that's deployed.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, hero animation)
- lucide-react (icons)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (tags/labels)

## Design concept

The whole visual language is built around a computer-vision "detection" motif — bracket
corners like a camera viewfinder framing sections and cards, monospace confidence-style
tags (e.g. `computer-vision · 0.97`) next to headings, a hero where the role cycles like a
live model prediction, and an animated particle network drifting behind the whole page
(nodes connecting like a data graph). It's a deliberate nod to your CV/ML background
rather than a generic dark-theme template.

The background animation is a lightweight `<canvas>` component
(`src/components/ParticleBackground.jsx`) — no extra libraries, GPU-cheap, and it
automatically freezes into a static frame for visitors with "reduce motion" enabled in
their OS settings.
