/* ============================================================
   DELIVERY BURGUER — script.js
   Carrinho, Pedido, WhatsApp, Toast, Animações
   ============================================================ */

// ===== CONFIGURAÇÕES FIXAS =====
const CONFIG = {
  whatsapp: '5521997144690',          // Número do dono
  pixKey: '44282df8-af5b-4be9-9df5-6b2894138bc8',       // Chave Pix
  pixReceiver: 'Andre Luiz',    // Nome do recebedor
  deliveryFee: 5.00,                  // Taxa de entrega fixa
};

// ===== CATÁLOGO DE PRODUTOS =====
// Para adicionar produtos: copie um bloco e altere os dados.
const PRODUCTS = {
  hamburgueres: [
    {
      id: 'h1',
      name: 'Classic Smash',
      desc: 'Pão brioche, smash 150g, queijo cheddar, alface, tomate e molho especial da casa.',
      price: 28.90,
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    },
    {
      id: 'h2',
      name: 'Double Bacon',
      desc: 'Dois smash 120g, bacon crocante, queijo americano, cebola caramelizada e BBQ.',
      price: 36.90,
      img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80',
    },
    {
      id: 'h3',
      name: 'Crispy Chicken',
      desc: 'Frango empanado crocante, maionese de ervas, pepino em conserva e alface crespa.',
      price: 31.90,
      img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
    },
    {
      id: 'h4',
      name: 'Veggie Burguer',
      desc: 'Hambúrguer de grão-de-bico, rúcula, tomate seco, cream cheese e pão integral.',
      price: 27.90,
      img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80',
    },
    {
      id: 'h5',
      name: 'Fire Beast',
      desc: 'Smash 180g, pimenta jalapeño, molho sriracha, cebola roxa e queijo pepper jack.',
      price: 38.90,
      img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
    },
    {
      id: 'h6',
      name: 'Truffle Deluxe',
      desc: 'Smash angus 160g, funghi, maionese de trufas, queijo gruyère e rúcula.',
      price: 44.90,
      img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80',
    },
  ],
  acai: [
    {
      id: 'a1',
      name: 'Açaí Garrafa - 300ml ',
      desc: 'Polpa pura da Amazônia com granola, banana e leite condensado.',
      price: 16.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a2',
      name: 'Açaí Garrafa Morango - 300ml',
      desc: 'Porção generosa com morango, granola, mel e coco ralado.',
      price: 22.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a3',
      name: 'Açaí Premium 300ml',
      desc: 'Super porção com banana, morango, granola crocante, amendoim e Nutella.',
      price: 31.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a4',
      name: 'Tigela Premium',
      desc: 'Bowl de açaí com frutas vermelhas, chia, mel, castanhas e granola especial.',
      price: 26.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a5',
      name: 'Açaí Garrafa - 300ml ',
      desc: 'Polpa pura da Amazônia com granola, banana e leite condensado.',
      price: 16.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a6',
      name: 'Açaí Garrafa - 300ml ',
      desc: 'Polpa pura da Amazônia com granola, banana e leite condensado.',
      price: 16.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a7',
      name: 'Açaí Garrafa - 300ml ',
      desc: 'Polpa pura da Amazônia com granola, banana e leite condensado.',
      price: 16.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: false,
    },
    {
      id: 'a8',
      name: 'Tijela - 700ml ',
      desc: 'Polpa pura da Amazônia com granola, banana e leite condensado.',
      price: 16.90,
      img: 'Assents/AcaiGarrafa.png',
      toppings: true,
    },
  ],
  bebidas: [
    {
      id: 'b1',
      name: 'Refrigerante Lata',
      desc: 'Coca-Cola, Guaraná ou Sprite 350ml bem gelado.',
      price: 6.90,
      img: 'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=400&q=80',
    },
    {
      id: 'b2',
      name: 'Suco Natural 400ml',
      desc: 'Laranja, limão, maracujá ou abacaxi com hortelã, feito na hora.',
      price: 10.90,
      img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80',
    },
    {
      id: 'b3',
      name: 'Água Mineral',
      desc: 'Água mineral 500ml com ou sem gás.',
      price: 4.00,
      img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
    },
    {
      id: 'b4',
      name: 'Milkshake 400ml',
      desc: 'Chocolate, morango, baunilha ou ovomaltine com chantilly e calda.',
      price: 18.90,
      img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
    },
    {
      id: 'b5',
      name: 'Limonada Suíça',
      desc: 'Limão siciliano, leite condensado e creme de leite. Cremosa e refrescante.',
      price: 13.90,
      img: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=400&q=80',
    },
  ],
};


