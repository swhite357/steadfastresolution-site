/* Steadfast Resolution — page behavior. No frameworks, no build step. */

// ----- gallery: render entries from gallery-data.js -----
(function renderGallery() {
  var grid = document.getElementById("galleryGrid");
  if (!grid) return;

  if (typeof GALLERY_IMAGES === "undefined" || GALLERY_IMAGES.length === 0) {
    grid.innerHTML = '<p class="gallery-empty">Job photos coming soon.</p>';
    return;
  }

  GALLERY_IMAGES.forEach(function (entry) {
    var fig = document.createElement("figure");
    fig.className = "gallery-item";

    var img = document.createElement("img");
    img.src = entry.file;
    img.alt = entry.caption || "Inspection photo";
    img.loading = "lazy";
    // If a listed file is missing, drop the whole tile rather than
    // showing a broken image.
    img.onerror = function () { fig.remove(); };

    var cap = document.createElement("figcaption");
    cap.textContent = entry.caption || "";

    fig.appendChild(img);
    fig.appendChild(cap);
    grid.appendChild(fig);
  });
})();

// ----- mobile nav toggle -----
(function mobileNav() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close the menu after tapping a link
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// ----- footer year -----
(function footerYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();
