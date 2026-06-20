# Deploy this site with Claude Code

This folder is a **complete static website** — no build step, no framework.

```
index.html        → homepage (the portfolio)
resume.dc.html    → résumé page (opened by the "Download CV" buttons)
support.js        → runtime the two HTML pages load (do not edit)
public/jatin.png  → portrait used on the homepage
```

## How to use

1. Install Claude Code if you haven't: https://www.anthropic.com/claude-code
2. Open a terminal **in this folder** and run `claude`.
3. Make sure you're signed in to the two CLIs Claude Code will use:
   - GitHub:  `gh auth login`   (install: https://cli.github.com)
   - Vercel:  `vercel login`    (install: `npm i -g vercel`)
4. Paste the prompt below into Claude Code.

---

## Paste this into Claude Code

> This folder is a finished static website (plain HTML + one JS runtime, no build step). The homepage is `index.html`. **Do not modify the contents of any `.html` or `.js` file** — just deploy them as-is.
>
> Please:
> 1. Initialize a git repo here and commit all files.
> 2. Create a new **public** GitHub repo called `jatin-portfolio` on my account and push to `main`.
> 3. Deploy to **Vercel** as a static site (framework preset: **Other**, no build command, output = the repo root) and connect it to the GitHub repo so every push auto-deploys.
> 4. Print the live Vercel URL when done.
> 5. Remind me how to point my custom domain `www.jatinagrawal.in` at this Vercel project.

---

## Updating the site later

Edit a file, then in Claude Code say: *"commit and push my changes."* Vercel auto-redeploys within a minute.

## Custom domain

In Vercel → your project → **Settings → Domains** → add `www.jatinagrawal.in`, then add the DNS records Vercel shows you at your domain registrar. Once it resolves, the résumé and portfolio links you ship elsewhere will match your real domain.
