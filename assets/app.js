try { document.documentElement.dataset.theme = JSON.parse(localStorage.getItem("pch_theme")) || "light"; } catch {}
/* TechStore BD – shared data, layout and helpers.
   Every page has <div id="site-header"></div> ... <div id="site-footer"></div>
   and sets <body data-page="..."> for the active nav item. */

/* ---------- Product data (from techstore-demo) ---------- */
const P = {
  1:{n:"Wanbo ToGo Pro 500 ANSI Lumens 1080P Portable Android Projector",b:"Wanbo",c:"projector",p:32500,o:33000,i:"p1.png"},
  2:{n:"Magcubic L018 650 ANSI Portable Outdoor Projector",b:"Magcubic",c:"projector",p:14500,o:19000,i:"p2.png"},
  3:{n:"Xiaomi REDMI G34WQ 2026 34\" 180Hz UWQHD Gaming Monitor",b:"Xiaomi",c:"monitor",p:37499,o:42400,i:"p3.png"},
  4:{n:"AOC AGON AG493QCX 49\" Dual FHD 144Hz Curved Gaming Monitor",b:"AOC",c:"monitor",p:122000,o:134000,i:"p4.jpg"},
  5:{n:"Logitech G923 TRUEFORCE Gaming Racing Wheel",b:"Logitech",c:"gaming",p:42990,o:53000,i:"p5.png"},
  6:{n:"MageGee Captain87 Rapid Trigger Magnetic Switch Keyboard",b:"MageGee",c:"accessories",p:6300,o:6900,i:"p6.png"},
  7:{n:"Furycube G87 RGB Gasket Hot-swappable Mechanical Keyboard",b:"Furycube",c:"accessories",p:4500,o:4900,i:"p7.jpg"},
  8:{n:"Furycube G9 Pro Wireless Gaming Mouse",b:"Furycube",c:"accessories",p:3490,o:3800,i:"p8.png"},
  9:{n:"MCHOSE G3 V2 Pro Tri-mode Gaming Mouse",b:"MCHOSE",c:"accessories",p:4100,o:4600,i:"p9.png"},
  10:{n:"Titan Army P2712R 27\" 2K 200Hz 1ms IPS Monitor",b:"Titan Army",c:"monitor",p:26500,o:31500,i:"p10.jpg"},
  11:{n:"AMD Ryzen 5 7500F RTX 5060 16GB DDR5 Gaming PC",b:"TechStore Build",c:"desktop",p:119900,o:124900,i:"p11.jpeg"},
  12:{n:"AMD Ryzen 7 7700 16GB DDR5 Performance Desktop PC",b:"TechStore Build",c:"desktop",p:71500,o:76500,i:"p12.jpeg"},
  13:{n:"Intel Core i5-14600K & Intel Arc B580 12GB DDR5 White Gaming PC",b:"TechStore Build",c:"desktop",p:166000,o:179900,i:"p13.jpeg"},
  14:{n:"AMD Ryzen 5 PRO 5650G Budget PC Build",b:"TechStore Build",c:"desktop",p:39000,o:43500,i:"p14.jpeg"},
  15:{n:"Asus ROG Strix G513RC-HN056 15.6\" FHD 144Hz Gaming Laptop",b:"ASUS",c:"laptop",p:129500,o:138800,i:"p15.jpg"},
  16:{n:"ASUS TUF Gaming F15 FX507ZC4 Core i7-12700H Gaming Laptop",b:"ASUS",c:"laptop",p:130000,o:175500,i:"p16.png"},
  17:{n:"ASUS TUF Gaming A15 FA507RF Ryzen 7 6800HS Laptop",b:"ASUS",c:"laptop",p:115000,o:130000,i:"p17.png"},
  18:{n:"HP Victus 15 FA2013DX Core i5-13420H RTX 3050 Gaming Laptop",b:"HP",c:"laptop",p:112999,o:123999,i:"p18.png"},
  19:{n:"Teclast ArtPad Pro LTE 12.7\" IPS Tablet",b:"Teclast",c:"tablet",p:38450,o:40900,i:"p19.webp"},
  20:{n:"Arzopa A1T 15.6\" FHD IPS Touch Portable Monitor",b:"Arzopa",c:"monitor",p:17000,o:23900,i:"h20.png"}
};
/* second photo shown on card hover */
const I2 = {"1":"h1.png","2":"h2.png","3":"h3.png","4":"h4.png","5":"h5.png","6":"h6.png","7":"h7.png","8":"h8.png","9":"h9.png","10":"h10.jpg","15":"h15.jpg","16":"h16.png","17":"h17.png","18":"h18.jpg","19":"h19.png","20":"h20.png"};
Object.entries(I2).forEach(([id, f]) => P[id].i2 = f);
const CATNAMES = {desktop:"Desktop PC",laptop:"Laptops",monitor:"Monitor",components:"Components",tablet:"Tablet",accessories:"Accessories",gaming:"Gaming",projector:"Projector"};
const NAV = [
  ["desktop","fa-desktop","Desktop"],["laptop","fa-laptop","Laptops"],["monitor","fa-tv","Monitor"],["components","fa-microchip","Components"],
  ["tablet","fa-tablet-screen-button","Tablet"],["accessories","fa-keyboard","Accessories"],["gaming","fa-gamepad","Gaming"],["cameras","fa-camera","Cameras"],
  ["gadget","fa-headphones","Gadget"],["office","fa-print","Office Equipment"],["networking","fa-wifi","Networking"],["projector","fa-video","Projector"],["tv","fa-tv","TV"]
];

const SUBS = {
  desktop:["Gaming PC","Budget PC","Brand PC","Mini PC","All-in-One"],
  laptop:["Gaming Laptop","Business Laptop","Ultrabook","Laptop Accessories"],
  monitor:["Gaming Monitor","Portable Monitor","Curved Monitor","4K Monitor"],
  components:["Processor","Motherboard","RAM","SSD","Graphics Card","Power Supply","Casing","CPU Cooler"],
  tablet:["Android Tablet","Graphics Tablet","Pen Display"],
  accessories:["Keyboard","Mouse","Headphone","Webcam","Mouse Pad"],
  gaming:["Racing Wheel","Gamepad","Gaming Chair","Console"],
  cameras:["Action Camera","Gimbal","Webcam"],
  gadget:["Smart Watch","Power Bank","Earbuds","Speaker"],
  office:["Printer","Scanner","UPS"],
  networking:["Router","Switch","WiFi Adapter"],
  projector:["Portable Projector","Smart Projector","Outdoor Projector"],
  tv:["Smart TV","Android TV"]
};

