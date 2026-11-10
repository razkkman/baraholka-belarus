'use strict';

const $ = (sel) => document.querySelector(sel);

const ICONS = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.4l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.5z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
};

const CATEGORY_ICONS = {
  all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>',
  electronics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="20" x="6" y="2" rx="2.5"/><path d="M10 18h4"/></svg>',
  furniture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2M20 18v2"/></svg>',
  appliances: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6h2M14 6h2"/></svg>',
  clothing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  kids: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9.5" y2="9.5"/><line x1="15" x2="15.01" y1="9.5" y2="9.5"/></svg>',
  sport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
  books: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
};

const PLACEHOLDER_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
  '<rect width="800" height="600" fill="#f5f5f7"/>' +
  '<g transform="translate(352 228)" fill="none" stroke="#aeaeb2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M58 16H38L28 28H16a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V36a8 8 0 0 0-8-8H68L58 16z"/>' +
  '<circle cx="48" cy="52" r="14"/>' +
  '</g>' +
  '<text x="400" y="352" font-size="24" font-weight="500" fill="#86868b" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif">Нет фото</text>' +
  '</svg>'
);

/* ---------- Helpers ---------- */

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function formatPrice(n) {
  return Number(n).toLocaleString('ru-RU') + ' Br';
}

function plural(n, forms) {
  const abs = Math.abs(n) % 100;
  const d = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (d > 1 && d < 5) return forms[1];
  if (d === 1) return forms[0];
  return forms[2];
}

function timeAgo(ts) {
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return 'только что';
  if (mins < 60) return mins + ' ' + plural(mins, ['минуту', 'минуты', 'минут']) + ' назад';
  const hours = Math.floor(mins / 60);
  if (hours < 24) return hours + ' ' + plural(hours, ['час', 'часа', 'часов']) + ' назад';
  const days = Math.floor(hours / 24);
  if (days === 1) return 'вчера';
  if (days < 7) return days + ' ' + plural(days, ['день', 'дня', 'дней']) + ' назад';
  return new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}

const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
  },
};

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

/* ---------- State ---------- */

const state = {
  search: '', category: 'all', city: 'all', condition: 'all',
  priceMin: null, priceMax: null, sort: 'newest', favoritesOnly: false,
};

let userListings = store.get('baraholka_listings', []);
const favorites = new Set(store.get('baraholka_favorites', []));

function allListings() {
  const mock = LISTINGS.map((l) => ({ ...l, createdAt: Date.now() - l.hoursAgo * 3600000 }));
  return [...userListings, ...mock];
}

function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

function getFiltered() {
  let items = allListings();
  if (state.favoritesOnly) items = items.filter((l) => favorites.has(l.id));
  if (state.category !== 'all') items = items.filter((l) => l.category === state.category);
  if (state.city !== 'all') items = items.filter((l) => l.city === state.city);
  if (state.condition !== 'all') items = items.filter((l) => l.condition === state.condition);
  if (state.priceMin !== null) items = items.filter((l) => l.price >= state.priceMin);
  if (state.priceMax !== null) items = items.filter((l) => l.price <= state.priceMax);
  if (state.search) {
    const q = state.search.toLowerCase();
    items = items.filter((l) => (l.title + ' ' + l.description).toLowerCase().includes(q));
  }
  if (state.sort === 'price-asc') items.sort((a, b) => a.price - b.price);
  else if (state.sort === 'price-desc') items.sort((a, b) => b.price - a.price);
  else items.sort((a, b) => b.createdAt - a.createdAt);
  return items;
}

/* ---------- Rendering ---------- */

