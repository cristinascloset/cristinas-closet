// ─────────────────────────────────────────────────────────────
//  cristina's closet — everything you'll want to edit lives here
// ─────────────────────────────────────────────────────────────

window.SITE = {
  instagram: "https://instagram.com/",   // ← put your handle here, e.g. https://instagram.com/cristinascloset
  email: "",                             // ← e.g. hello@cristinascloset.com
  buyLink: "",                           // ← paste a Stripe / Shopify payment link here to take real orders
  drop: "drop 01 — winter 2026",
};

window.PRODUCT = {
  name: "No. 01",
  line: "one silk, four ways",
  price: 165,
  edition: 2,        // how many exist, ever
  remaining: 2,      // change this as they sell. 0 = sold out
  ways: [
    { label: "as a headband", img: "images/headband.jpg", tone: ["#8c3a32", "#e8c9a8"] },
    { label: "as a scarf",    img: "images/scarf.jpg",    tone: ["#5e1a1a", "#d9a58e"] },
    { label: "as a sash",     img: "images/sash.jpg",     tone: ["#3a1410", "#c98f6c"] },
    { label: "as a belt",     img: "images/belt.jpg",     tone: ["#2a0c0c", "#b0705a"] },
  ],
  details: [
    ["fabric",     "100% silk, sourced locally in new hampshire"],
    ["size",       "<span class='todo'>add length × width</span>"],
    ["made",       "designed, cut & sewn by hand in my home studio"],
    ["edition",    "numbered & signed. never remade."],
    ["care",       "<span class='todo'>add care instructions</span>"],
  ],
};

// landing page collage — swap img paths for your own photos
window.TILES = [
  { tag: "No. 01, as a headband", img: "images/headband.jpg", tone: ["#8c3a32", "#e8c9a8"] },
  { tag: "No. 01, as a scarf",    img: "images/scarf.jpg",    tone: ["#5e1a1a", "#d9a58e"] },
  { tag: "the studio",            img: "images/studio.jpg",   tone: ["#2b1a14", "#7a5a44"] },
  { tag: "the silk",              img: "images/silk.jpg",     tone: ["#f5efc6", "#d8b98c"] },
  { tag: "No. 01, as a sash",     img: "images/sash.jpg",     tone: ["#3a1410", "#c98f6c"] },
  { tag: "the first sketch",      img: "images/sketch.jpg",   tone: ["#efe6cf", "#bba98a"] },
  { tag: "No. 01, as a belt",     img: "images/belt.jpg",     tone: ["#2a0c0c", "#b0705a"] },
  { tag: "new hampshire",         img: "images/nh.jpg",       tone: ["#2f3b2c", "#8a9a7a"] },
];

// ── helpers ──────────────────────────────────────────────────
window.photo = function (p, cls = "") {
  const bg = `background: radial-gradient(ellipse at 40% 35%, ${p.tone[1]} 0%, ${p.tone[0]} 78%);`;
  return `<div class="photo ${cls}" style="${bg}">
            <img src="${p.img}" alt="${p.label || p.tag || ""}" loading="lazy" onerror="this.remove()">
          </div>`;
};

window.NAV = [["home", "index.html"], ["products", "products.html"], ["about", "about.html"], ["questions", "questions.html"]];

window.claimHref = function () {
  if (SITE.buyLink) return SITE.buyLink;
  if (SITE.email) return `mailto:${SITE.email}?subject=claiming%20No.%2001`;
  return SITE.instagram;
};

// left column used on every inner page
window.renderSide = function (active) {
  const el = document.getElementById("side");
  el.innerHTML = `
    <a href="index.html" class="mark">cristina's closet</a>
    <nav>${NAV.map(([n, h]) => `<a href="${h}" class="${n === active ? "on" : ""}">${n}</a>`).join("")}</nav>
    <div class="spacer"></div>
    <p class="foot">handmade in new hampshire<br>© 2026 cristina's closet</p>`;
};

window.editionLine = function () {
  const P = PRODUCT;
  if (P.remaining <= 0) return `edition of ${P.edition} — sold out`;
  return `edition of ${P.edition} — ${P.remaining === 1 ? "last one" : P.remaining + " left"}`;
};