/* ---------- Mega menu content ---------- */
const MEGA = {
  desktop:{g:[["Pre-built PC",["Gaming PC","Budget PC","Workstation","Mini PC"]],["Brand PC",["HP","Dell","Lenovo","ASUS"]],["All-in-One",["HP AIO","Lenovo AIO","Dell AIO"]]],br:["AMD","Intel","ASUS","MSI","Gigabyte"]},
  laptop:{g:[["By Type",["Gaming Laptop","Business Laptop","Ultrabook","2-in-1 Laptop"]],["By Brand",["ASUS","HP","Lenovo","Dell","Acer","MSI"]],["Accessories",["Laptop Bag","Cooling Pad","Laptop Stand","Adapter"]]],br:["ASUS","HP","Lenovo","Dell","Acer"]},
  monitor:{g:[["By Use",["Gaming Monitor","Portable Monitor","Office Monitor","Curved Monitor"]],["By Size",['24 inch','27 inch','32 inch','34 inch Ultrawide','49 inch Super Ultrawide']],["By Refresh Rate",["75Hz","144Hz","165Hz","180Hz+"]]],br:["Xiaomi","AOC","Titan Army","Arzopa","ViewSonic"]},
  components:{g:[["Core",["Processor","Motherboard","RAM","Graphics Card"]],["Storage",["SSD","NVMe SSD","Hard Disk","Portable SSD"]],["Power & Cooling",["Power Supply","CPU Cooler","Casing","Casing Fan"]]],br:["AMD","Intel","ASUS","MSI","Corsair"]},
  tablet:{g:[["Tablets",["Android Tablet","iPad","Kids Tablet"]],["Creative",["Graphics Tablet","Pen Display","Stylus"]],["Accessories",["Tablet Cover","Keyboard Case"]]],br:["Teclast","XP-Pen","Huion","Samsung"]},
  accessories:{g:[["Input",["Keyboard","Mouse","Combo","Mouse Pad"]],["Audio",["Headphone","Speaker","Microphone"]],["Others",["Webcam","USB Hub","Cable & Converter"]]],br:["MageGee","Furycube","MCHOSE","Logitech","Fantech"]},
  gaming:{g:[["Gaming Gear",["Gaming Keyboard","Gaming Mouse","Gaming Headset"]],["Simulation",["Racing Wheel","Gamepad","Flight Stick"]],["Setup",["Gaming Chair","Gaming Desk","RGB Lighting"]]],br:["Logitech","PXN","Redragon","Fantech"]},
  cameras:{g:[["Cameras",["Action Camera","DSLR","Mirrorless"]],["Stabilizers",["Gimbal","Tripod"]],["Streaming",["Webcam","Capture Card","Ring Light"]]],br:["DJI","Insta360","GoPro","Zhiyun"]},
  gadget:{g:[["Wearables",["Smart Watch","Fitness Band"]],["Audio",["Earbuds","Neckband","Bluetooth Speaker"]],["Power",["Power Bank","Charger","Cable"]]],br:["Xiaomi","Anker","Baseus","QCY"]},
  office:{g:[["Print & Scan",["Printer","Scanner","Toner & Ink"]],["Power",["UPS","Voltage Stabilizer"]],["Others",["Paper Shredder","Barcode Scanner","POS Printer"]]],br:["HP","Canon","Epson","Brother"]},
  networking:{g:[["Wireless",["Router","Access Point","Range Extender","WiFi Adapter"]],["Wired",["Network Switch","LAN Cable","Patch Panel"]],["Security",["IP Camera","NVR"]]],br:["TP-Link","Tenda","Mercusys","D-Link"]},
  projector:{g:[["By Type",["Portable Projector","Smart Projector","Outdoor Projector","Business Projector"]],["Accessories",["Projector Screen","Projector Stand","Ceiling Mount"]]],br:["Wanbo","Magcubic","Cheerlux","Xiaomi"]},
  tv:{g:[["Smart TV",["Android TV","Google TV","4K UHD TV"]],["By Size",["32 inch","43 inch","55 inch","65 inch"]],["Accessories",["TV Wall Mount","Streaming Box"]]],br:["Xiaomi","Samsung","Sony","Walton"]}
};
/* link a sub-item to a search only when the demo data actually has a match */
function megaLink(k, term){
  const words = term.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const hit = Object.values(P).some(x => x.c === k && words.every(w => (x.n + " " + x.b).toLowerCase().includes(w)));
  return "category.html?c=" + k + (hit ? "&q=" + encodeURIComponent(term) : "");
}
function megaPanel(k, ic, name){
  const m = MEGA[k]; if (!m) return "";
  const off = id => (P[id].o - P[id].p) / P[id].o;
  const ids = Object.keys(P).filter(id => P[id].c === k).sort((a, b) => off(b) - off(a));
  const top = ids[0] && P[ids[0]];
  const feat = top
    ? `<a href="product.html?id=${ids[0]}" class="mg-feat"><span class="mg-badge">SAVE ${tk(top.o - top.p)}</span><span class="mg-img"><img src="img/${top.i}" alt="" loading="lazy"></span><small>${esc(top.b)}</small><b>${esc(top.n)}</b><span class="mg-price">${tk(top.p)} <s>${tk(top.o)}</s></span><span class="mg-btn">Shop Now <i class="fa-solid fa-arrow-right"></i></span></a>`
    : `<a href="category.html?c=${k}" class="mg-feat mg-promo"><span class="mg-pic"><i class="fa-solid ${ic}"></i></span><small>Explore</small><b>${name} Collection</b><span class="mg-sub">Official warranty · 0% EMI · Fast delivery</span><span class="mg-btn">Browse All <i class="fa-solid fa-arrow-right"></i></span></a>`;
  return `<div class="mega-panel"><div class="mg-in">
    <div class="mg-cols">${m.g.map(([h, items]) => `<div class="mg-col"><h6>${h}</h6>${items.map(t => `<a href="${megaLink(k, t)}">${t}</a>`).join("")}</div>`).join("")}</div>
    <div class="mg-side">
      <div class="mg-brands"><h6>Top Brands</h6><div>${m.br.map(b => `<a href="category.html?q=${encodeURIComponent(b)}">${b}</a>`).join("")}</div></div>
      <a href="category.html?c=${k}" class="mg-all">View all ${name} <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    ${feat}
  </div></div>`;
}

/* ---------- Branches (from techstore-demo footer) ---------- */
const BRANCHES = [
  {name:"Main Branch", icon:"fa-store", addr:"Shop 12, Level-2, Demo Tower, Road 1, Dhaka-1200",
   open:11, close:20, off:2, rows:[["fa-phone","Hotline","01000000002, 01000000003, 01000000004, 01000-000001"]], map:"Dhaka"},
  {name:"City Branch", icon:"fa-store", addr:"Shop 5, Ground Floor, Sample Plaza, Dhaka-1207",
   open:11, close:21, off:0, rows:[["fa-phone","Hotline","01000000000"]], map:"Dhaka"},
  {name:"Head Office", icon:"fa-house", addr:"Level-8, Demo Tower, Road 1, Dhaka-1200",
   open:11, close:20, off:2, rows:[["fa-phone","Contact","01000000005, 01000000006"]], map:"Dhaka"},
  {name:"Service Center & RMA", icon:"fa-gears", addr:"Level-8, Demo Tower, Road 1, Dhaka-1200",
   open:11, close:20, off:2, rows:[["fa-phone","Hotline","01000000007"],["fa-whatsapp","WhatsApp","01000000008"]], map:"Dhaka"}
];
const HOTLINES = [
  {name:"PC Component", icon:"fa-microchip", nums:["01000000002","01000000003","01000-000001"]},
  {name:"Gadget & Accessories", icon:"fa-headphones", nums:["01000000005","01000000004"]},
  {name:"Service Center", icon:"fa-screwdriver-wrench", nums:["01000000007","01000000008"]},
  {name:"Laptop", icon:"fa-laptop", nums:["01000000009"]}
];
const hotlineCard = h => `<div class="hl-card"><span class="hl-ic"><i class="fa-solid ${h.icon}"></i></span><div><h6>${h.name}</h6><p>${h.nums.map(n => `<a href="tel:${n.replace(/D/g, "")}">${n}</a>`).join(", ")}</p></div></div>`;
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const hr12 = h => (h % 12 || 12) + ":00" + (h < 12 ? "AM" : "PM");
function branchStatus(b, d = new Date()){
  const day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  if (day === b.off) return {open:false, text:"Closed today (" + DAYS[b.off] + ")"};
  if (h >= b.open && h < b.close) return {open:true, text:"Open now · till " + hr12(b.close)};
  return {open:false, text: h < b.open ? "Opens at " + hr12(b.open) : "Closed · opens " + (((day + 1) % 7) === b.off ? "day after tomorrow" : "tomorrow") + " " + hr12(b.open)};
}
const telLinks = str => str.split(",").map(n => n.trim()).map(n => `<a href="tel:${n.replace(/D/g, "")}">${n}</a>`).join(", ");
function branchCard(b){
  const st = branchStatus(b);
  return `<div class="branch-card">
    <div class="bc-h"><h4><i class="fa-solid ${b.icon}"></i>${b.name}</h4><span class="fopen ${st.open ? "on" : ""}">${st.open ? "Open" : "Closed"}</span></div>
    <p class="bc-addr"><i class="fa-solid fa-location-dot"></i><span>${b.addr}</span></p>
    <p><i class="fa-regular fa-clock"></i><span><b>Business Hour:</b> ${hr12(b.open)} to ${hr12(b.close)}</span></p>
    ${b.rows.map(([ic, l, v]) => `<p><i class="${ic === "fa-whatsapp" ? "fa-brands" : "fa-solid"} ${ic}"></i><span><b>${l}:</b> ${ic === "fa-whatsapp" ? `<a href="https://wa.me/88${v.replace(/D/g, "")}" target="_blank" rel="noopener">${v}</a>` : telLinks(v)}</span></p>`).join("")}
    <p><i class="fa-regular fa-calendar"></i><span><b>Weekend:</b> ${DAYS[b.off]}</span></p>
  </div>`;
}

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const tk = n => "৳" + Number(n).toLocaleString("en-IN");
const qp = k => new URLSearchParams(location.search).get(k);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store = {
  get(k, d){ try { return JSON.parse(localStorage.getItem("pch_" + k)) ?? d; } catch { return d; } },
  set(k, v){ try { localStorage.setItem("pch_" + k, JSON.stringify(v)); } catch {} }
};

