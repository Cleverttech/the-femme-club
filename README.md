# The Femme Club — Coming Soon

A small, responsive landing page using React, TypeScript and Vite, created for The Femme Club in Paphos, Cyprus.

## Run locally

```sh
npm install
npm run dev
```

Open the URL shown by Vite (normally http://localhost:5173).

## Production build

```sh
npm run build
npm run preview
```

## Add to the existing GitHub repository

In the local `the-femme-club` repository, copy the **contents** of this project folder into the repository root. Do not copy the folder itself, or overwrite existing files without reviewing them. If it is an empty README-only repository, you can replace its starter README with this one. Then:

```sh
git checkout -b feat/coming-soon
git add .
git commit -m "feat: create branded coming soon landing page"
git push -u origin feat/coming-soon
```

Create and merge a pull request into `main` when satisfied.

## Vercel

Import the GitHub repository as a new Vercel project. Framework: **Vite**; build command: `npm run build`; output directory: `dist`. Deploy to the temporary `.vercel.app` URL, then add the client domain in Project > Settings > Domains and follow Vercel's specific A/CNAME values at the DNS host (Wix if that's where DNS is managed).

**Commercial hosting note:** Vercel's Hobby plan has commercial-use restrictions; select a commercial-eligible plan or alternative host for the client's public website. The domain should remain in the client's ownership. Do not change MX or other email DNS records.

## Configuration

- `src/components/ComingSoonHero.tsx`: all page copy and the contact email
- `src/styles.css`: color tokens and responsive styling
- `public/femme-club-logo.png`: client's actual supplied logo, preserved as uploaded, with white outside corners masked transparent for display
- `index.html`: SEO title and description
- Instagram link deliberately omitted until the client supplies and approves the real URL.
- No form submissions, tracking cookies, customer data collection, database or payment integrations.
- Colors (`#F7EEE8`, `#4A3733`, `#C9A694`) are the previously discussed starting palette; confirm exact Figma palette before publishing.

Before production launch, obtain approval for copy/branding and review relevant privacy/legal disclosures and client business status.
