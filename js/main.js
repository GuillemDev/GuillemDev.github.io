(function () {
  const S = window.SITE, P = window.PROJECTS;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const here = location.pathname.split("/").pop() || "index.html";
  const pages = [
    ["index.html", "Home"], ["top-projects.html", "Top 3 Projects"], ["unity.html", "Unity Projects"],
    ["unreal.html", "Unreal Engine Projects"], ["godot.html", "Godot Projects"], ["custom.html", "Custom Engine Projects"]
  ];

  const nav = document.getElementById("nav");
  if (nav) nav.innerHTML = `<nav class="nav wrap" aria-label="Main"><a class="brand" href="index.html">${esc(S.name)}</a><ul>` +
    pages.map(([h, l]) => `<li><a href="${h}"${h === here ? ' aria-current="page"' : ""}>${l}</a></li>`).join("") + `</ul></nav>`;

  const foot = document.getElementById("footer");
  if (foot) foot.innerHTML = `<div class="wrap"><span>&copy; ${new Date().getFullYear()} ${esc(S.name)}</span><span><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></span><span>` +
    S.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join(" &nbsp; ") + `</span></div>`;

  document.querySelectorAll("[data-site]").forEach(el => { el.textContent = S[el.dataset.site] || ""; });

  function media(m) {
    if (!m || !m.src) return `<div class="frame empty"><span>Media goes here.<br>Add an image or video in js/projects.js</span></div>`;
    if (m.type === "youtube") return `<div class="frame"><iframe src="https://www.youtube.com/embed/${esc(m.src)}" title="${esc(m.alt || "Project video")}" loading="lazy" allowfullscreen></iframe></div>`;
    if (m.type === "video") return `<div class="frame"><video controls preload="metadata"${m.poster ? ` poster="${esc(m.poster)}"` : ""}><source src="${esc(m.src)}"></video></div>`;
    return `<div class="frame"><img src="${esc(m.src)}" alt="${esc(m.alt || "")}" loading="lazy"></div>`;
  }
  const root = document.getElementById("modules");
  if (root) {
    const list = P[root.dataset.list] || [];
    root.innerHTML = list.map(p => `<article class="module wrap">${media(p.media)}<div class="meta"><div><h2>${esc(p.title)}</h2><h3>${esc(p.subtitle)}</h3></div><div class="desc">` +
      String(p.description || "").split(/\n\s*\n/).map(t => `<p>${esc(t)}</p>`).join("") +
      (p.link ? `<p><a href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)}</a></p>` : "") + `</div></div></article>`).join("");
  }
})();