/* ---------- Cart / wishlist / compare ---------- */
const getCart = () => store.get("cart", {});
function addCart(id, qty = 1, go = false){
  const c = getCart(); c[id] = (c[id] || 0) + qty; store.set("cart", c);
  updateCounts();
  if (!go && !onCartPage()) { openMiniCart(); toast("Product added to cart"); } else toast("Product added to cart");
  if (go) setTimeout(() => location.href = "checkout.html", 350);
}
function setQty(id, qty){ const c = getCart(); if (qty <= 0) delete c[id]; else c[id] = qty; store.set("cart", c); updateCounts(); }
const cartCount = () => Object.values(getCart()).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(getCart()).reduce((s, [id, q]) => s + (P[id]?.p || 0) * q, 0);

function toggleList(key, id, label){
  let l = store.get(key, []); id = +id;
  if (l.includes(id)) { l = l.filter(x => x !== id); toast("Removed from " + label); }
  else {
    if (key === "compare" && l.length >= 4) { toast("You can compare up to 4 products"); return; }
    l.push(id); toast("Added to " + label);
  }
  store.set(key, l); updateCounts(); markTools();
}
const toggleWish = id => toggleList("wish", id, "wishlist");
const toggleCompare = id => toggleList("compare", id, "compare");

function updateCounts(){
  const c = $("#cartCount"), w = $("#wishCount"), m = $("#cmpCount");
  if (c) c.textContent = cartCount();
  const bb = $("#bbCount"); if (bb) { bb.textContent = cartCount(); bb.style.display = cartCount() ? "" : "none"; }
  if (w) w.textContent = store.get("wish", []).length;
  if (m) { const n = store.get("compare", []).length; m.textContent = n; m.parentElement.style.display = n ? "" : "none"; }
}
function markTools(){
  const w = store.get("wish", []), cm = store.get("compare", []);
  $$("[data-wish]").forEach(b => b.classList.toggle("on", w.includes(+b.dataset.wish)));
  $$("[data-cmp]").forEach(b => b.classList.toggle("on", cm.includes(+b.dataset.cmp)));
}

/* ---------- Mock rating (same formula as category/product pages) ---------- */
const pchRate = id => [4.8,4.6,5.0,4.7,4.9,4.4,4.8][id % 7];
const pchReviews = id => 6 + (id * 37) % 58;
const pchStars = r => Array.from({length:5}, (_, k) => r >= k + 1 ? '<i class="fa-solid fa-star"></i>' : r >= k + .5 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '<i class="fa-regular fa-star"></i>').join("");

/* ---------- Mock stock (shared by all pages) ----------
   pre: pre-order item (same ids category/product pages use), left: units in stock */
function pchStock(id){
  id = +id;
  if (id % 9 === 0) return {pre:true, left:0, low:false, text:"Pre-Order"};
  const left = [12, 3, 25, 8, 2, 40, 5][id % 7];
  return {pre:false, left, low:left <= 5, text: left <= 5 ? "Only " + left + " left" : "In Stock"};
}

/* ---------- Product card ---------- */
function card(id, tag){
  const x = P[id], save = x.o - x.p, st = pchStock(id);
  return `<article class="card">
    <div class="badges">${save > 0 ? `<span class="save">SAVE ${tk(save)}</span>` : ""}${tag ? `<span class="tag">${tag}</span>` : ""}</div>
    <div class="tools">
      <button aria-label="Wishlist" data-wish="${id}" onclick="toggleWish(${id})"><i class="fa-regular fa-heart"></i></button>
      <button aria-label="Compare" data-cmp="${id}" onclick="toggleCompare(${id})"><i class="fa-solid fa-code-compare"></i></button>
      <button aria-label="Quick view" onclick="quickView(${id})"><i class="fa-regular fa-eye"></i></button>
    </div>
    <a href="product.html?id=${id}" class="thumb${x.i2 ? " has2" : ""}"><img src="img/${x.i}" class="im1" alt="${esc(x.n)}" loading="lazy">${x.i2 ? `<img src="img/${x.i2}" class="im2" alt="" loading="lazy">` : ""}</a>
    <span class="brand">${x.b}</span>
    <h4><a href="product.html?id=${id}">${esc(x.n)}</a></h4>
    <div class="rating">${pchStars(pchRate(id))}<span>${pchRate(id).toFixed(1)} (${pchReviews(id)})</span></div>
    <div class="price"><b>${tk(x.p)}</b>${x.o > x.p ? `<s>${tk(x.o)}</s>` : ""}</div>
    <div class="stock${st.pre ? " pre" : st.low ? " low" : ""}">${st.text}</div>
    <div class="cta"><button class="buy" onclick="addCart(${id},1,true)">${st.pre ? "Pre-Order" : "Buy Now"}</button><button class="cartb" aria-label="Add to cart" onclick="addCart(${id})"><i class="fa-solid fa-cart-plus"></i></button></div>
  </article>`;
}
function fill(el, ids, tags = {}){
  const t = typeof el === "string" ? document.getElementById(el) : el;
  if (t) { t.innerHTML = ids.map(i => card(i, tags[i])).join(""); markTools(); }
}

/* ---------- Header / footer ---------- */
function renderHeader(){
  const active = document.body.dataset.cat || "";
  const h = $("#site-header"); if (!h) return;
  h.outerHTML = `
  <div class="topbar"><div class="wrap">
    <div class="l"><span class="since">DESIGN DEMO</span><span><i class="fa-solid fa-phone"></i>01000000000</span><span><i class="fa-solid fa-location-dot"></i>Demo Tower, Dhaka</span></div>
    <div class="r"><a href="contact.html"><i class="fa-solid fa-location-dot"></i>Store Locator</a><a href="track-order.html"><i class="fa-solid fa-truck-fast"></i>Track Order</a><a href="offers.html"><i class="fa-solid fa-tags"></i>Offers</a><a href="flash-sale.html" class="tb-flash"><i class="fa-solid fa-bolt"></i>Flash Sale</a><a href="rewards.html"><i class="fa-solid fa-gift"></i>Rewards</a><button type="button" class="lang-btn no-i18n" onclick="toggleLang()">বাংলা</button><button type="button" class="theme-btn" onclick="toggleTheme()" aria-label="Toggle dark mode"><i class="fa-solid fa-moon"></i></button></div>
  </div></div>
  <header class="main">
    <div class="wrap hdr">
      <button class="menu-btn" aria-label="Menu" onclick="$('.mobile-menu').classList.add('open')"><i class="fa-solid fa-bars"></i></button>
      <a href="index.html" class="logo"><img src="img/logo.svg" alt="TechStore BD"></a>
      <form class="search" action="category.html">
        
        <input type="text" name="q" placeholder="Search for laptops, monitors, keyboards..." value="${esc(qp("q") || "")}">
        <button type="button" class="mic" id="micBtn" aria-label="Voice search" title="Voice search" hidden><i class="fa-solid fa-microphone"></i></button>
        <button><i class="fa-solid fa-magnifying-glass"></i> <span>Search</span></button>
      </form>
      <div class="actions">
        <a href="pc-builder.html" class="act"><i class="fa-solid fa-desktop"></i><div><small>Build your</small><b>PC Builder</b></div></a>
        <a href="compare.html" class="act" style="display:none"><i class="fa-solid fa-code-compare"></i><span class="count" id="cmpCount">0</span><div><small>Products</small><b>Compare</b></div></a>
        <a href="wishlist.html" class="act"><i class="fa-regular fa-heart"></i><span class="count" id="wishCount">0</span><div><small>Saved</small><b>Wishlist</b></div></a>
        <a href="cart.html" class="act"><i class="fa-solid fa-bag-shopping"></i><span class="count" id="cartCount">0</span><div><small>My</small><b>Cart</b></div></a>
        <a href="${store.get("user", null) ? "account.html" : "login.html"}" class="act"><i class="fa-regular fa-user"></i><div><small>${store.get("user", null) ? "Hello" : "Sign in"}</small><b>Account</b></div></a>
      </div>
    </div>
    <nav class="cats"><div class="wrap navwrap">
      <ul id="navList">
        ${NAV.map(([k, ic, n]) => `<li class="has-mega"><a href="category.html?c=${k}" class="${k === active ? "on" : ""}"><i class="fa-solid ${ic}"></i>${n}<i class="fa-solid fa-chevron-down mcv"></i></a>${megaPanel(k, ic, n)}</li>`).join("")}
      </ul>
      <div class="dd" id="moreDd" hidden>
        <button type="button" class="more">More<i class="fa-solid fa-chevron-down cv"></i></button>
        <ul class="drop" id="moreList"></ul>
      </div>
    </div></nav>
  </header>
  <div class="mobile-menu" onclick="if(event.target===this)this.classList.remove('open')"><aside>
    <img src="img/logo.svg" alt="TechStore BD" style="height:34px;margin-bottom:14px">
    <a href="index.html"><i class="fa-solid fa-house"></i>Home</a>
    ${NAV.map(([k, ic, n]) => `<a href="category.html?c=${k}"><i class="fa-solid ${ic}"></i>${n}</a>`).join("")}
    <a href="pc-builder.html"><i class="fa-solid fa-screwdriver-wrench"></i>PC Builder</a>
    <a href="offers.html"><i class="fa-solid fa-tags"></i>Offers</a>
    <a href="track-order.html"><i class="fa-solid fa-truck-fast"></i>Track Order</a>
    <a href="contact.html"><i class="fa-solid fa-headset"></i>Contact</a>
  </aside></div>`;
}

