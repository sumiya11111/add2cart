/* add2cart: cart, filters, gallery, reveal */

/* ====== EDIT THIS: your WhatsApp number, country code first, digits only ====== */
var WHATSAPP_NUMBER = "8801329529807";
/* ============================================================================ */

var PROJECTS = {
  baah:   { name: "Baah Store", sku: "A2C-001", type: "Handicraft and home", img: "assets/work/baah-home.jpg" },
  paarel: { name: "PAARÉL",     sku: "A2C-002", type: "Clothing store",      img: "assets/work/paarel-home.jpg" },
  fiero:  { name: "FIERO",      sku: "A2C-003", type: "Bespoke tailoring",   img: "assets/work/fiero-home.jpg" }
};

(function () {
  var BASE = document.body.getAttribute("data-base") || "";
  var KEY = "a2c_cart";

  function read() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v.filter(function (id) { return PROJECTS[id]; }) : []; }
    catch (e) { return memory; }
  }
  var memory = [];
  function write(list) {
    memory = list;
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }
  var cart = read();
  var details = { name: "", biz: "" };

  /* ---------- Drawer markup (built once, same on every page) ---------- */
  var drawer = document.createElement("div");
  drawer.className = "drawer";
  drawer.id = "cart";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML =
    '<button class="drawer__backdrop" data-close aria-label="Close cart" tabindex="-1"></button>' +
    '<aside class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">' +
      '<div class="drawer__head"><h2 id="cart-title">Your cart (<span data-count>0</span>)</h2>' +
        '<button class="icon-btn" data-close aria-label="Close cart"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<div class="drawer__body">' +
        '<div data-items></div>' +
        '<div class="eyebrow" style="font-size:12px;margin-top:12px">Your details</div>' +
        '<label class="field">Your name<input type="text" name="name" autocomplete="name" placeholder="e.g. Rahim"></label>' +
        '<label class="field">What do you sell?<input type="text" name="biz" placeholder="e.g. Women\'s clothing"></label>' +
      '</div>' +
      '<div class="drawer__foot">' +
        '<div class="sum-row"><span>Projects in cart</span><span data-count>0</span></div>' +
        '<div class="sum-row"><span>Price</span><span>We quote on WhatsApp</span></div>' +
        '<a class="btn" data-wa href="#" target="_blank" rel="noopener" style="margin-top:6px;min-height:54px">Place order on WhatsApp</a>' +
        '<div class="note">Opens WhatsApp with your cart already typed in.</div>' +
      '</div>' +
    '</aside>';
  document.body.appendChild(drawer);

  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var toastTimer;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-on"); }, 1800);
  }

  var lastFocus = null;
  function openCart() {
    lastFocus = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var c = drawer.querySelector(".icon-btn");
    if (c) c.focus();
  }
  function closeCart() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function waLink() {
    var names = cart.map(function (id) { return PROJECTS[id].name; }).join(", ");
    var msg = "Hi add2cart! I want a website like: " + (names || "not sure yet") +
      "\nName: " + (details.name || "-") +
      "\nI sell: " + (details.biz || "-");
    var num = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
  }

  function render() {
    document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = cart.length; });

    var items = drawer.querySelector("[data-items]");
    if (!cart.length) {
      items.innerHTML =
        '<div class="empty"><h3>Your cart is empty</h3><p>Add a store you like. It shows us your taste.</p>' +
        '<a class="btn" href="' + BASE + 'index.html#work" data-close style="min-height:44px;font-size:15px">Shop our work</a></div>';
    } else {
      items.innerHTML = cart.map(function (id) {
        var p = PROJECTS[id];
        return '<div class="line-item" style="margin-bottom:12px">' +
          '<img src="' + BASE + p.img + '" alt="">' +
          '<div class="line-item__info"><div class="line-item__sku">' + p.sku + '</div>' +
          '<div class="line-item__name">' + p.name + '</div><div class="line-item__type">' + p.type + '</div></div>' +
          '<button class="link-btn" data-remove="' + id + '">Remove</button></div>';
      }).join("");
    }

    document.querySelectorAll("[data-add]").forEach(function (btn) {
      var on = cart.indexOf(btn.getAttribute("data-add")) >= 0;
      btn.classList.toggle("is-added", on);
      btn.textContent = on ? "Added to cart" : "Add to cart";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    drawer.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink(); });
    document.querySelectorAll("[data-wa-plain]").forEach(function (a) { a.href = waLink(); });
  }

  function toggle(id) {
    var i = cart.indexOf(id);
    if (i >= 0) { cart.splice(i, 1); say(PROJECTS[id].name + " removed"); }
    else { cart.push(id); say(PROJECTS[id].name + " added to cart"); }
    write(cart);
    render();
    document.querySelectorAll(".cart-count").forEach(function (el) {
      el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-add],[data-remove],[data-open-cart],[data-close]");
    if (!t) return;
    if (t.hasAttribute("data-add")) { e.preventDefault(); toggle(t.getAttribute("data-add")); }
    else if (t.hasAttribute("data-remove")) { toggle(t.getAttribute("data-remove")); }
    else if (t.hasAttribute("data-open-cart")) { e.preventDefault(); openCart(); }
    else if (t.hasAttribute("data-close")) { closeCart(); }
  });
  drawer.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });
  drawer.querySelectorAll("input").forEach(function (inp) {
    inp.addEventListener("input", function () { details[inp.name] = inp.value; render(); });
  });
  window.addEventListener("storage", function (e) { if (e.key === KEY) { cart = read(); render(); } });

  /* ---------- Filters (home page) ---------- */
  var filters = document.querySelectorAll("[data-filter]");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var cat = f.getAttribute("data-filter");
      filters.forEach(function (x) { x.setAttribute("aria-pressed", x === f ? "true" : "false"); });
      document.querySelectorAll("[data-cat]").forEach(function (card) {
        card.hidden = !(cat === "All" || card.getAttribute("data-cat") === cat);
      });
    });
  });

  /* ---------- Gallery (case study pages) ---------- */
  var main = document.querySelector("[data-gallery-main]");
  if (main) {
    var url = document.querySelector("[data-gallery-url]");
    var label = document.querySelector("[data-gallery-label]");
    document.querySelectorAll("[data-shot]").forEach(function (th) {
      th.addEventListener("click", function () {
        document.querySelectorAll("[data-shot]").forEach(function (x) { x.setAttribute("aria-pressed", x === th ? "true" : "false"); });
        main.src = th.getAttribute("data-shot");
        main.alt = th.getAttribute("data-label") + " screenshot";
        if (url) url.textContent = th.getAttribute("data-url");
        if (label) label.textContent = th.getAttribute("data-label");
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("is-in"); });
  }

  render();
})();
