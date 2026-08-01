document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();

  if (document.getElementById('bestsellers')) {
    renderProducts('bestsellers', 'claviers', 5);
  }
  if (document.getElementById('all-products')) {
    renderProducts('all-products', 'all');
  }
  ['claviers', 'souris', 'casques', 'chaises', 'setup'].forEach(function(cat) {
    var el = document.getElementById(cat + '-products');
    if (el) renderProducts(cat + '-products', cat);
  });

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts('all-products', btn.dataset.filter);
    });
  });

  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-btn')) {
      var id = parseInt(e.target.dataset.id, 10);
      addToCart(id);
      e.target.textContent = 'AJOUTÉ ✓';
      e.target.style.background = '#22d3ee';
      e.target.style.borderColor = '#22d3ee';
      e.target.style.color = '#0a0a12';
      setTimeout(function() {
        e.target.textContent = 'ACHETER';
        e.target.style.background = '';
        e.target.style.borderColor = '';
        e.target.style.color = '';
      }, 1000);
    }
  });

  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      var isOpen = nav.style.display === 'flex';
      if (!isOpen) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'rgba(7,7,12,0.98)';
        nav.style.padding = '20px';
        nav.style.gap = '16px';
        nav.style.borderBottom = '1px solid var(--border)';
        nav.style.zIndex = '99';
      } else {
        nav.style.display = '';
        nav.style.flexDirection = '';
        nav.style.position = '';
        nav.style.top = '';
        nav.style.left = '';
        nav.style.right = '';
        nav.style.background = '';
        nav.style.padding = '';
        nav.style.gap = '';
        nav.style.borderBottom = '';
      }
    });
  }

  // Cart page
  if (document.getElementById('cart-items')) {
    renderCartPage();
  }
});

function renderCartPage() {
  var cart = getCart();
  var container = document.getElementById('cart-items');
  var summary = document.getElementById('cart-summary');
  var empty = document.getElementById('cart-empty');

  if (!cart.length) {
    if (container) container.innerHTML = '';
    if (summary) summary.style.display = 'none';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (summary) summary.style.display = 'block';

  var html = '';
  var subtotal = 0;
  cart.forEach(function(item) {
    var line = item.price * item.qty;
    subtotal += line;
    html += '<div class="cart-item" data-id="' + item.id + '">' +
      '<div class="cart-item-img"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
      '<div class="cart-item-info">' +
        '<h3>' + item.name + '</h3>' +
        '<p class="cat">' + item.categoryLabel + '</p>' +
        '<div class="cart-item-qty">' +
          '<button type="button" onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span>' + item.qty + '</span>' +
          '<button type="button" onclick="changeQty(' + item.id + ',1)">+</button>' +
        '</div>' +
        '<button type="button" class="cart-item-remove" onclick="removeItem(' + item.id + ')">Supprimer</button>' +
      '</div>' +
      '<div class="cart-item-price">' + formatPrice(line) + '</div>' +
    '</div>';
  });
  container.innerHTML = html;

  var shipping = subtotal >= 79 ? 0 : 5.90;
  var total = subtotal + shipping;
  document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
  document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Offerte' : formatPrice(shipping);
  document.getElementById('cart-total').textContent = formatPrice(total);
}

function changeQty(id, delta) {
  var cart = getCart();
  var item = cart.find(function(i) { return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(function(i) { return i.id !== id; });
  saveCart(cart);
  renderCartPage();
}

function checkout(method) {
  var cart = getCart();
  if (!cart.length) { 
    alert('Ton panier est vide.'); 
    return; 
  }
  var total = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var shipping = total >= 79 ? 0 : 5.90;
  total += shipping;

  var methodName = method === 'card' ? 'Carte bancaire' : method === 'paypal' ? 'PayPal' : 'Apple Pay';
  
  var msg = 'Paiement ' + methodName + '\n\n' +
            'Total : ' + formatPrice(total) + '\n\n' +
            '✓ Paiement effectué avec succès !\n\n' +
            'Merci pour ta commande NeonForge !';
            
  alert(msg);
  localStorage.removeItem('neonforge_cart');
  updateCartCount();
  renderCartPage();
}