// ===== COMPLEMENTOS DO AÇAÍ =====
const ACAI_TOPPINGS = [
  { id: 't1', name: 'Granola', emoji: '🌾' },
  { id: 't2', name: 'Banana', emoji: '🍌' },
  { id: 't3', name: 'Morango', emoji: '🍓' },
  { id: 't4', name: 'Leite condensado', emoji: '🥛' },
  { id: 't5', name: 'Mel', emoji: '🍯' },
  { id: 't6', name: 'Coco ralado', emoji: '🥥' },
  { id: 't7', name: 'Nutella', emoji: '🍫' },
  { id: 't8', name: 'Amendoim', emoji: '🥜' },
  { id: 't9', name: 'Paçoca', emoji: '🟤' },
  { id: 't10', name: 'Castanha', emoji: '🌰' },
];

let acaiPendingProduct = null;

function openAcaiModal(productId) {
  acaiPendingProduct = productId;
  // Limpa seleções anteriores
  document.querySelectorAll('.topping-chip').forEach(el => el.classList.remove('selected'));
  document.getElementById('acaiModal').classList.add('open');
  document.getElementById('acaiOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAcaiModal() {
  document.getElementById('acaiModal').classList.remove('open');
  document.getElementById('acaiOverlay').classList.remove('open');
  document.body.style.overflow = '';
  acaiPendingProduct = null;
}

function confirmAcaiOrder() {
  if (!acaiPendingProduct) return;

  const selected = [...document.querySelectorAll('.topping-chip.selected')]
    .map(el => el.dataset.name);

  const product = getProductById(acaiPendingProduct);
  if (!product) return;

  const existing = cart.find(item => item.id === acaiPendingProduct && JSON.stringify(item.toppings) === JSON.stringify(selected));
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: acaiPendingProduct,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: 1,
      toppings: selected,
    });
  }

  saveCart();
  renderCart();
  updateCartBadge();

  const toppingText = selected.length > 0 ? ` (${selected.join(', ')})` : '';
  showToast(`✅ ${product.name}${toppingText} adicionado!`);
  closeAcaiModal();
}
function handleAddProduct(productId, category) {
  if (category !== 'acai') {
    addToCart(productId, category);
    return;
  }

  const product = getProductById(productId);
  if (!product) return;

  if (product.toppings) {
    openAcaiModal(productId);   // abre o modal
  } else {
    addToCart(productId, category);  // vai direto pro carrinho
  }
}

// ===== ESTADO DO CARRINHO =====
let cart = loadCart();

// ============================================================
// RENDERIZAÇÃO DOS PRODUTOS
// ============================================================
function formatPrice(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function renderProducts(category, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  PRODUCTS[category].forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.07}s`;

    card.innerHTML = `
      <img class="card-image" src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <span class="card-price">${formatPrice(p.price)}</span>
          <button class="add-btn" onclick="handleAddProduct('${p.id}', '${category}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Adicionar
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
// Inicializa os chips de topping
(function buildToppings() {
  const grid = document.getElementById('toppingsGrid');
  if (!grid) return;
  ACAI_TOPPINGS.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'topping-chip';
    chip.dataset.id = t.id;
    chip.dataset.name = t.name;
    chip.innerHTML = `
      <span class="chip-emoji">${t.emoji}</span>
      <span>${t.name}</span>
      <span class="chip-check">✓</span>
    `;
    chip.addEventListener('click', () => chip.classList.toggle('selected'));
    grid.appendChild(chip);
  });
})();

// Inicializa os 3 grids
renderProducts('hamburgueres', 'grid-hamburgueres');
renderProducts('acai', 'grid-acai');
renderProducts('bebidas', 'grid-bebidas');

// ============================================================
// CARRINHO — CRUD
// ============================================================
function getProductById(id) {
  for (const cat of Object.values(PRODUCTS)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function addToCart(productId, category) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, img: product.img, qty: 1 });
  }

  saveCart();
  renderCart();
  updateCartBadge();
  showToast(`✅ ${product.name} adicionado ao carrinho!`);
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
  updateCartBadge();
}

