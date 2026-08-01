const products = [
  { id:1, name:"Keychron K8 Pro QMK/VIA - RGB - Hot-Swap", category:"claviers", categoryLabel:"Claviers", price:89.9, oldPrice:119.9, badge:"Meilleure vente", image:"images/clavier-keychron-k8.png", description:"Clavier TKL sans-fil, switches Gateron, QMK/VIA, RGB, aluminium, double mode BT + 2.4GHz." },
  { id:2, name:"Razer Huntsman V3 Pro TKL 8KHz - FR - Noir", category:"claviers", categoryLabel:"Claviers", price:129.9, oldPrice:169.9, badge:"Meilleure vente", image:"images/clavier-razer-huntsman.png", description:"Switches analogiques optiques, actuation ajustable 0.1-4.0mm, Rapid Trigger, RGB Chroma." },
  { id:3, name:"Corsair K70 RGB Pro - Cherry MX - Full-Size", category:"claviers", categoryLabel:"Claviers", price:99.9, oldPrice:129.9, badge:null, image:"images/clavier-corsair-k70.png", description:"Full-size mécanique, switches Cherry MX, aluminium brossé, RGB par touche, media controls." },
  { id:4, name:"Logitech G Pro X TKL LIGHTSPEED - Noir", category:"claviers", categoryLabel:"Claviers", price:84.9, oldPrice:109.9, badge:"Promo", image:"images/clavier-logitech-gpro.png", description:"Tenkeyless pro esport, switches GX hot-swap, RGB LIGHTSYNC, design compact tournoi." },
  { id:5, name:"SteelSeries Apex Pro TKL OmniPoint - RGB", category:"claviers", categoryLabel:"Claviers", price:109.9, oldPrice:139.9, badge:"Nouveau", image:"images/clavier-steelseries.png", description:"OmniPoint 2.0 adjustable, actuation 0.2-3.8mm, OLED Smart Display, RGB PrismCaps." },
  { id:6, name:"Ducky One 3 TKL - Cherry MX Brown - PBT", category:"claviers", categoryLabel:"Claviers", price:89.9, oldPrice:119.9, badge:null, image:"images/clavier-ducky-one3.png", description:"TKL mécanique premium, switches Cherry MX, PBT doubleshot, RGB, build quality légendaire." },
  { id:7, name:"Keychron Q1 Pro 75% Wireless - Aluminium", category:"claviers", categoryLabel:"Claviers", price:104.9, oldPrice:134.9, badge:"Meilleure vente", image:"images/clavier-keychron.png", description:"75% gasket mount, QMK/VIA, aluminium CNC, wireless, switches Gateron Jupiter." },
  { id:8, name:"Wooting 60HE Hall Effect - Rapid Trigger", category:"claviers", categoryLabel:"Claviers", price:99.9, oldPrice:129.9, badge:"Nouveau", image:"images/clavier-wooting-60he.png", description:"60% Hall Effect, Rapid Trigger, Lekker switches, actuation analogique, esport compétitif." },
  { id:9, name:"HyperX Alloy Origins Core TKL - HyperX Red", category:"claviers", categoryLabel:"Claviers", price:69.9, oldPrice:94.9, badge:"Promo", image:"images/clavier-hyperx.png", description:"TKL aluminium, switches HyperX Red, RGB, structure solide, idéal gaming." },
  { id:10, name:"Razer BlackWidow V4 Pro - FR - Noir", category:"claviers", categoryLabel:"Claviers", price:119.9, oldPrice:149.9, badge:null, image:"images/clavier-razer-blackwidow.png", description:"Full-size, switches Green clicky, molette command, écran LCD, RGB Chroma, repos poignet." },
  { id:11, name:"Logitech G Pro X Superlight 2", category:"souris", categoryLabel:"Souris", price:69.90, oldPrice:99.90, badge:"Meilleure vente", image:"images/souris-logitech-gpro-superlight2.png", description:"60g, capteur Hero 2 32K DPI, LIGHTSPEED, 95h autonomie." },
  { id:12, name:"Razer Viper V3 Pro", category:"souris", categoryLabel:"Souris", price:64.90, oldPrice:89.90, badge:"Nouveau", image:"images/souris-razer-viper-v3-pro.png", description:"54g, Focus Pro 35K, HyperSpeed Wireless, 90h." },
  { id:13, name:"Logitech G502 X Plus", category:"souris", categoryLabel:"Souris", price:49.90, oldPrice:69.90, badge:null, image:"images/souris-logitech-g502x-plus.png", description:"Capteur Hero 25K, RGB LIGHTSYNC, 13 boutons, LIGHTSPEED." },
  { id:14, name:"Razer DeathAdder V3 Pro", category:"souris", categoryLabel:"Souris", price:59.90, oldPrice:84.90, badge:"Meilleure vente", image:"images/souris-razer-deathadder-v3-pro.png", description:"63g, Focus Pro 30K, HyperSpeed, forme ergo légendaire." },
  { id:15, name:"SteelSeries Aerox 5 Wireless", category:"souris", categoryLabel:"Souris", price:44.90, oldPrice:64.90, badge:"Promo", image:"images/souris-steelseries-aerox-5.png", description:"74g, 18 000 DPI, Quantum 2.0, RGB Prism, 180h." },
  { id:16, name:"Razer Basilisk V3 Pro", category:"souris", categoryLabel:"Souris", price:59.90, oldPrice:84.90, badge:null, image:"images/souris-razer-basilisk-v3-pro.png", description:"HyperScroll, Focus Pro 30K, RGB Chroma, 13 boutons programmables." },
  { id:17, name:"Logitech G305 Lightspeed", category:"souris", categoryLabel:"Souris", price:24.90, oldPrice:34.90, badge:"Promo", image:"images/souris-logitech-g305.png", description:"99g, Hero 12K, LIGHTSPEED, pile AA jusqu’à 250h." },
  { id:18, name:"Corsair M65 RGB Ultra Wireless", category:"souris", categoryLabel:"Souris", price:49.90, oldPrice:69.90, badge:null, image:"images/souris-corsair-m65.png", description:"Capteur Marksman 26K, Sniper button, aluminium, RGB." },
  { id:19, name:"HyperX Cloud III - Noir", category:"casques", categoryLabel:"Casques", price:59.90, oldPrice:79.90, badge:"Meilleure vente", image:"images/casque-hyperx-cloud-iii.png", description:"Drivers 53mm, micro détachable, confort mémoire, USB + jack 3.5mm." },
  { id:20, name:"Razer BlackShark V2 Pro - Noir", category:"casques", categoryLabel:"Casques", price:89.90, oldPrice:119.90, badge:null, image:"images/casque-razer-blackshark-v2-pro.png", description:"Wireless HyperSpeed, THX Spatial Audio, micro HyperClear Super Wideband." },
  { id:21, name:"SteelSeries Arctis Nova 7 Wireless", category:"casques", categoryLabel:"Casques", price:79.90, oldPrice:109.90, badge:"Promo", image:"images/casque-steelseries-arctis-nova-7.png", description:"2.4GHz + Bluetooth, 38h autonomie, Sonar audio, multiplateforme." },
  { id:22, name:"Logitech G Pro X 2 Lightspeed", category:"casques", categoryLabel:"Casques", price:99.90, oldPrice:139.90, badge:"Nouveau", image:"images/casque-logitech-gpro-x2.png", description:"LIGHTSPEED wireless, drivers 50mm graphène, micro BLUE VO!CE, 50h." },
  { id:23, name:"Corsair HS80 RGB Wireless", category:"casques", categoryLabel:"Casques", price:69.90, oldPrice:99.90, badge:null, image:"images/casque-corsair-hs80.png", description:"Dolby Atmos, micro omnidirectionnel, RGB, 20h autonomie, confort pro." },
  { id:24, name:"Sony INZONE H9 - Wireless ANC", category:"casques", categoryLabel:"Casques", price:94.90, oldPrice:129.90, badge:null, image:"images/casque-sony-inzone-h9.png", description:"ANC adaptatif, 360 Spatial Sound, 32h, micro boom détachable, PS5/PC." },
  { id:25, name:"Secretlab TITAN Evo 2022 - SoftWeave", category:"chaises", categoryLabel:"Chaises", price:119.90, oldPrice:159.90, badge:"Meilleure vente", image:"images/chaise-secretlab-titan-evo.png", description:"Référence pro, support lombaire 4D, accoudoirs 4D, jusqu’à 180kg." },
  { id:26, name:"Corsair T3 Rush - Gris/Noir", category:"chaises", categoryLabel:"Chaises", price:99.90, oldPrice:139.90, badge:"Promo", image:"images/chaise-corsair-t3-rush.png", description:"Tissu soft fabric, accoudoirs 4D, dossier 170°, 120kg." },
  { id:27, name:"Razer Iskur V2 - Noir", category:"chaises", categoryLabel:"Chaises", price:109.90, oldPrice:149.90, badge:"Nouveau", image:"images/chaise-razer-iskur-v2.png", description:"Support lombaire adaptatif, mémoire de forme, RGB Chroma, 136kg." },
  { id:28, name:"Noblechairs EPIC - Cuir PU Noir/Rouge", category:"chaises", categoryLabel:"Chaises", price:94.90, oldPrice:129.90, badge:null, image:"images/chaise-noblechairs-epic.png", description:"Cuir PU premium, accoudoirs 4D, coussin lombaire & nuque, inclinaison 135°, 150 kg." },
  { id:29, name:"DXRacer Formula F08-NR - Noir/Rouge", category:"chaises", categoryLabel:"Chaises", price:79.90, oldPrice:119.90, badge:"Promo", image:"images/chaise-dxracer-f08-nr.png", description:"Style racing, cuir PU, coussin lombaire & nuque, accoudoirs 3D, dossier 90-135°, jusqu’à 150 kg." },
  { id:30, name:"ASUS ROG Chariot X - Core Black", category:"chaises", categoryLabel:"Chaises", price:104.90, oldPrice:144.90, badge:null, image:"images/chaise-asus-rog-chariot-x.png", description:"RGB Aura Sync, accoudoirs 4D, tissu respirant, support lombaire, jusqu’à 150 kg." },
  { id:31, name:"Cougar Armor One - Noir", category:"chaises", categoryLabel:"Chaises", price:69.90, oldPrice:99.90, badge:"Nouveau", image:"images/chaise-cougar-armor-one.png", description:"Design racing, tissu, coussin lombaire & nuque, accoudoirs réglables, inclinaison 180°, 120 kg." },
  { id:32, name:"Tapis XXL RGB Storm", category:"setup", categoryLabel:"Setup & Déco", price:24.90, oldPrice:34.90, badge:null, image:"images/tapis-xxl-rgb-storm.png", description:"900x400, RGB, bordure cousue, surface smooth." },
  { id:33, name:"Support Casque RGB Apex", category:"setup", categoryLabel:"Setup & Déco", price:19.90, oldPrice:29.90, badge:"Promo", image:"images/support-casque-rgb-apex.png", description:"Support casque RGB, ports USB, design gaming." },
  { id:34, name:"Kit LED Strip RGB 5m", category:"setup", categoryLabel:"Setup & Déco", price:14.90, oldPrice:24.90, badge:"Promo", image:"images/kit-led-strip-rgb-5m.png", description:"LED RGB 5m, télécommande, USB, mode musique." },
  { id:35, name:"Néon LED Custom GG", category:"setup", categoryLabel:"Setup & Déco", price:29.90, oldPrice:39.90, badge:null, image:"images/neon-led-custom-gg.png", description:"Néon LED GG, rose + cyan, USB, setup gaming." },
  { id:36, name:"Bras Monitor Dual Arm", category:"setup", categoryLabel:"Setup & Déco", price:49.90, oldPrice:69.90, badge:null, image:"images/bras-monitor-dual-arm.png", description:"Double moniteur VESA, 9kg/écran, fixation bureau." },
  { id:37, name:"Hub USB-C RGB 7 ports", category:"setup", categoryLabel:"Setup & Déco", price:29.90, oldPrice:39.90, badge:"Nouveau", image:"images/hub-usb-c-rgb-7ports.png", description:"7 ports USB 3.0, RGB, alimentation externe, interrupteurs." },
  { id:38, name:"Tapis 3XL Desk Mat", category:"setup", categoryLabel:"Setup & Déco", price:29.90, oldPrice:39.90, badge:null, image:"images/tapis-3xl-desk-mat.png", description:"1200x600, smooth, antidérapant, surface cloth." },
  { id:39, name:"Lamp RGB Ambient Bar", category:"setup", categoryLabel:"Setup & Déco", price:34.90, oldPrice:49.90, badge:null, image:"images/lamp-rgb-ambient-bar.png", description:"Barres LED RGB, télécommande + app, mode musique." }
];

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

