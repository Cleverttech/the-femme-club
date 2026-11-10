# The Femme Club — MUI Coming Soon redesign

Use these files inside the existing React + TypeScript + Vite `the-femme-club` repository.

## Install Material UI

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Files to copy

- `src/components/ComingSoonHero.tsx`
- `src/theme.ts`
- `src/App.tsx`
- `src/main.tsx`
- `index.html`
- `public/femme-club-logo.png` (existing original logo)
- `public/favicon.png`

The new UI does not import `src/styles.css`; you can retain it unused or remove it once confirmed it is not used elsewhere.

Run `npm run build` and `npm run dev`. Commit and push to GitHub after checking locally; the connected Vercel project redeploys automatically.

No invented social-media URL or signup data collection. The contact action uses email.