/* Category bar: show what fits, move the rest into "More" */
function fitNav(){
  const list = $("#navList"), more = $("#moreList"), dd = $("#moreDd");
  if (!list) return;
  [...more.children].forEach(li => list.appendChild(li));
  dd.hidden = true;
  if (list.scrollWidth <= list.clientWidth) return;
  dd.hidden = false;
  while (list.children.length > 1 && list.scrollWidth > list.clientWidth) more.prepend(list.lastElementChild);
}
/* Voice search – browser Web Speech API (Chrome / Edge / Safari), no API key needed */
function initVoice(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition, btn = $("#micBtn");
  if (!SR || !btn) return;
  btn.hidden = false;
  document.body.insertAdjacentHTML("beforeend", `<div class="voice" id="voice"><div class="vbox">
    <button class="vclose" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <div class="vmic"><span></span><span></span><i class="fa-solid fa-microphone"></i></div>
    <h3 id="vStatus">Listening…</h3><p id="vText">Say a product name, e.g. "gaming laptop"</p>
    <div class="vlang"><button data-l="en-US" class="on">English</button><button data-l="bn-BD">বাংলা</button></div>
  </div></div>`);
  const box = $("#voice"), input = $(".search input");
  let rec, lang = store.get("vlang", "en-US"), final = "";
  $$(".vlang button").forEach(b => b.classList.toggle("on", b.dataset.l === lang));
  const close = () => { box.classList.remove("open"); try { rec && rec.abort(); } catch {} };
  const start = () => {
    final = ""; $("#vStatus").textContent = "Listening…"; $("#vText").textContent = lang === "bn-BD" ? "প্রোডাক্টের নাম বলুন" : "Say a product name, e.g. \"gaming laptop\"";
    box.classList.add("open", "live");
    try { rec && rec.abort(); } catch {}
    rec = new SR(); rec.lang = lang; rec.interimResults = true; rec.maxAlternatives = 1;
    rec.onresult = e => { const t = [...e.results].map(r => r[0].transcript).join(""); $("#vText").textContent = t; input.value = t; if (e.results[e.results.length - 1].isFinal) final = t; };
    rec.onerror = e => { box.classList.remove("live"); $("#vStatus").textContent = e.error === "not-allowed" ? "Microphone permission denied" : e.error === "no-speech" ? "Didn't catch that – tap the mic to try again" : "Voice search error: " + e.error; };
    rec.onend = () => { box.classList.remove("live"); if (final.trim()) { $("#vStatus").textContent = "Searching…"; location.href = "category.html?q=" + encodeURIComponent(final.trim()); } };
    rec.start();
  };
  btn.addEventListener("click", start);
  $(".vmic").addEventListener("click", start);
  $(".vclose").addEventListener("click", close);
  box.addEventListener("click", e => { if (e.target === box) close(); });
  $$(".vlang button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.l; store.set("vlang", lang); $$(".vlang button").forEach(x => x.classList.toggle("on", x === b)); start(); }));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}
/* Live search suggestions */
function initSuggest(){
  const form = $(".search"), input = form && form.querySelector("input[name=q]"); if (!input) return;
  form.insertAdjacentHTML("beforeend", '<div class="suggest" id="suggest"></div>');
  const box = $("#suggest"); let sel = -1;
  const close = () => { box.classList.remove("open"); sel = -1; };
  const reEsc = w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const render = () => {
    const raw = input.value.trim(), q = raw.toLowerCase(); if (q.length < 2) return close();
    const words = q.split(/\s+/);
    const items = Object.keys(P).filter(id => { const t = (P[id].n + " " + P[id].b + " " + (CATNAMES[P[id].c] || "")).toLowerCase(); return words.every(w => t.includes(w)); }).slice(0, 6);
    const re = new RegExp("(" + words.map(reEsc).join("|") + ")", "gi");
    const hl = t => esc(t).replace(re, "<mark>$1</mark>");
    box.innerHTML = items.length
      ? `<div class="sg-h">Products</div>` + items.map(id => `<a href="product.html?id=${id}" class="sg-item"><img src="img/${P[id].i}" alt=""><span><b>${hl(P[id].n)}</b><small>${CATNAMES[P[id].c] || ""} · ${esc(P[id].b)}</small></span><em>${tk(P[id].p)}</em></a>`).join("") + `<a href="category.html?q=${encodeURIComponent(raw)}" class="sg-all">See all results for “${esc(raw)}” <i class="fa-solid fa-arrow-right"></i></a>`
      : `<div class="sg-empty"><i class="fa-solid fa-magnifying-glass"></i><p>No products found for “${esc(raw)}”</p><a href="request-order.html?q=${encodeURIComponent(raw)}">Request this product</a></div>`;
    sel = -1; box.classList.add("open");
  };
  input.setAttribute("autocomplete", "off");
  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  input.addEventListener("keydown", e => {
    const links = $$(".sg-item", box); if (!box.classList.contains("open") || !links.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length; links.forEach((l, i) => l.classList.toggle("on", i === sel)); }
    else if (e.key === "Enter" && sel >= 0) { e.preventDefault(); location.href = links[sel].href; }
    else if (e.key === "Escape") close();
  });
  document.addEventListener("click", e => { if (!e.target.closest(".search")) close(); });
}
/* Compact sticky header on scroll */
function initScrollHeader(){
  const h = $("header.main"); if (!h) return;
  const on = () => h.classList.toggle("scrolled", scrollY > 140);
  addEventListener("scroll", on, {passive:true}); on();
}
function initNav(){
  fitNav();
  let t; window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(fitNav, 80); });
  if (document.fonts) document.fonts.ready.then(fitNav);
  $$(".cats .dd > button").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    const d = b.parentElement, open = !d.classList.contains("open");
    $$(".cats .dd").forEach(x => x.classList.remove("open"));
    d.classList.toggle("open", open);
  }));
  document.addEventListener("click", e => { if (!e.target.closest(".cats .dd")) $$(".cats .dd").forEach(x => x.classList.remove("open")); });
}