function createProductCard(product) {
  var oldPriceHtml = product.oldPrice ? '<span class="old">' + formatPrice(product.oldPrice) + '</span>' : '';
  var badgeHtml = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';
  return '<article class="product-card" data-category="' + product.category + '" data-id="' + product.id + '">' +
    '<div class="product-image">' + badgeHtml +
    '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
    '</div><div class="product-info"><p class="category">' + product.categoryLabel + '</p><h3>' + product.name + '</h3>' +
    '<div class="product-bottom"><div class="price">' + formatPrice(product.price) + oldPriceHtml + '</div>' +
    '<button class="add-btn" data-id="' + product.id + '" title="Ajouter au panier">ACHETER</button></div></div></article>';
}

function renderProducts(containerId, filterCategory, limit) {
  filterCategory = filterCategory || 'all';
  var container = document.getElementById(containerId);
  if (!container) return;
  var filtered = filterCategory === 'all' ? products : products.filter(function(p) { return p.category === filterCategory; });
  if (limit) filtered = filtered.slice(0, limit);
  container.innerHTML = filtered.map(createProductCard).join('');
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('neonforge_cart') || '[]'); } catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('neonforge_cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  var cart = getCart();
  var count = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  document.querySelectorAll('.cart-count').forEach(function(el) { el.textContent = count; });
}
function addToCart(productId) {
  var product = products.find(function(p) { return p.id === productId; });
  if (!product) return;
  var cart = getCart();
  var existing = cart.find(function(i) { return i.id === productId; });
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, categoryLabel: product.categoryLabel, qty: 1 });
  saveCart(cart);
}
