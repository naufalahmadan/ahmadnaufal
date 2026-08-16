# The Ledger — Ad Performance Portfolio

A Next.js 14 (App Router) + Tailwind CSS portfolio site presenting audited,
verified Meta ad performance case studies. Built from the fact-sheet and case
studies produced by the `ad-performance-portfolio` skill.

## Design concept

**"The Ledger"** — every claim on this site carries a verification stamp,
echoing the actual methodology behind the content (numbers recomputed from raw
exports, cross-checked, corrected before publish). Case studies are numbered as
"Case Files" rather than generic list items, since they really are sequential
audit records.

- **Palette:** deep bottle-green-black base (`#12201C`), hot magenta stamp-ink
  accent (`#FF3D7F`), gold verification accent (`#FFC940`), warm paper text
  (`#F3EFE4`).
- **Type:** Space Grotesk (display), IBM Plex Mono (all data/numbers — ledger
  feel), Work Sans (body copy).
- **Signature element:** the rotated "Verified · Raw Data" ink-stamp mark.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

All case study content lives in **`lib/case-studies.ts`** as plain TypeScript
objects — no CMS needed for this size of portfolio. To add a new case study:

1. Add a new object to the `caseStudies` array (copy an existing one as a
   template — `caseNo`, `slug`, `tier`, snapshot stats, table sections, etc.).
2. It will automatically appear on the homepage grid and get its own page at
   `/case-studies/[slug]`.

To add a client to the compact "Verified Roster" section instead of a full case
file, add an entry to `trustStripClients`.

## Deploying to Vercel

**Option A — Vercel CLI (fastest):**

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (link to a new project, accept the defaults — Vercel
auto-detects Next.js). Run `vercel --prod` to push to production.

**Option B — GitHub + Vercel dashboard:**

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, leave all
   settings on default (Next.js is auto-detected), click **Deploy**.

No environment variables are required — this site has no backend, database, or
API keys. Everything is static content compiled at build time.

## Notes

- The build was verified locally with a font-stub swap (Google Fonts requires
  live internet access at build time, which the sandbox this was built in
  didn't have) — the real build using `next/font/google` will work normally on
  Vercel, which has full internet access. No code changes needed on your end.
- All client names are anonymized per the source portfolio's methodology.
  Replace `hello@example.com` in `Header.tsx` and `Footer.tsx` with your real
  contact.