function renderFooter(){
  const f = $("#site-footer"); if (!f) return;
  const col = (title, links) => `<div class="fcol"><h5>${title}</h5><ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>`;
  const now = new Date();
  f.outerHTML = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="fnews">
        <div class="fnews-ic"><i class="fa-solid fa-envelope-open-text"></i></div>
        <div class="fnews-t"><h3>Get the latest deals first</h3><p>Exclusive offers, new arrivals and price drops, straight to your inbox.</p></div>
        <form onsubmit="toast('Subscribed! Thank you.');this.reset();return false"><i class="fa-regular fa-envelope"></i><input type="email" required placeholder="Enter your email address"><button>Subscribe <i class="fa-solid fa-paper-plane"></i></button></form>
      </div>

      <div class="fperks">
        <a href="policy.html?p=delivery"><i class="fa-solid fa-truck-fast"></i><p><b>Nationwide Delivery</b><span>Inside Dhaka 24–48 hrs</span></p></a>
        <a href="policy.html?p=warranty"><i class="fa-solid fa-shield-halved"></i><p><b>Official Warranty</b><span>Brand-authorised products</span></p></a>
        <a href="policy.html?p=emi"><i class="fa-solid fa-credit-card"></i><p><b>0% EMI Available</b><span>Up to 12 months</span></p></a>
        <a href="contact.html"><i class="fa-solid fa-headset"></i><p><b>Expert Support</b><span>11:00 AM – 8:00 PM</span></p></a>
      </div>

      <div class="fmain">
        <div class="fbrand">
          <a href="index.html"><img src="img/logo.svg" alt="TechStore BD"></a>
          <p>Your trusted destination in Bangladesh for desktops, laptops, monitors, components and gaming gear, with official warranty and nationwide delivery.</p>
          <a href="tel:01000000000" class="fcall"><i class="fa-solid fa-phone-volume"></i><span><small>Call us anytime</small><b>01000000000</b></span></a>
          <div class="social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://wa.me/8801000000008" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        ${col("Company", [["about.html","About Us"],["contact.html","Contact Us"],["brands.html","Brands"],["offers.html","Offers"],["blog.html","Blog"]])}
        ${col("Customer Care", [["track-order.html","Track Order"],["account.html","My Account"],["request-order.html","Request a Product"],["compare.html","Compare"],["faq.html","FAQ"]])}
        ${col("Policies", [["policy.html?p=privacy","Privacy Policy"],["policy.html?p=terms","Terms &amp; Conditions"],["policy.html?p=refund","Return &amp; Refund"],["policy.html?p=emi","EMI Policy"],["policy.html?p=warranty","Warranty Policy"],["policy.html?p=delivery","Delivery Policy"]])}
      </div>

      <div class="fhot"><h5>Department Hotlines</h5><div class="fhotlines">${HOTLINES.map(hotlineCard).join("")}</div></div>

      <div class="fbranches">${BRANCHES.map(branchCard).join("")}</div>

      <div class="fpay">
        <span class="fpay-l"><i class="fa-solid fa-lock"></i>Secure payment with</span>
        <div class="fpay-list"><span class="bk">bKash</span><span class="ng">Nagad</span><span class="rk">Rocket</span><span class="vs">VISA</span><span class="mc"><i></i><i></i>Mastercard</span><span class="ax">AMEX</span><span class="cod"><i class="fa-solid fa-money-bill-wave"></i>Cash on Delivery</span></div>
      </div>
    </div>
    <div class="fbottom"><div class="wrap">
      <span>© ${now.getFullYear()} <b>TechStore BD</b>. All rights reserved.</span>
      <nav><a href="policy.html?p=privacy">Privacy</a><a href="policy.html?p=terms">Terms</a><a href="contact.html">Sitemap</a></nav>
      <button class="ftop" onclick="scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
    </div></div>
  </footer>
  <div class="fab"><a href="https://wa.me/8801000000008" target="_blank" rel="noopener" class="wa" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a><a href="#" class="ms" aria-label="Messenger"><i class="fa-brands fa-facebook-messenger"></i></a></div>
  <div class="toast" id="toast"><i class="fa-solid fa-circle-check"></i><span></span></div>`;
}

function toast(msg){
  const t = $("#toast"); if (!t) return;
  t.querySelector("span").textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2000);
}

/* Horizontal product-row arrows: <button class="nav-arr" data-row="rowId" data-dir="1"> */
function initRowArrows(){
  $$(".nav-arr[data-row]").forEach(b => b.addEventListener("click", () => {
    const r = document.getElementById(b.dataset.row);
    r.scrollBy({left: r.clientWidth * 0.8 * +b.dataset.dir, behavior: "smooth"});
  }));
}


/* =========================================================
   Premium features: Quick View, Mini Cart, EMI calculator,
   mobile bottom bar, recently viewed
   ========================================================= */
const onCartPage = () => /(cart|checkout)\.html$/i.test(location.pathname);
function lockScroll(on){ document.documentElement.classList.toggle("no-scroll", on); }

/* ---------- Quick View ---------- */
function keyFeatures(x){
  const n = x.n, out = [], m = re => (n.match(re) || [])[0];
  const size = m(/\d{2}(\.\d)?"/); if (size) out.push("Display: " + size.replace('"', " inch"));
  const hz = m(/\d{2,3}Hz/); if (hz) out.push("Refresh rate: " + hz);
  const res = m(/\b(UWQHD|FHD|2K|4K|1080P)\b/i); if (res) out.push("Resolution: " + res);
  const cpu = m(/(Core i\d-\w+|Ryzen \d (PRO )?\w+|Celeron \w+)/); if (cpu) out.push("Processor: " + cpu);
  const gpu = m(/(RTX \d+|Arc \w+( \d+GB)?)/); if (gpu) out.push("Graphics: " + gpu);
  const ram = m(/\d+GB DDR\d/); if (ram) out.push("Memory: " + ram);
  const lm = m(/\d+ (ANSI )?Lumens/); if (lm) out.push("Brightness: " + lm);
  if (/Wireless|Tri-mode/i.test(n)) out.push("Connectivity: Wireless");
  if (/Hot-swappable|Magnetic|Rapid Trigger/i.test(n)) out.push("Switch: " + (m(/Hot-swappable|Magnetic Switch|Rapid Trigger/) || ""));
  out.push("Brand: " + x.b, "Official warranty · 100% original");
  return out.slice(0, 5);
}
function quickView(id){
  const x = P[id]; if (!x) return;
  let m = $("#qv");
  if (!m) { document.body.insertAdjacentHTML("beforeend", '<div class="qv" id="qv"><div class="qv-box"></div></div>'); m = $("#qv"); m.addEventListener("click", e => { if (e.target === m || e.target.closest(".qv-x")) closeQV(); }); }
  const save = x.o - x.p, off = Math.round(save / x.o * 100);
  $(".qv-box", m).innerHTML = `
    <button class="qv-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <div class="qv-img">${off ? `<span class="save">-${off}% OFF</span>` : ""}<img src="img/${x.i}" alt="${esc(x.n)}"></div>
    <div class="qv-info">
      <span class="brand">${esc(x.b)}</span>
      <h3>${esc(x.n)}</h3>
      <div class="rating">${pchStars(pchRate(id))}<span>${pchRate(id).toFixed(1)} (${pchReviews(id)} reviews)</span></div>
      <div class="qv-price"><b>${tk(x.p)}</b>${save > 0 ? `<s>${tk(x.o)}</s><span class="save">SAVE ${tk(save)}</span>` : ""}</div>
      <p class="qv-emi"><i class="fa-solid fa-credit-card"></i>0% EMI from <b>${tk(Math.ceil(x.p / 12))}/month</b> <button type="button" onclick="emiCalc(${id})">Calculate</button></p>
      <ul class="qv-feat">${keyFeatures(x).map(f => `<li><i class="fa-solid fa-check"></i>${esc(f)}</li>`).join("")}</ul>
      <div class="qv-buy">
        <div class="qty"><button type="button" onclick="qvQty(-1)">−</button><input id="qvQ" value="1" inputmode="numeric"><button type="button" onclick="qvQty(1)">+</button></div>
        <button class="btn dark" onclick="addCart(${id}, +$('#qvQ').value || 1); closeQV()"><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
        <button class="btn primary" onclick="addCart(${id}, +$('#qvQ').value || 1, true)"><i class="fa-solid fa-bolt"></i>Buy Now</button>
      </div>
      <div class="qv-links"><button type="button" data-wish="${id}" onclick="toggleWish(${id})"><i class="fa-regular fa-heart"></i>Wishlist</button><button type="button" data-cmp="${id}" onclick="toggleCompare(${id})"><i class="fa-solid fa-code-compare"></i>Compare</button><a href="product.html?id=${id}">View full details <i class="fa-solid fa-arrow-right"></i></a></div>
    </div>`;
  markTools(); m.classList.add("open"); lockScroll(true);
}
function qvQty(d){ const i = $("#qvQ"); i.value = Math.min(10, Math.max(1, (+i.value || 1) + d)); }
function closeQV(){ const m = $("#qv"); if (m) m.classList.remove("open"); lockScroll(false); }

/* ---------- Mini cart drawer ---------- */
function renderMiniCart(){
  const d = $("#mcart"); if (!d) return;
  const c = getCart(), ids = Object.keys(c).filter(id => P[id]), n = cartCount(), total = cartTotal();
  $(".mc-h b", d).textContent = `My Cart (${n})`;
  const inCart = new Set(ids.map(Number));
  const recs = [8, 9, 6, 7, 20, 2].filter(id => !inCart.has(id)).slice(0, 3);
  $(".mc-body", d).innerHTML = ids.length ? ids.map(id => { const x = P[id]; return `
    <div class="mc-item">
      <a href="product.html?id=${id}" class="mc-img"><img src="img/${x.i}" alt=""></a>
      <div class="mc-info"><a href="product.html?id=${id}">${esc(x.n)}</a><b>${tk(x.p)}</b>
        <div class="qty sm"><button onclick="setQty(${id}, ${c[id] - 1}); renderMiniCart()">−</button><input value="${c[id]}" readonly><button onclick="setQty(${id}, ${c[id] + 1}); renderMiniCart()">+</button></div>
      </div>
      <button class="mc-rm" aria-label="Remove" onclick="setQty(${id}, 0); renderMiniCart()"><i class="fa-regular fa-trash-can"></i></button>
    </div>`; }).join("") + `<div class="mc-recs"><h6>You may also need</h6>${recs.map(id => `<div class="mc-rec"><img src="img/${P[id].i}" alt=""><span><a href="product.html?id=${id}">${esc(P[id].n)}</a><b>${tk(P[id].p)}</b></span><button aria-label="Add" onclick="addCart(${id})"><i class="fa-solid fa-plus"></i></button></div>`).join("")}</div>`
    : `<div class="mc-empty"><i class="fa-solid fa-bag-shopping"></i><h4>Your cart is empty</h4><p>Looks like you haven't added anything yet.</p><a href="category.html" class="btn primary">Start Shopping</a></div>`;
  $(".mc-foot", d).style.display = ids.length ? "" : "none";
  $(".mc-total", d).textContent = tk(total);
  const save = ids.reduce((s, id) => s + (P[id].o - P[id].p) * c[id], 0);
  $(".mc-save", d).textContent = save > 0 ? `You're saving ${tk(save)} on this order` : "";
}
function openMiniCart(){
  let d = $("#mcart");
  if (!d) {
    document.body.insertAdjacentHTML("beforeend", `<div class="mcart" id="mcart"><aside>
      <div class="mc-h"><span><i class="fa-solid fa-bag-shopping"></i><b>My Cart</b></span><button class="mc-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div>
      <div class="mc-body"></div>
      <div class="mc-foot"><p class="mc-save"></p><div class="mc-sub"><span>Subtotal</span><b class="mc-total"></b></div><small>Delivery charge calculated at checkout</small>
        <div class="mc-btns"><a href="cart.html" class="btn ghost">View Cart</a><a href="checkout.html" class="btn primary">Checkout <i class="fa-solid fa-arrow-right"></i></a></div></div>
    </aside></div>`);
    d = $("#mcart");
    d.addEventListener("click", e => { if (e.target === d || e.target.closest(".mc-x")) closeMiniCart(); });
  }
  renderMiniCart(); d.classList.add("open"); lockScroll(true);
}
function closeMiniCart(){ const d = $("#mcart"); if (d) d.classList.remove("open"); lockScroll(false); }

