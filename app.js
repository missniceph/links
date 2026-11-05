/* Builds the page from links.js. You shouldn't need to edit this file. */
(function () {
  "use strict";

  var ICONS = {
    instagram:
      '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    tiktok:
      '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/>',
    facebook:
      '<path d="M15 3h-2a4 4 0 0 0-4 4v3H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7.5a1 1 0 0 1 1-1H15z"/>',
    youtube:
      '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/>',
    website:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    guide:
      '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H19v-3"/><path d="M8 7.5h7M8 11h5"/>',
    link:
      '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  };
  var ARROW = '<path d="M7 17 17 7M9 7h8v8"/>';

  function svg(paths, cls) {
    return (
      '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths + "</svg>"
    );
  }

  function text(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  var site = window.SITE || {};
  var links = window.LINKS || [];

  text("name", site.name);
  text("handle", site.handle);
  text("tagline", site.tagline);
  text("year", String(new Date().getFullYear()));

  if (site.photo) {
    var avatar = document.getElementById("avatar");
    var img = new Image();
    img.alt = site.name || "Profile photo";
    img.width = 112;
    img.height = 112;
    img.decoding = "async";
    img.onload = function () {
      avatar.innerHTML = "";
      avatar.appendChild(img);
      avatar.removeAttribute("aria-hidden");
    };
    img.src = site.photo;
  }

  var list = document.getElementById("links");
  list.innerHTML = "";

  links.forEach(function (item) {
    if (!item || !item.url || !String(item.url).trim()) return; // empty url = hidden

    var li = document.createElement("li");
    var a = document.createElement("a");
    a.className = "link";
    a.href = item.url;
    a.rel = "noopener";

    var icon = document.createElement("span");
    icon.className = "link-icon";
    icon.innerHTML = svg(ICONS[item.icon] || ICONS.link, "icon");

    var label = document.createElement("span");
    label.className = "link-label";
    label.textContent = item.label || item.url;

    a.appendChild(icon);
    a.appendChild(label);

    if (item.isNew) {
      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "NEW";
      a.appendChild(badge);
      a.setAttribute("aria-label", (item.label || item.url) + " (new)");
    }

    var arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.innerHTML = svg(ARROW, "icon");
    a.appendChild(arrow);

    li.appendChild(a);
    list.appendChild(li);
  });
})();
