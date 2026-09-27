# Blanck Capital website: rules for AI coding agents

These rules apply to every agent that edits this repo, including Claude Code and Google Antigravity. `CLAUDE.md` imports this file, and Antigravity reads it directly.

## What this site is

- blanckcapital.com is **one static page**, `index.html`, with inline CSS and vanilla JS. There is no framework, no package.json and no build step.
- GitHub Pages serves the `main` branch from the repo root (`CNAME` = blanckcapital.com, `.nojekyll`). **Pushing to `main` publishes the live site within about 2 minutes.**
- Media lives in `/media/`: the hero video and poster, the film and its poster, and `og-image.jpg`, the 1200×630 social preview.
- `404.html`, `home/`, `investments/` and `terms-of-service/` are redirect stubs. Keep them.

## Workflow (follow in this order)

1. **Sync first.** Before any edit, run `git checkout main && git pull`. The owner edits with both Claude and Antigravity, so the latest version may have come from the other tool.
2. **Edit** `index.html`. Keep the existing structure, class names and CSS tokens (the `:root` variables). Do not add npm, React, Tailwind, a bundler or any library.
3. **Preview.** Run `python3 -m http.server 8000` in the repo root and check http://localhost:8000 at desktop (1440 px) and mobile (390 px) widths. Nothing may scroll sideways at 360 px.
4. **Show the owner and wait for approval** before publishing. Describe what changed.
5. **Publish** once the owner says to: `git add -A && git commit -m "<clear description>" && git pull --rebase && git push origin main`. Then open https://blanckcapital.com after about 2 minutes and confirm the change is live.
6. For a large or risky change, use a branch and a pull request (`gh pr create`) instead, and merge only when the owner approves.

**Never** force-push, rewrite history or delete branches you didn't create. To undo a published change, use `git revert <commit>` and push.

## Content rules

- **No invented facts.** Do not add statistics, awards, quotes, clients or claims the owner hasn't provided.
- **Compliance copy.** Blanck Capital is a private family office. Do not add "Inquire", "private consulting", "Accredited Investor" or any language that solicits investors or offers advice. Keep the footer disclaimer.
- **Portfolio.** 35 companies grouped by theme, plain-text names linking to each company's site. OneBrief was intentionally removed. Keep the "identification only" line. No company logos.
- **Press.** The CNBC item (June 11, 2026, "Beyond SpaceX…", by Hayley Cuccinello) must stay accurate. Only quote the article verbatim.
- **SEO.** Keep the `<head>` meta tags, `og:image` → `/media/og-image.jpg`, and the JSON-LD block valid. Update JSON-LD when people, press or the organization change.
- **Contact.** The "Contact Us" box emails jason@blanckcapital.com.

## Design rules

- Colors: ink `#07080B`, bone `#EDEAE3`, brass `#C8A96B` (on dark only) and brass-deep `#6E5626` (on light). Fonts: Archivo (sans), Bodoni Moda italic (serif) and IBM Plex Mono (labels).
- Restrained motion only. The interactive globe runs on desktop with a mouse; touch devices get the hero video. Respect `prefers-reduced-motion`.
- Every link and button must be at least 44×44 px, with a visible focus outline and text contrast of at least 4.5:1.