/* ---------- EMI calculator ---------- */
const EMI_BANKS = ["City Bank (AMEX)", "BRAC Bank", "Eastern Bank (EBL)", "Dutch-Bangla Bank", "Standard Chartered", "Prime Bank", "Mutual Trust Bank", "Bank Asia"];
function emiCalc(id){
  const x = P[id]; if (!x) return;
  let m = $("#emi");
  if (!m) { document.body.insertAdjacentHTML("beforeend", '<div class="qv emi-m" id="emi"><div class="qv-box emi-box"></div></div>'); m = $("#emi"); m.addEventListener("click", e => { if (e.target === m || e.target.closest(".qv-x")) { m.classList.remove("open"); if (!$("#qv.open")) lockScroll(false); } }); }
  $(".emi-box", m).innerHTML = `
    <button class="qv-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <div class="emi-h"><i class="fa-solid fa-calculator"></i><div><h3>EMI Calculator</h3><p>${esc(x.n)}</p></div></div>
    <div class="field"><label>Select your bank</label><select id="emiBank">${EMI_BANKS.map(b => `<option>${b}</option>`).join("")}</select></div>
    <label class="emi-l">Choose tenure</label>
    <div class="emi-t" id="emiT">${[3, 6, 9, 12].map(t => `<button type="button" data-t="${t}" class="${t === 12 ? "on" : ""}"><b>${t} months</b><span>${tk(Math.ceil(x.p / t))}/mo</span></button>`).join("")}</div>
    <div class="emi-r" id="emiR"></div>
    <p class="emi-note"><i class="fa-solid fa-circle-info"></i>Sample rates for this design. 0% interest; the bank may charge a processing fee. Credit card required.</p>`;
  const show = t => { $$("#emiT button").forEach(b => b.classList.toggle("on", +b.dataset.t === t)); const mo = Math.ceil(x.p / t);
    $("#emiR").innerHTML = `<div><span>Monthly installment</span><b>${tk(mo)}</b></div><div><span>Product price</span><b>${tk(x.p)}</b></div><div><span>Interest</span><b class="g">৳0 (0%)</b></div><div><span>Total payable</span><b>${tk(x.p)}</b></div>`; };
  $("#emiT").addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(+b.dataset.t); });
  show(12); m.classList.add("open"); lockScroll(true);
}

/* ---------- Mobile bottom bar ---------- */
function renderBottomBar(){
  const page = location.pathname.split("/").pop() || "index.html";
  const on = p => page === p ? "on" : "";
  document.body.insertAdjacentHTML("beforeend", `<nav class="bbar">
    <a href="index.html" class="${on("index.html")}"><i class="fa-solid fa-house"></i><span>Home</span></a>
    <button type="button" onclick="$('.mobile-menu').classList.add('open')"><i class="fa-solid fa-grip"></i><span>Categories</span></button>
    <button type="button" onclick="scrollTo({top:0,behavior:'smooth'});setTimeout(()=>$('.search input').focus(),250)"><i class="fa-solid fa-magnifying-glass"></i><span>Search</span></button>
    <button type="button" class="${on("cart.html")}" onclick="onCartPage() ? location.href='cart.html' : openMiniCart()"><i class="fa-solid fa-bag-shopping"></i><em id="bbCount">0</em><span>Cart</span></button>
    <a href="${store.get("user", null) ? "account.html" : "login.html"}" class="${on("account.html") || on("login.html")}"><i class="fa-regular fa-user"></i><span>Account</span></a>
  </nav>`);
}

/* ---------- Recently viewed (any page with #r-recent-home) ---------- */
function renderRecentHome(){
  const box = $("#recentHome"); if (!box) return;
  const ids = store.get("recent", []).map(Number).filter(k => P[k]).slice(0, 10);
  if (!ids.length) return;
  box.hidden = false; fill("r-recent-home", ids);
}

function initFeatures(){
  renderBottomBar();
  const cl = $('a.act[href="cart.html"]');
  if (cl) cl.addEventListener("click", e => { if (onCartPage()) return; e.preventDefault(); openMiniCart(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeQV(); closeMiniCart(); const em = $("#emi"); if (em) em.classList.remove("open"); } });
  updateCounts();
}

/* =========================================================
   Global extras: theme, language, live chat, social proof,
   scroll reveal, image skeletons, first-order popup
   ========================================================= */

