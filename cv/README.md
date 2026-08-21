# Academic CV (LaTeX)

A professional, economics-style CV template — single column, serif type, ruled
section headers, right-aligned dates, reverse-chronological. Fill in the
`[PLACEHOLDERS]` and compile to PDF.

---

## ✏️ How to edit
Open **`CV.tex`** and replace everything in square brackets, e.g. `[YOUR NAME]`,
`[you@mcmaster.ca]`, `[Title of Your Job Market Paper]`, and the sample lines.

- **Add an entry:** copy a `\cventry{...}{...}` line (left text + right-aligned year)
  or an `\item` inside a list, and edit it.
- **Remove a section:** delete from its `\section{...}` line down to the next `\section{...}`.
- **Bold your name** in coauthored work with `\me` (already defined).

---

## 🛠️ How to compile to PDF

### Easiest — Overleaf (no install)
1. Go to overleaf.com → **New Project → Upload Project** (or Blank Project).
2. Upload `CV.tex`.
3. Click **Recompile**. Download the PDF.

### Locally (if you have LaTeX / MacTeX installed)
```bash
cd /Users/kritagyadhanda/Desktop/academic-website/cv
pdflatex CV.tex
```
This produces `CV.pdf` in the same folder.

> Don't have LaTeX? Install MacTeX (large) or the smaller BasicTeX:
> `brew install --cask mactex-no-gui`  — then restart your terminal.

---

## 🔗 Link the CV to your website
After compiling, copy the PDF into the site's `files/` folder so the website's
**CV** button works:
```bash
cp CV.pdf ../files/CV.pdf
```
(The website's `js/data.js` already points `cv.file` and `links.cv` to
`files/CV.pdf`.)

---

## Notes
- Only standard LaTeX packages are used, so it compiles anywhere.
- The layout follows common academic-economics CV conventions; **no content was
  copied** from any specific economist — only widely-used section structure.
