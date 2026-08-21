# Personal Academic Website

A clean, fast, professional personal website for an academic economist.
Everything is a plain file — no build tools, no frameworks, no server required.

---

## 📁 What's in here

```
academic-website/
├── index.html        ← the page (you rarely touch this)
├── css/styles.css    ← the design/colours (optional to touch)
├── js/
│   ├── data.js        ← ⭐ YOUR CONTENT — edit this file ⭐
│   └── main.js        ← builds the page from data.js (don't touch)
├── files/            ← put your CV.pdf here
└── images/           ← put your headshot here (optional)
```

---

## ✏️ How to edit your website

**You only ever need to edit one file: `js/data.js`.**

1. Open `js/data.js` in any text editor (or VS Code).
2. Change the text inside the quotes `"..."`.
3. Save the file, then refresh the page in your browser.

That's it. The layout, navigation menu, and footer all update automatically.

**Common edits:**
- **Change your name/title** → top of `data.js` (section 1).
- **Rewrite your bio** → section 2 (`about`).
- **Add a paper** → copy one `{ ... }` block inside `workingPapers` or `publications` and paste it below, then edit it.
- **Hide a whole section** (e.g. Teaching) → set `enabled: true` to `enabled: false`.
- **Add a link** (Google Scholar, LinkedIn, etc.) → paste the URL in section 10 (`links`). Leave `""` empty to hide it.
- **Change the accent colour** → edit `--accent` at the top of `css/styles.css`.

> ⚠️ Keep the quotes `"` and commas `,` exactly where they are. If the page ever goes blank, you probably deleted a quote or comma — undo your last change.

---

## 👀 How to preview it locally

Just double-click `index.html` — it opens in your browser.

(Optional, for a nicer local server that avoids any browser file restrictions:)
```bash
cd academic-website
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🌐 How to put it online (free options)

Because this is a static site, you can host it for free. Two easy routes:

### Option A — GitHub Pages (recommended, gives you a permanent URL)
1. Create a free account at github.com.
2. Create a new repository named `yourusername.github.io`.
3. Upload all the files in this folder (or use `git`).
4. Your site is live at `https://yourusername.github.io`.

### Option B — Netlify (drag & drop)
1. Go to app.netlify.com → "Add new site" → "Deploy manually".
2. Drag this whole `academic-website` folder onto the page.
3. You get an instant live URL (you can add a custom domain later).

### Using a custom domain (e.g. yourname.com)
Both GitHub Pages and Netlify let you connect a custom domain in their settings.
Buy a domain from any registrar (Namecheap, Cloudflare, Google Domains, etc.).

---

## ✅ Before you publish — checklist

- [ ] Replace the placeholder bio, papers, and teaching with your real content.
- [ ] Update your real email in section 9 (`contact`) and section 10 (`links`).
- [ ] Add your CV as `files/CV.pdf`.
- [ ] (Optional) Add a headshot to `images/` and set `photo:` in `data.js`.
- [ ] Add your Google Scholar / LinkedIn URLs in section 10.
- [ ] Fill in `[YEAR]`, `[YOUR DEGREE]`, and other bracketed placeholders.

Enjoy your new site! 🎓