function cardHTML(l) {
  const cat = categoryById(l.category);
  const fav = favorites.has(l.id);
  const isNew = l.condition === 'new';
  return `
    <article class="card" data-id="${escapeHTML(l.id)}" tabindex="0" role="button" aria-label="${escapeHTML(l.title)}">
      <div class="card-img-wrap">
        <img src="${escapeHTML(l.image)}" alt="${escapeHTML(l.title)}" loading="lazy">
        <button class="fav-btn ${fav ? 'active' : ''}" data-fav="${escapeHTML(l.id)}" type="button"
                title="${fav ? 'Убрать из избранного' : 'В избранное'}" aria-pressed="${fav}">${ICONS.heart}</button>
        ${l.isUser ? '<span class="card-badge">Ваше</span>' : ''}
      </div>
      <div class="card-body">
        <div class="card-eyebrow">
          ${isNew ? '<span class="card-eyebrow-new">Новое</span><span>·</span>' : ''}
          <span>${cat ? escapeHTML(cat.name) : 'Другое'}</span>
        </div>
        <h3 class="card-title">${escapeHTML(l.title)}</h3>
        <div class="card-footer">
          <div class="card-price">${formatPrice(l.price)}</div>
          <div class="card-meta">${escapeHTML(l.city)} · ${timeAgo(l.createdAt)}</div>
        </div>
      </div>
    </article>`;
}

function renderCategories() {
  $('#categoriesRow').innerHTML = CATEGORIES.map((c) => {
    const icon = CATEGORY_ICONS[c.id] || CATEGORY_ICONS.all;
    return `<button class="cat-chip" data-cat="${c.id}" type="button">${icon}<span>${escapeHTML(c.name)}</span></button>`;
  }).join('');
}

function syncConditionControl() {
  document.querySelectorAll('#conditionFilter .segmented-btn').forEach((btn) => {
    const active = btn.dataset.value === state.condition;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-checked', String(active));
  });
}

function render() {
  const items = getFiltered();
  $('#listingsGrid').innerHTML = items.map(cardHTML).join('');

  const empty = $('#emptyState');
  empty.hidden = items.length > 0;
  if (items.length === 0) {
    if (state.favoritesOnly) {
      $('#emptyTitle').textContent = 'В избранном пока пусто';
      $('#emptyText').textContent = 'Нажимайте на сердечко на карточках, чтобы сохранять понравившиеся объявления.';
    } else {
      $('#emptyTitle').textContent = 'Ничего не найдено';
      $('#emptyText').textContent = 'Попробуйте изменить запрос или сбросить фильтры.';
    }
  }

  $('#resultsCount').textContent = items.length + ' ' + plural(items.length, ['объявление', 'объявления', 'объявлений']);
  $('#favModeChip').hidden = !state.favoritesOnly;
  $('#favCount').textContent = favorites.size;
  $('#favCount').hidden = favorites.size === 0;
  $('#favoritesBtn').classList.toggle('active', state.favoritesOnly);
  $('#searchClear').hidden = state.search.length === 0;

  document.querySelectorAll('.cat-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.cat === state.category);
  });
  syncConditionControl();
}

/* ---------- Favorites ---------- */

function toggleFavorite(id) {
  const added = !favorites.has(id);
  if (added) favorites.add(id); else favorites.delete(id);
  store.set('baraholka_favorites', [...favorites]);
  toast(added ? 'Добавлено в избранное' : 'Убрано из избранного');
  render();
  document.querySelectorAll(`#listingDetail [data-fav="${id}"]`).forEach((btn) => {
    btn.classList.toggle('active', added);
    btn.setAttribute('aria-pressed', String(added));
  });
}

/* ---------- Modals ---------- */

function openModal(sel) {
  $(sel).hidden = false;
  document.body.classList.add('modal-open');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach((m) => { m.hidden = true; });
  document.body.classList.remove('modal-open');
}

