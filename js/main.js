/* =============================================================================
   main.js  —  Renders your website from js/data.js
   You do NOT need to edit this file. All content lives in js/data.js.
   ============================================================================= */

(function () {
  "use strict";

  // ---- Small helpers -------------------------------------------------------
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const has = (v) => typeof v === "string" && v.trim() !== "";

  // Bold the site owner's name inside an author list
  function formatAuthors(authors) {
    if (!authors || !authors.length) return "";
    return authors
      .map((a) => (a === SITE.name ? `<span class="me">${a}</span>` : a))
      .join(", ");
  }

  // Build a row of link buttons for a paper
  function paperLinks(links) {
    if (!links) return null;
    const valid = links.filter((l) => has(l.url) && has(l.label));
    if (!valid.length) return null;
    const wrap = el("div", "paper-links");
    valid.forEach((l) => {
      const a = el("a", null, l.label);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    return wrap;
  }

  // ---- Full-page background photo (optional) -------------------------------
  if (has(SITE.background)) {
    document.body.classList.add("has-bg");
    document.body.style.backgroundImage = `url("${SITE.background}")`;
  }

  // ---- Header / brand ------------------------------------------------------
  document.title = has(SITE.browserTitle) ? SITE.browserTitle : SITE.name;
  $("#brand").textContent = SITE.name;


  // ---- Hero ----------------------------------------------------------------
  const photo = $("#heroPhoto");
  if (has(SITE.photo)) {
    const img = new Image();
    img.src = SITE.photo;
    img.alt = SITE.name;
    photo.appendChild(img);
  } else {
    // initials fallback
    const initials = SITE.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
    photo.textContent = initials.toUpperCase();
  }
  $("#heroName").textContent = SITE.name;
  $("#heroTitle").textContent = SITE.title;
  // Join affiliation parts, skipping any that are empty (avoids stray commas)
  const affil = [SITE.affiliationExtra, SITE.affiliation]
    .filter((x) => has(x))
    .join(", ");
  $("#heroAffil").textContent = affil;


  // ---- Hero quick links ----------------------------------------------------
  const linkDefs = [
    { key: "email", label: "Email", href: (v) => "mailto:" + v },
    { key: "cv", label: "CV", href: (v) => v },
    { key: "googleScholar", label: "Google Scholar", href: (v) => v },
    { key: "ssrn", label: "SSRN", href: (v) => v },
    { key: "linkedin", label: "LinkedIn", href: (v) => v },
    { key: "twitter", label: "Twitter / X", href: (v) => v },
    { key: "github", label: "GitHub", href: (v) => v },
  ];
  const heroLinks = $("#heroLinks");
  const footerLinks = $("#footerLinks");
  linkDefs.forEach((d) => {
    const val = SITE.links[d.key];
    if (!has(val)) return;
    const a = el("a", "pill-link", d.label);
    a.href = d.href(val);
    if (d.key !== "email") { a.target = "_blank"; a.rel = "noopener"; }
    heroLinks.appendChild(a);

    const fa = a.cloneNode(true);
    fa.className = "";
    footerLinks.appendChild(fa);
  });

  // ---- Build nav + sections ------------------------------------------------
  const main = $("#main");
  const nav = $("#nav");
  const navItems = [];

  function addSection(id, navLabel, heading, buildBody) {
    const sec = el("section", "block");
    sec.id = id;
    if (has(heading)) sec.appendChild(el("h2", null, heading));
    buildBody(sec);
    main.appendChild(sec);
    navItems.push({ id, label: navLabel });
  }

  // About
  if (SITE.about && SITE.about.enabled) {
    addSection("about", "About", "About", (sec) => {
      SITE.about.paragraphs.forEach((p) => sec.appendChild(el("p", null, p)));
    });
  }

  // Fields
  if (SITE.fields && SITE.fields.enabled && SITE.fields.items.length) {
    addSection("fields", null, SITE.fields.heading, (sec) => {
      const wrap = el("div", "field-pills");
      SITE.fields.items.forEach((f) => wrap.appendChild(el("span", null, f)));
      sec.appendChild(wrap);
    });
  }

  // Working Papers
  if (SITE.workingPapers && SITE.workingPapers.enabled && SITE.workingPapers.items.length) {
    addSection("working-papers", "Research", SITE.workingPapers.heading, (sec) => {
      SITE.workingPapers.items.forEach((p) => {
        const d = el("div", "paper");
        const badge = has(p.badge) ? `<span class="badge">${p.badge}</span>` : "";
        d.appendChild(el("h3", "paper-title", `${p.titleText}${badge}`));
        const meta = [];
        if (p.authors && p.authors.length) meta.push(formatAuthors(p.authors));
        const authorLine = el("p", "paper-authors",
          `${meta.join("")}${has(p.year) ? ` (${p.year})` : ""}`);
        d.appendChild(authorLine);
        if (has(p.abstract)) d.appendChild(el("p", "paper-abstract", p.abstract));
        const links = paperLinks(p.links);
        if (links) d.appendChild(links);
        sec.appendChild(d);
      });
    });
  }

  // Publications
  if (SITE.publications && SITE.publications.enabled && SITE.publications.items.length) {
    addSection("publications", "Publications", SITE.publications.heading, (sec) => {
      SITE.publications.items.forEach((p) => {
        const d = el("div", "paper");
        d.appendChild(el("h3", "paper-title", p.titleText));
        d.appendChild(el("p", "paper-authors", formatAuthors(p.authors)));
        let cite = "";
        if (has(p.journal)) cite += `<span class="paper-journal">${p.journal}</span>`;
        if (has(p.year)) cite += `${cite ? ", " : ""}${p.year}`;
        if (has(p.volume)) cite += `${cite ? ", " : ""}${p.volume}`;
        if (cite) d.appendChild(el("p", null, cite));
        const links = paperLinks(p.links);
        if (links) d.appendChild(links);
        sec.appendChild(d);
      });
    });
  }

  // Work in Progress
  if (SITE.workInProgress && SITE.workInProgress.enabled && SITE.workInProgress.items.length) {
    addSection("wip", null, SITE.workInProgress.heading, (sec) => {
      const ul = el("ul", "wip-list");
      SITE.workInProgress.items.forEach((w) => {
        const li = el("li");
        li.innerHTML = `${w.titleText}` +
          (w.authors && w.authors.length ? ` <span class="authors">— ${formatAuthors(w.authors)}</span>` : "");
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    });
  }

  // Teaching
  if (SITE.teaching && SITE.teaching.enabled && SITE.teaching.items.length) {
    addSection("teaching", "Teaching", SITE.teaching.heading, (sec) => {
      if (has(SITE.teaching.intro)) sec.appendChild(el("p", null, SITE.teaching.intro));
      SITE.teaching.items.forEach((t) => {
        const row = el("div", "teach-item");
        const left = el("div");
        left.appendChild(el("div", "teach-role", t.role));
        left.appendChild(el("div", "teach-course", t.course));
        row.appendChild(left);
        if (has(t.term)) row.appendChild(el("div", "teach-term", t.term));
        sec.appendChild(row);
      });
    });
  }

  // CV
  if (SITE.cv && SITE.cv.enabled && has(SITE.cv.file)) {
    addSection("cv", "CV", SITE.cv.heading, (sec) => {
      const a = el("a", "pill-link", "Download CV (PDF)");
      a.href = SITE.cv.file;
      a.target = "_blank";
      a.rel = "noopener";
      sec.appendChild(a);
      if (has(SITE.cv.note)) sec.appendChild(el("p", "cv-note", SITE.cv.note));
    });
  }

  // Contact
  if (SITE.contact && SITE.contact.enabled) {
    addSection("contact", "Contact", SITE.contact.heading, (sec) => {
      const c = SITE.contact;
      const box = el("div", "contact-grid");
      if (has(c.email)) box.innerHTML += `<strong>Email:</strong> <a href="mailto:${c.email}">${c.email}</a><br>`;
      if (has(c.office)) box.innerHTML += `<strong>Office:</strong> ${c.office}<br>`;
      if (c.address && c.address.length) {
        box.innerHTML += `<br>${c.address.join("<br>")}`;
      }
      sec.appendChild(box);
    });
  }

  // ---- Render nav ----------------------------------------------------------
  const seen = new Set();
  navItems.forEach((item) => {
    if (!item.label || seen.has(item.label)) return;
    seen.add(item.label);
    const a = el("a", null, item.label);
    a.href = "#" + item.id;
    nav.appendChild(a);
  });

  // Mobile nav toggle
  const toggle = $("#navToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---- Footer --------------------------------------------------------------
  $("#footerCopy").textContent =
    `© ${new Date().getFullYear()} ${SITE.name}.` +
    (has(SITE.affiliation) ? ` ${SITE.affiliation}.` : "");

})();