// ============================================================
// CARRINHO — RENDERIZAÇÃO
// ============================================================
function renderCart() {
  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  // Limpar itens existentes (mas manter o empty placeholder)
  const existingItems = container.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  if (cart.length === 0) {
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        ${item.toppings && item.toppings.length > 0
  ? `<p class="cart-item-toppings">${item.toppings.join(' · ')}</p>`
  : ''}
       
        <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', +1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remover">🗑</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  // Totais
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + CONFIG.deliveryFee;
  document.getElementById('subtotal').textContent = formatPrice(subtotal);
  document.getElementById('deliveryFee').textContent = formatPrice(CONFIG.deliveryFee);
  document.getElementById('totalFinal').textContent = formatPrice(total);
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const count = document.getElementById('cartCount');
  const fabCount = document.getElementById('fabCount');
  const fab = document.getElementById('cartFab');

  count.textContent = total;
  fabCount.textContent = total;

  if (total > 0) {
    count.classList.add('visible');
    fab.classList.add('show');
  } else {
    count.classList.remove('visible');
    fab.classList.remove('show');
  }
}

// ============================================================
// PERSISTÊNCIA — localStorage
// ============================================================
function saveCart() {
  localStorage.setItem('deliveryBurguerCart', JSON.stringify(cart));
}

function loadCart() {
  try {
    const data = localStorage.getItem('deliveryBurguerCart');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// ============================================================
// ABERTURA / FECHAMENTO DO CARRINHO
// ============================================================
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartFab').addEventListener('click', openCart);

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// MODAL DO PEDIDO
// ============================================================
function openOrderForm() {
  if (cart.length === 0) {
    showToast('⚠️ Adicione itens ao carrinho primeiro!');
    return;
  }
  closeCart();
  document.getElementById('orderModal').classList.add('open');
  document.getElementById('orderOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderForm() {
  document.getElementById('orderModal').classList.remove('open');
  document.getElementById('orderOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// GERAR MENSAGEM E ABRIR WHATSAPP
// ============================================================
function sendWhatsApp() {
  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const address = document.getElementById('clientAddress').value.trim();
  const number = document.getElementById('clientNumber').value.trim();
  const neighborhood = document.getElementById('clientNeighborhood').value;
  const complement = document.getElementById('clientComplement').value.trim();
  const deliveryType = document.getElementById('deliveryType').value;
  const obs = document.getElementById('clientObs').value.trim();

  const ALLOWED_NEIGHBORHOODS = [

    'BrásdePina',
    '5Bocas',
    'PicaPau',
    'CidadeAlta',
    'ParadadeLucas',
    'Vigario',
  ];

  if (
    deliveryType === 'Entrega em domicílio' &&
    !ALLOWED_NEIGHBORHOODS.includes(neighborhood)
  ) {
    showToast('❌ Ainda não entregamos nesse bairro!');
    return;
  }

  // Validação básica
  if (!name || !phone || !address || !number || !neighborhood) {
    showToast('⚠️ Preencha todos os campos obrigatórios!');
    return;
  }


  // Montar lista de itens
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + CONFIG.deliveryFee;

  const itemsText = cart
    .map(i => `   • ${i.qty}x ${i.name} — ${formatPrice(i.price * i.qty)}`)
    .join('\n');

  const addressFull = complement
    ? `${address}, ${number} — ${complement}, ${neighborhood}`
    : `${address}, ${number}, ${neighborhood}`;

  // Mensagem formatada
  const message = [
    '🍔 *NOVO PEDIDO — Delivery Burguer*',
    '━━━━━━━━━━━━━━━━━━━━',
    `👤 *Cliente:* ${name}`,
    `📱 *Telefone:* ${phone}`,
    `📦 *Forma de entrega:* ${deliveryType}`,
    `🏙️ *Bairro:*${neighborhood}`,
    `📍 *Endereço:* ${addressFull}`,
    '',
    '🛒 *Itens do Pedido:*',
    itemsText,
    '',
    `📦 Subtotal: ${formatPrice(subtotal)}`,
    `🛵 Entrega: ${formatPrice(CONFIG.deliveryFee)}`,
    `💰 *Total: ${formatPrice(total)}*`,
    '',
    obs ? `📝 *Observações:* ${obs}` : '',
    '━━━━━━━━━━━━━━━━━━━━',
    '💠 *Pagamento via Pix:*',
    `   Chave: \`${CONFIG.pixKey}\``,
    `   Recebedor: ${CONFIG.pixReceiver}`,
    '',
    '📸 *Após o pagamento, envie o comprovante aqui para confirmarmos seu pedido. Obrigado!* 🙏',
  ]
    .filter(line => line !== null)
    .join('\n');

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encoded}`;
  window.open(url, '_blank');

  // Limpar após envio
  cart = [];
  saveCart();
  renderCart();
  updateCartBadge();
  closeOrderForm();
  showToast('🎉 Pedido enviado com sucesso!');
}

// ============================================================
// PIX — COPIAR CHAVE
// ============================================================
function copyPix() {
  const key = CONFIG.pixKey;
  const btn = document.getElementById('copyPixBtn');

  navigator.clipboard.writeText(key).then(() => {
    btn.textContent = '✅ Copiado!';
    btn.classList.add('copied');
    showToast('💠 Chave Pix copiada!');
    setTimeout(() => {
      btn.textContent = 'Copiar chave';
      btn.classList.remove('copied');
    }, 2500);
  }).catch(() => {
    // Fallback para navegadores mais antigos
    const el = document.createElement('textarea');
    el.value = key;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    btn.textContent = '✅ Copiado!';
    btn.classList.add('copied');
    showToast('💠 Chave Pix copiada!');
    setTimeout(() => {
      btn.textContent = 'Copiar chave';
      btn.classList.remove('copied');
    }, 2500);
  });
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// SCROLL — NAVBAR SHADOW
// ============================================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ============================================================
// INTERSECTION OBSERVER — SEÇÕES APARECEM AO SCROLL
// ============================================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Anima só uma vez
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.products-section').forEach(sec => observer.observe(sec));

// ============================================================
// INICIALIZAÇÃO
// ============================================================
(function init() {
  renderCart();
  updateCartBadge();
})();