function openListing(id) {
  const l = allListings().find((x) => x.id === id);
  if (!l) return;
  const cat = categoryById(l.category);
  const fav = favorites.has(id);
  const s = l.seller;
  const catIcon = cat ? (CATEGORY_ICONS[cat.id] || '') : '';
  const phoneHref = 'tel:' + String(s.phone).replace(/[^+\d]/g, '');

  $('#listingDetail').innerHTML = `
    <div class="detail-media">
      <img src="${escapeHTML(l.image)}" alt="${escapeHTML(l.title)}">
    </div>
    <div class="detail-info">
      <div class="detail-topline">
        <span class="tag ${l.condition === 'new' ? 'tag-new' : ''}">${l.condition === 'new' ? 'Новое' : 'Б/у'}</span>
        ${cat ? `<span class="tag">${catIcon}${escapeHTML(cat.name)}</span>` : ''}
        <button class="fav-btn fav-btn-lg ${fav ? 'active' : ''}" data-fav="${escapeHTML(l.id)}" type="button"
                title="В избранное" aria-pressed="${fav}">${ICONS.heart}</button>
      </div>
      <h2 class="detail-title">${escapeHTML(l.title)}</h2>
      <div class="detail-price">${formatPrice(l.price)}</div>
      <div class="detail-meta">
        <span class="detail-meta-item">${ICONS.pin}${escapeHTML(l.city)}${l.district ? ', ' + escapeHTML(l.district) : ''}</span>
        <span class="detail-meta-item">${timeAgo(l.createdAt)}</span>
        <span class="detail-meta-item">${ICONS.eye}${l.views || 0}</span>
      </div>
      <h4>Описание</h4>
      <p class="detail-desc">${escapeHTML(l.description)}</p>
      <div class="seller-box">
        <div class="seller-avatar">${escapeHTML((s.name || '?')[0].toUpperCase())}</div>
        <div class="seller-info">
          <div class="seller-name">${escapeHTML(s.name)}</div>
          <div class="seller-rating">${ICONS.star}<span>${s.rating} · ${s.reviews} ${plural(s.reviews, ['отзыв', 'отзыва', 'отзывов'])} · на сайте с ${escapeHTML(s.since)} г.</span></div>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary btn-block btn-lg" id="showPhoneBtn" type="button">${ICONS.phone}Показать телефон</button>
        <button class="btn btn-secondary btn-block btn-lg" id="writeSellerBtn" type="button">${ICONS.mail}Написать продавцу</button>
      </div>
      <div class="phone-reveal" id="phoneReveal" hidden>
        <a href="${escapeHTML(phoneHref)}">${escapeHTML(s.phone)}</a>
      </div>
      <form class="message-form" id="messageForm" hidden>
        <textarea required rows="3" maxlength="1000" placeholder="Здравствуйте! Ещё продаёте?"></textarea>
        <button class="btn btn-dark" type="submit">Отправить сообщение</button>
      </form>
    </div>`;

  openModal('#listingModal');

  $('#showPhoneBtn').addEventListener('click', () => {
    $('#phoneReveal').hidden = false;
    $('#showPhoneBtn').hidden = true;
  });
  $('#writeSellerBtn').addEventListener('click', () => {
    $('#messageForm').hidden = !$('#messageForm').hidden;
  });
  $('#messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#messageForm').hidden = true;
    toast('Сообщение отправлено продавцу');
  });
}

/* ---------- Add listing ---------- */

let pendingImage = null;

function openAddModal() {
  $('#addForm').reset();
  pendingImage = null;
  $('#photoPreview').innerHTML = `<span class="photo-drop-prompt">${ICONS.camera}<span>Нажмите, чтобы добавить фото</span></span>`;
  openModal('#addModal');
}

function downscaleImage(file, maxDim = 900) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Не удалось прочитать изображение'));
    };
    img.src = url;
  });
}

/* ---------- Filters ---------- */

function resetFilters() {
  Object.assign(state, {
    search: '', category: 'all', city: 'all', condition: 'all',
    priceMin: null, priceMax: null, favoritesOnly: false,
  });
  $('#searchInput').value = '';
  $('#priceMin').value = '';
  $('#priceMax').value = '';
  $('#cityFilter').value = 'all';
  render();
}

/* ---------- Events ---------- */

$('#searchInput').addEventListener('input', (e) => {
  state.search = e.target.value.trim();
  render();
});

