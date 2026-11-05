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

  function svg(paths) {
    return (
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      paths + "</svg>"
    );
  }

  function span(cls, html) {
    var el = document.createElement("span");
    el.className = cls;
    if (html) el.innerHTML = html;
    return el;
  }

  function clean(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && clean(value)) el.textContent = clean(value);
  }

  // Only allow web, email and phone links (blocks typos like "javascript:").
  function safeUrl(url) {
    url = clean(url);
    if (!url) return "";
    if (/^(https?:|mailto:|tel:)/i.test(url)) return url;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return "";
    if (/^www\./i.test(url) || /^[^\/]+\.[a-z]{2,}(\/|$)/i.test(url)) return "https://" + url;
    return url; // relative link, e.g. "guide.html"
  }

  var site = window.SITE || {};
  var loaded = Array.isArray(window.LINKS);
  var links = loaded ? window.LINKS : [];

  setText("name", site.name);
  setText("brand", site.brand);
  setText("handle", site.handle);
  setText("tagline", site.tagline);
  setText("year", String(new Date().getFullYear()));

  // Profile photo: keep the "N" circle until the photo has loaded; keep it if the photo fails.
  var photo = clean(site.photo);
  if (photo) {
    var avatar = document.getElementById("avatar");
    var img = new Image();
    img.alt = "Photo of " + (clean(site.name) || "Nice");
    img.width = 112;
    img.height = 112;
    img.decoding = "async";
    img.setAttribute("fetchpriority", "high");
    img.onload = function () {
      avatar.textContent = "";
      avatar.appendChild(img);
    };
    img.src = photo;
  }

  var list = document.getElementById("links");

  // Safety net: if links.js is missing or has a typo, show the backup list
  // written in index.html instead of an empty page.
  if (!loaded) {
    var backup = document.querySelector("nav noscript");
    if (backup) list.outerHTML = backup.textContent;
    return;
  }

  var fragment = document.createDocumentFragment();

  links.forEach(function (item) {
    if (!item) return;
    var url = safeUrl(item.url);
    if (!url) return; // empty url = hidden button

    var label = clean(item.label) || url;
    var a = document.createElement("a");
    a.className = "link";
    a.href = url;

    a.appendChild(span("link-icon", svg(ICONS[clean(item.icon).toLowerCase()] || ICONS.link)));

    var text = span("link-label");
    text.textContent = label;
    a.appendChild(text);

    if (item.isNew === true || item.isNew === "true") {
      var badge = span("badge");
      badge.textContent = "NEW";
      a.appendChild(badge);
    }

    a.appendChild(span("link-arrow", svg(ARROW)));

    var li = document.createElement("li");
    li.appendChild(a);
    fragment.appendChild(li);
  });

  list.appendChild(fragment);
})();
