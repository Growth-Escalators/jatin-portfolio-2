# Jatin Agrawal — Portfolio + Résumé

A finished **static website**. No build step, no framework — just open `index.html`.

| File | What it is |
|------|------------|
| `index.html` | Homepage (portfolio) |
| `resume.dc.html` | Résumé page (linked from the "Download CV" / "CV" buttons) |
| `support.js` | Runtime both pages load — **do not edit** |
| `public/jatin.png` | Portrait image |

## Put it live (two options)

**A. Easiest — drag & drop**
Go to https://app.netlify.com/drop and drag this whole folder in. Live in ~30 seconds.

**B. GitHub + Vercel (auto-deploys on every change)**
See **CLAUDE_CODE.md** — it has a copy-paste prompt that makes Claude Code create the repo, push it, and deploy to Vercel for you.

## Notes
- This is a standalone static build, separate from the original Vite/React `jatin-portfolio-2` repo. Keep it in its own repo to avoid build conflicts.
- It needs an internet connection at view time (loads Google Fonts + brand icons from CDNs).