$('#searchClear').addEventListener('click', () => {
  state.search = '';
  $('#searchInput').value = '';
  render();
  $('#searchInput').focus();
});

$('#categoriesRow').addEventListener('click', (e) => {
  const chip = e.target.closest('.cat-chip');
  if (!chip) return;
  state.category = chip.dataset.cat;
  render();
});

$('#priceMin').addEventListener('input', (e) => {
  state.priceMin = e.target.value === '' ? null : Math.max(0, Number(e.target.value));
  render();
});
$('#priceMax').addEventListener('input', (e) => {
  state.priceMax = e.target.value === '' ? null : Math.max(0, Number(e.target.value));
  render();
});

$('#conditionFilter').addEventListener('click', (e) => {
  const btn = e.target.closest('.segmented-btn');
  if (!btn) return;
  state.condition = btn.dataset.value;
  render();
});

$('#cityFilter').addEventListener('change', (e) => { state.city = e.target.value; render(); });
$('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; render(); });

$('#favoritesBtn').addEventListener('click', () => {
  state.favoritesOnly = !state.favoritesOnly;
  render();
});
$('#exitFavBtn').addEventListener('click', () => {
  state.favoritesOnly = false;
  render();
});

$('#resetFilters').addEventListener('click', resetFilters);
$('#emptyResetBtn').addEventListener('click', resetFilters);
$('#logoBtn').addEventListener('click', (e) => { e.preventDefault(); resetFilters(); });
$('#filtersToggle').addEventListener('click', () => $('#filtersPanel').classList.toggle('open'));

$('#listingsGrid').addEventListener('click', (e) => {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) { toggleFavorite(favBtn.dataset.fav); return; }
  const card = e.target.closest('.card');
  if (card) openListing(card.dataset.id);
});
$('#listingsGrid').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.card');
  if (card && e.target === card) { e.preventDefault(); openListing(card.dataset.id); }
});

$('#listingDetail').addEventListener('click', (e) => {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) toggleFavorite(favBtn.dataset.fav);
});

document.querySelectorAll('.modal-overlay').forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('[data-close]')) closeModals();
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModals();
});

$('#addBtn').addEventListener('click', openAddModal);
$('#promoAddBtn').addEventListener('click', openAddModal);

$('#photoInput').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { toast('Выберите файл изображения'); return; }
  try {
    pendingImage = await downscaleImage(file);
    $('#photoPreview').innerHTML = `<img src="${pendingImage}" alt="Фото объявления">`;
  } catch {
    toast('Не удалось загрузить фото');
  }
});

$('#addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const listing = {
    id: 'u' + Date.now(),
    title: String(fd.get('title')).trim(),
    price: Math.max(0, Number(fd.get('price')) || 0),
    category: String(fd.get('category')),
    condition: String(fd.get('condition')),
    city: String(fd.get('city')),
    district: '',
    description: String(fd.get('description')).trim(),
    image: pendingImage || PLACEHOLDER_IMAGE,
    createdAt: Date.now(),
    views: 0,
    isUser: true,
    seller: {
      name: String(fd.get('name')).trim(),
      rating: 5.0,
      reviews: 0,
      since: String(new Date().getFullYear()),
      phone: String(fd.get('phone')).trim(),
    },
  };
  userListings.unshift(listing);
  store.set('baraholka_listings', userListings);
  closeModals();
  state.favoritesOnly = false;
  render();
  toast('Объявление опубликовано');
});

/* ---------- Init ---------- */

(function init() {
  renderCategories();
  const cityOptions = CITIES.map((c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
  $('#cityFilter').insertAdjacentHTML('beforeend', cityOptions);
  $('#addCity').insertAdjacentHTML('beforeend', cityOptions);
  $('#addCategory').insertAdjacentHTML('beforeend',
    CATEGORIES.filter((c) => c.id !== 'all')
      .map((c) => `<option value="${escapeHTML(c.id)}">${escapeHTML(c.name)}</option>`).join('')
  );
  render();
})();