/* ---------- Dark mode ---------- */
function applyTheme(t){
  document.documentElement.dataset.theme = t;
  $$(".theme-btn i").forEach(i => i.className = t === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon");
}
function toggleTheme(){ const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; store.set("theme", t); applyTheme(t); }

/* ---------- Bangla / English (shared UI strings) ---------- */
const BN = {
  "Store Locator":"স্টোর লোকেটর","Track Order":"অর্ডার ট্র্যাক","Offers":"অফার","Flash Sale":"ফ্ল্যাশ সেল","Rewards":"রিওয়ার্ডস",
  "Build your":"তৈরি করুন","PC Builder":"পিসি বিল্ডার","Saved":"সংরক্ষিত","Wishlist":"উইশলিস্ট","My":"আমার","Cart":"কার্ট","Sign in":"সাইন ইন","Hello":"হ্যালো","Account":"অ্যাকাউন্ট",
  "Search":"খুঁজুন","Desktop":"ডেস্কটপ","Laptops":"ল্যাপটপ","Monitor":"মনিটর","Components":"কম্পোনেন্ট","Tablet":"ট্যাবলেট","Accessories":"এক্সেসরিজ","Gaming":"গেমিং",
  "Cameras":"ক্যামেরা","Gadget":"গ্যাজেট","Office Equipment":"অফিস ইকুইপমেন্ট","Networking":"নেটওয়ার্কিং","Projector":"প্রজেক্টর","TV":"টিভি","More":"আরও","Home":"হোম","Categories":"ক্যাটাগরি","Contact":"যোগাযোগ",
  "Buy Now":"এখনই কিনুন","In Stock":"স্টকে আছে","Pre-Order":"প্রি-অর্ডার","Show All":"সব দেখুন","View All":"সব দেখুন","Shop Now":"এখনই কিনুন","Explore":"দেখুন",
  "Featured Categories":"জনপ্রিয় ক্যাটাগরি","Exclusive Deals":"এক্সক্লুসিভ ডিল","Top Selling":"সর্বাধিক বিক্রিত","New Arrival":"নতুন এসেছে","Gaming Mania":"গেমিং ম্যানিয়া",
  "Ready-to-Go Desktop PC":"রেডি ডেস্কটপ পিসি","Shop By Brands":"ব্র্যান্ড অনুযায়ী","Recently Viewed":"সম্প্রতি দেখা","Ends in":"শেষ হবে",
  "Hrs":"ঘণ্টা","Min":"মিনিট","Sec":"সেকেন্ড","Desktop PC":"ডেস্কটপ পিসি","Monitors":"মনিটর",
  "100% Original":"১০০% অরিজিনাল","Official products":"অফিসিয়াল পণ্য","0% EMI":"০% ইএমআই","Up to 12 months":"১২ মাস পর্যন্ত","Fast Delivery":"দ্রুত ডেলিভারি",
  "All over Bangladesh":"সারা বাংলাদেশে","Official Warranty":"অফিসিয়াল ওয়ারেন্টি","Hassle-free claim":"ঝামেলাহীন ক্লেইম","Easy Exchange":"সহজ এক্সচেঞ্জ","7-day policy":"৭ দিনের নীতি",
  "Secure Payment":"নিরাপদ পেমেন্ট","Company":"কোম্পানি","Customer Care":"কাস্টমার কেয়ার","Policies":"নীতিমালা","About Us":"আমাদের সম্পর্কে","Contact Us":"যোগাযোগ করুন",
  "Brands":"ব্র্যান্ড","Blog":"ব্লগ","My Account":"আমার অ্যাকাউন্ট","Request a Product":"পণ্যের অনুরোধ","Compare":"তুলনা","FAQ":"প্রশ্নোত্তর",
  "Privacy Policy":"গোপনীয়তা নীতি","Terms & Conditions":"শর্তাবলি","Return & Refund":"রিটার্ন ও রিফান্ড","EMI Policy":"ইএমআই নীতি","Warranty Policy":"ওয়ারেন্টি নীতি","Delivery Policy":"ডেলিভারি নীতি",
  "Department Hotlines":"বিভাগীয় হটলাইন","Get the latest deals first":"সবার আগে সেরা অফার পান","Subscribe":"সাবস্ক্রাইব","Call us anytime":"যেকোনো সময় কল করুন",
  "Nationwide Delivery":"সারা দেশে ডেলিভারি","0% EMI Available":"০% ইএমআই সুবিধা","Expert Support":"বিশেষজ্ঞ সহায়তা","Secure payment with":"নিরাপদ পেমেন্ট",
  "Business Hour:":"ব্যবসার সময়:","Hotline:":"হটলাইন:","Weekend:":"সাপ্তাহিক ছুটি:","Contact:":"যোগাযোগ:","Open":"খোলা","Closed":"বন্ধ",
  "My Cart":"আমার কার্ট","Subtotal":"সাবটোটাল","View Cart":"কার্ট দেখুন","Checkout":"চেকআউট","You may also need":"আরও লাগতে পারে","Your cart is empty":"আপনার কার্ট খালি","Start Shopping":"কেনাকাটা শুরু করুন",
  "Add to Cart":"কার্টে যোগ করুন","Wishlist ":"উইশলিস্ট","View full details":"বিস্তারিত দেখুন","Calculate":"হিসাব করুন",
  "Live Chat":"লাইভ চ্যাট","Typically replies in a few minutes":"সাধারণত কয়েক মিনিটে উত্তর দেয়","Continue on WhatsApp":"হোয়াটসঅ্যাপে কথা বলুন"
};
const i18nOrig = new WeakMap();
function translateNode(root, lang){
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n => n.nodeValue.trim() && !n.parentElement.closest("script,style,input,textarea,.no-i18n") ? 1 : 2});
  let n; while ((n = walk.nextNode())) {
    const orig = i18nOrig.has(n) ? i18nOrig.get(n) : n.nodeValue, key = orig.trim();
    if (lang === "bn" && BN[key]) { if (!i18nOrig.has(n)) i18nOrig.set(n, orig); n.nodeValue = orig.replace(key, BN[key]); }
    else if (lang === "en" && i18nOrig.has(n)) { n.nodeValue = i18nOrig.get(n); i18nOrig.delete(n); }
  }
  if (root.querySelectorAll) root.querySelectorAll("input[placeholder]").forEach(i => {
    if (!i.dataset.ph) i.dataset.ph = i.placeholder;
    i.placeholder = lang === "bn" && i.closest(".search") ? "ল্যাপটপ, মনিটর, কিবোর্ড খুঁজুন..." : i.dataset.ph;
  });
}
let langObs;
function applyLang(lang){
  document.documentElement.lang = lang === "bn" ? "bn" : "en";
  $$(".lang-btn").forEach(b => b.textContent = lang === "bn" ? "English" : "বাংলা");
  translateNode(document.body, lang);
  if (langObs) langObs.disconnect();
  if (lang === "bn") { langObs = new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(nd => nd.nodeType === 1 ? translateNode(nd, "bn") : 0))); langObs.observe(document.body, {childList:true, subtree:true}); }
}
function toggleLang(){ const l = document.documentElement.lang === "bn" ? "en" : "bn"; store.set("lang", l); applyLang(l); }

