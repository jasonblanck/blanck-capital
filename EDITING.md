# How to edit blanckcapital.com

Your site lives in the GitHub repo **jasonblanck/blanck-capital**. On your Mac it's in `~/Desktop/JB/blanck-capital-site`.

Whatever is on the `main` branch in GitHub is what's live. Both Claude and Antigravity edit the same folder and save to the same GitHub repo. They follow the same rules, in `AGENTS.md`: get the latest version first, show you a preview, and publish only when you say so.

---

## Editing with Antigravity

1. Open **Antigravity**, then **File → Open Folder…** and choose `Desktop/JB/blanck-capital-site`.
2. Open the Agent panel and start a new conversation. Antigravity reads `AGENTS.md` automatically.
3. Describe the change in plain English. For example:
   > Add a second press item: Forbes, October 2, 2026, "…", link https://…. Match the CNBC item's design.
4. Antigravity will get the latest version from GitHub, make the edit and start a preview. Open **http://localhost:8000** in your browser. To see the phone layout, make the window narrow or use Chrome's device toolbar (⌥⌘I, then the phone icon).
5. If it looks right, tell it: **"Looks good, publish it."** It commits, pushes to GitHub, and the site updates within about 2 minutes.
6. If it doesn't look right, describe what to change. Nothing goes live until you say "publish".

**If Antigravity asks for GitHub access:** your Mac is already signed in to GitHub, so `git push` should just work. If it fails, open Terminal, run `gh auth login`, pick GitHub.com → HTTPS → "Login with a web browser", then ask Antigravity to try again.

## Editing with Claude

- **Claude Code (desktop app or terminal):** open a session in `Desktop/JB/blanck-capital-site`, or just name the folder, and describe the change. Claude reads `CLAUDE.md`, which loads the same rules, then previews and publishes when you approve.
- **Claude on the web (claude.ai/code):** choose the `jasonblanck/blanck-capital` repo. Claude works on a branch and opens a pull request. Merge it on GitHub to publish.

## Switching between the two

You can switch between Claude and Antigravity freely. The only rule is **one at a time on the same change**. Finish (publish or discard) in one tool before starting in the other. Each tool pulls the latest version from GitHub before editing, so it will see what the other one did.

If a tool reports a "merge conflict", tell it: **"Pull the latest from GitHub, keep both changes, and show me the preview."**

## Undoing a change

Tell either tool: **"Undo the last published change to the website."** It will use `git revert`, which adds a new commit that reverses the old one, and push that. You can also do it on GitHub: open the repo's **Commits** page, open the commit, and use **Revert** if it came from a pull request.

## Handy requests

- "Update my bio to: …"
- "Add [Company] to the portfolio under [Theme], linking to [URL]."
- "Replace the film with this new video file: …"
- "Change the headline to …"
- "Show me what changed since last week." (It will read the git history.)

## Things to know

- After changing the social preview image, paste blanckcapital.com into LinkedIn's Post Inspector (linkedin.com/post-inspector) to refresh LinkedIn's copy.
- Have counsel review any new wording that describes investing activity.
- Every published change is saved on GitHub with its date and description, so nothing is ever lost.