/* ---------- Live chat ---------- */
const CHAT_REPLIES = [
  ["delivery", "Inside Dhaka delivery takes 24–48 hours (৳60). Outside Dhaka 2–5 days (৳120). Store pickup is free."],
  ["emi", "0% EMI is available for up to 12 months on eligible credit cards. Use the EMI Calculator on any product page."],
  ["warranty", "All products carry official brand warranty. Claims are handled at our Service Center, Level-14, Demo Tower (01000000007)."],
  ["track", "You can track your order from the Track Order page using your order ID and phone number."],
  ["pc build", "Try our PC Builder to pick parts with a compatibility check — our team will call to confirm the build."],
  ["price", "Prices on the website are updated daily. For bulk or corporate quotes call 01000000000."]
];
function chatContext(){
  const id = /product\.html/.test(location.pathname) ? +qp("id") || 16 : 0;
  return id && P[id] ? `I'm interested in: ${P[id].n} (${tk(P[id].p)}) – ${location.href}` : "Hi TechStore, I need help.";
}
function openChat(){
  let c = $("#chat");
  if (!c) {
    document.body.insertAdjacentHTML("beforeend", `<div class="chat" id="chat">
      <div class="ch-h"><span class="ch-av"><img src="img/logo.svg" alt=""></span><div><b>TechStore Support</b><small><i></i>Typically replies in a few minutes</small></div><button class="ch-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div>
      <div class="ch-body" id="chBody"></div>
      <div class="ch-quick" id="chQuick">${["Delivery time", "EMI options", "Warranty claim", "Track order", "PC build help"].map(q => `<button type="button">${q}</button>`).join("")}</div>
      <form class="ch-in" id="chForm"><input placeholder="Type your message..." aria-label="Message"><button aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button></form>
      <a class="ch-wa" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>Continue on WhatsApp</a>
    </div>`);
    c = $("#chat");
    const body = $("#chBody");
    const add = (who, html) => { body.insertAdjacentHTML("beforeend", `<div class="ch-msg ${who}"><p>${html}</p><span>${new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}</span></div>`); body.scrollTop = body.scrollHeight; };
    const answer = q => {
      body.insertAdjacentHTML("beforeend", '<div class="ch-msg bot typing"><p><i></i><i></i><i></i></p></div>'); body.scrollTop = body.scrollHeight;
      setTimeout(() => { $(".typing", body)?.remove(); const hit = CHAT_REPLIES.find(([k]) => q.toLowerCase().includes(k.split(" ")[0])); add("bot", hit ? hit[1] : "Thanks! A team member will reply shortly. For a faster answer, continue on WhatsApp below or call 01000000000."); }, 900);
    };
    add("bot", "Hi 👋 Welcome to TechStore BD! How can we help you today?");
    $("#chQuick").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; add("me", esc(b.textContent)); answer(b.textContent); });
    $("#chForm").addEventListener("submit", e => { e.preventDefault(); const i = e.target.querySelector("input"), v = i.value.trim(); if (!v) return; add("me", esc(v)); i.value = ""; answer(v); });
    $(".ch-x", c).addEventListener("click", () => c.classList.remove("open"));
  }
  $(".ch-wa", c).href = "https://wa.me/8801000000008?text=" + encodeURIComponent(chatContext());
  c.classList.toggle("open");
  if (c.classList.contains("open")) setTimeout(() => $("#chForm input").focus(), 200);
}

/* ---------- Social proof ("someone just bought") ---------- */
function initSocialProof(){
  if (!/(index|category|product)\.html$|\/$/.test(location.pathname) || store.get("noProof", false)) return;
  const areas = ["Mirpur, Dhaka", "Dhanmondi, Dhaka", "Uttara, Dhaka", "Chattogram", "Sylhet", "Gulshan, Dhaka", "Khulna", "Rajshahi", "Mohammadpur, Dhaka", "Gazipur"];
  const ids = Object.keys(P).map(Number);
  document.body.insertAdjacentHTML("beforeend", '<div class="sproof" id="sproof"></div>');
  const box = $("#sproof"); let k = Math.floor(Math.random() * 10);
  const show = () => {
    k++;
    const html = k % 4 === 0
      ? `<span class="sp-ic"><i class="fa-solid fa-fire"></i></span><div><b>${18 + (new Date().getHours() % 12) * 3} orders placed in Dhaka today</b><small>Join hundreds of happy customers</small></div>`
      : (() => { const id = ids[k % ids.length]; return `<a href="product.html?id=${id}" class="sp-img"><img src="img/${P[id].i}" alt=""></a><div><small>Someone in ${areas[k % areas.length]} purchased</small><a href="product.html?id=${id}"><b>${esc(P[id].n)}</b></a><small><i class="fa-solid fa-circle-check"></i> ${2 + (k * 7) % 50} minutes ago</small></div>`; })();
    box.innerHTML = html + '<button class="sp-x" aria-label="Hide notifications"><i class="fa-solid fa-xmark"></i></button>';
    $(".sp-x", box).onclick = () => { box.classList.remove("show"); store.set("noProof", true); clearInterval(t); };
    box.classList.add("show"); setTimeout(() => box.classList.remove("show"), 6000);
  };
  setTimeout(show, 9000); const t = setInterval(show, 28000);
}

/* ---------- Scroll reveal ---------- */
function initReveal(){
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {rootMargin:"0px 0px -40px 0px"});
  const watch = root => $$("main section, main .card, main .box, .branch-card, .hl-card", root).forEach((el, i) => {
    if (el.classList.contains("reveal") || el.closest(".qv,.mcart,#chat")) return;
    if (el.getBoundingClientRect().top < innerHeight) return;            // already on screen: no animation
    el.classList.add("reveal"); el.style.transitionDelay = (el.classList.contains("card") ? (i % 5) * 60 : 0) + "ms"; io.observe(el);
  });
  watch(document);
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && watch(n.parentElement || n)))).observe($("main") || document.body, {childList:true, subtree:true});
}

/* ---------- Image skeleton shimmer ---------- */
function initSkeletons(){
  const mark = root => $$(".thumb img, .mc-img img, .sg-item img", root).forEach(img => {
    if (img.complete && img.naturalWidth) return;
    const box = img.parentElement; box.classList.add("sk");
    const done = () => box.classList.remove("sk");
    img.addEventListener("load", done, {once:true}); img.addEventListener("error", done, {once:true});
  });
  mark(document);
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && mark(n)))).observe(document.body, {childList:true, subtree:true});
}

/* ---------- First-order popup ---------- */
function initWelcome(){
  if (!/(index\.html|\/)$/.test(location.pathname) || store.get("welcomeSeen", false) || store.get("orders", []).length) return;
  setTimeout(() => {
    if ($(".qv.open,.mcart.open")) return;
    document.body.insertAdjacentHTML("beforeend", `<div class="qv wl-m open" id="welcome"><div class="qv-box wl-box">
      <button class="qv-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <div class="wl-art"><span class="wl-pct">5%<small>OFF</small></span><img src="img/p16.png" alt=""></div>
      <div class="wl-in" id="wlIn">
        <small>WELCOME TO TECHSTORE BD</small><h3>Get 5% off your first order</h3><p>Join our list for an instant discount code, plus early access to flash sales and new arrivals.</p>
        <form id="wlForm"><input required placeholder="Phone number or email" aria-label="Phone or email"><button class="btn primary block">Get My Code</button></form>
        <button class="wl-no" type="button">No thanks</button>
      </div></div></div>`);
    lockScroll(true);
    const m = $("#welcome"), close = () => { m.remove(); lockScroll(false); store.set("welcomeSeen", true); };
    m.addEventListener("click", e => { if (e.target === m || e.target.closest(".qv-x,.wl-no")) close(); });
    $("#wlForm").addEventListener("submit", e => { e.preventDefault(); store.set("welcomeSeen", true);
      $("#wlIn").innerHTML = `<small>YOUR CODE IS READY</small><h3>Here's 5% off 🎉</h3><p>Apply this code in your cart or at checkout.</p><div class="wl-code"><b>WELCOME5</b><button class="btn dark" type="button" id="wlCopy"><i class="fa-regular fa-copy"></i>Copy</button></div><a href="category.html" class="btn primary block">Start Shopping</a>`;
      $("#wlCopy").onclick = () => { navigator.clipboard?.writeText("WELCOME5").catch(() => {}); toast("Code copied: WELCOME5"); };
    });
  }, 7000);
}

function initGlobal2(){
  applyTheme(store.get("theme", "light"));
  if (store.get("lang", "en") === "bn") applyLang("bn"); else $$(".lang-btn").forEach(b => b.textContent = "বাংলা");
  const fab = $(".fab .ms");
  if (fab) { fab.outerHTML = '<button type="button" class="chat-fab" aria-label="Live chat" onclick="openChat()"><i class="fa-solid fa-comments"></i><span class="dot"></span></button>'; }
  initSocialProof(); initReveal(); initSkeletons(); initWelcome();
}

renderHeader();
renderFooter();
initNav();
initVoice();
initSuggest();
initScrollHeader();
initFeatures();
initGlobal2();
document.addEventListener("DOMContentLoaded", () => { updateCounts(); markTools(); initRowArrows(); });
