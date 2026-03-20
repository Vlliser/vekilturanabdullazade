/* ============================================
   LOGIN PROTECTION
   Пароль хранится в виде SHA-256 хэша.
   Текущий пароль: turan2025
   Чтобы сменить пароль — замени HASH ниже
   на новый SHA-256 хэш своего пароля.
   Получить хэш: https://emn178.github.io/online-tools/sha256.html
   ============================================ */

const ADMIN_HASH = 'f7c17e57038ef65979de91c7cb61948a20a73b38f579c888f495b52040fc6abc';
// Это хэш от "turan2025"
// НЕ храни пароль в открытом виде — только хэш!

const SESSION_KEY = 'turan_admin_auth';

async function hashPassword(password) {
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray  = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function checkLogin() {
  // Already authenticated in this session?
  if (sessionStorage.getItem(SESSION_KEY) === 'ok') {
    showAdminPanel();
    return;
  }
  // Show login screen
  document.getElementById('login-screen').classList.remove('hidden');

  const btn  = document.getElementById('login-btn');
  const inp  = document.getElementById('login-password');
  const err  = document.getElementById('login-error');

  async function attempt() {
    const hash = await hashPassword(inp.value);
    if (hash === ADMIN_HASH) {
      sessionStorage.setItem(SESSION_KEY, 'ok');
      document.getElementById('login-screen').classList.add('hidden');
      showAdminPanel();
    } else {
      err.classList.add('show');
      btn.classList.add('shake');
      inp.value = '';
      inp.focus();
      setTimeout(() => btn.classList.remove('shake'), 400);
    }
  }

  btn.addEventListener('click', attempt);
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
}

function showAdminPanel() {
  document.getElementById('admin-layout').style.display = 'flex';
  initAdmin();
}

// Start
checkLogin();

/* ============================================
   END LOGIN — main admin code below
   ============================================ */

/* ============================================
   TURAN ABDULLAZADƏ - Admin Panel JS
   ============================================ */

// ---- DATA STORAGE ----
const STORAGE_KEY = 'turan_lawyer_data';

function getData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);
  return getDefaultData();
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  showToast('Məlumat saxlanıldı ✓');
}

function getDefaultData() {
  return {
    testimonials: [
      { id: 1, name: "Leyla M.", case: "Ailə hüququ", stars: 5, text: "Turan bəy çox peşəkar və cavabdeh vəkildir. Boşanma işimdə tam dəstək verdi." },
      { id: 2, name: "Rauf K.", case: "Cinayət hüququ", stars: 5, text: "Cinayət işimdə ən çətin anlarda Turan bəy güclü müdafiə apardı." },
      { id: 3, name: "Nigar S.", case: "Əmlak hüququ", stars: 5, text: "Əmlak mübahisəsini uğurla həll etdi. Sürətli, dürüst və fədakar bir vəkildir." }
    ],
    certificates: [
      { id: 1, year: "2018", name: "Vəkil lisenziyası", org: "Azərbaycan Respublikası Ədliyyə Nazirliyi", icon: "🎓" },
      { id: 2, year: "2020", name: "Cinayət prosesi üzrə ixtisaslaşma", org: "Azərbaycan Vəkillər Kollegiyası", icon: "⚖️" }
    ],
    media: [
      { id: 1, type: "TV", date: "Yanvar 2024", title: "Ailə hüququnda son dəyişikliklər — Ekspert rəyi", source: "Filler" },
      { id: 2, type: "Radio", date: "Mart 2024", title: "Vətəndaş hüquqları: Nə bilməliyik?", source: "Filler" }
    ],
    profile: {
      name: "Abdullazadə Turan",
      role_az: "Vəkil",
      role_ru: "Адвокат",
      role_en: "Attorney at Law",
      phone: "+994 70 980 71 07",
      email: "turanabdullazada@gmail.com",
      address: "Bakı ş., Nərimanov r., Sabit Rəhman küç. 35, mən. 40",
      bureau: "Bakı şəhəri 20 saylı Vəkil Bürosu",
      experience: "7",
      facebook: "https://www.facebook.com/vekilturanabdullazade",
      instagram: "https://www.instagram.com/vekil.turan.abdullazadeh/",
      whatsapp: "994709807107"
    }
  };
}

// ---- NAVIGATION ----
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => {
    const panel = link.getAttribute('data-panel');
    if (!panel) return;
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    link.classList.add('active');
    document.getElementById('panel-' + panel).classList.add('active');
    document.getElementById('topbar-title').textContent = link.querySelector('span').textContent;
  });
});

// ---- TOAST ----
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ========== PROFILE ==========
function loadProfile() {
  const d = getData().profile;
  Object.keys(d).forEach(key => {
    const el = document.getElementById('p-' + key);
    if (el) el.value = d[key];
  });
}
document.getElementById('profile-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const data = getData();
  const fields = ['name','role_az','role_ru','role_en','phone','email','address','bureau','experience','facebook','instagram','whatsapp'];
  fields.forEach(key => {
    const el = document.getElementById('p-' + key);
    if (el) data.profile[key] = el.value;
  });
  saveData(data);
});

// ========== TESTIMONIALS ==========
function renderTestimonials() {
  const list = document.getElementById('testimonials-list');
  if (!list) return;
  const items = getData().testimonials;
  list.innerHTML = items.map(t => `
    <div class="item-row">
      <div class="item-icon">💬</div>
      <div class="item-info">
        <div class="item-name">${t.name} — ${t.case}</div>
        <div class="item-sub">${'★'.repeat(t.stars)} · ${t.text.substring(0, 60)}...</div>
      </div>
      <div class="item-actions">
        <button class="btn btn-ghost" onclick="editTestimonial(${t.id})"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger" onclick="deleteTestimonial(${t.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function addTestimonial() {
  const data = getData();
  const name = document.getElementById('t-name').value.trim();
  const caseType = document.getElementById('t-case').value.trim();
  const stars = parseInt(document.getElementById('t-stars').value);
  const text = document.getElementById('t-text').value.trim();
  if (!name || !text) return;
  const newId = Date.now();
  data.testimonials.push({ id: newId, name, case: caseType, stars, text });
  saveData(data);
  renderTestimonials();
  document.getElementById('t-name').value = '';
  document.getElementById('t-case').value = '';
  document.getElementById('t-text').value = '';
  document.getElementById('t-stars').value = '5';
}

function deleteTestimonial(id) {
  if (!confirm('Silmək istəyirsiniz?')) return;
  const data = getData();
  data.testimonials = data.testimonials.filter(t => t.id !== id);
  saveData(data);
  renderTestimonials();
}

function editTestimonial(id) {
  const data = getData();
  const t = data.testimonials.find(x => x.id === id);
  if (!t) return;
  document.getElementById('t-name').value = t.name;
  document.getElementById('t-case').value = t.case;
  document.getElementById('t-stars').value = t.stars;
  document.getElementById('t-text').value = t.text;
  data.testimonials = data.testimonials.filter(x => x.id !== id);
  saveData(data);
  renderTestimonials();
}

// ========== CERTIFICATES ==========
function renderCertificates() {
  const list = document.getElementById('certs-list');
  if (!list) return;
  const items = getData().certificates;
  list.innerHTML = items.map(c => `
    <div class="item-row">
      <div class="item-icon">${c.icon || '📜'}</div>
      <div class="item-info">
        <div class="item-name">${c.name}</div>
        <div class="item-sub">${c.year} · ${c.org}</div>
      </div>
      <div class="item-actions">
        <button class="btn btn-danger" onclick="deleteCert(${c.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function addCertificate() {
  const data = getData();
  const year = document.getElementById('c-year').value.trim();
  const name = document.getElementById('c-name').value.trim();
  const org = document.getElementById('c-org').value.trim();
  const icon = document.getElementById('c-icon').value.trim() || '📜';
  if (!name) return;
  data.certificates.push({ id: Date.now(), year, name, org, icon });
  saveData(data);
  renderCertificates();
  document.getElementById('c-year').value = '';
  document.getElementById('c-name').value = '';
  document.getElementById('c-org').value = '';
}

function deleteCert(id) {
  if (!confirm('Silmək istəyirsiniz?')) return;
  const data = getData();
  data.certificates = data.certificates.filter(c => c.id !== id);
  saveData(data);
  renderCertificates();
}

// ========== MEDIA ==========
function renderMedia() {
  const list = document.getElementById('media-list');
  if (!list) return;
  const items = getData().media;
  const typeIcons = { TV: '📺', Radio: '🎙️', Mətbuat: '📰', Online: '🌐', Digər: '📋' };
  list.innerHTML = items.map(m => `
    <div class="item-row">
      <div class="item-icon">${typeIcons[m.type] || '📋'}</div>
      <div class="item-info">
        <div class="item-name">${m.title}</div>
        <div class="item-sub">${m.type} · ${m.date} · ${m.source}</div>
      </div>
      <div class="item-actions">
        <button class="btn btn-danger" onclick="deleteMedia(${m.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function addMedia() {
  const data = getData();
  const type = document.getElementById('m-type').value;
  const date = document.getElementById('m-date').value.trim();
  const title = document.getElementById('m-title').value.trim();
  const source = document.getElementById('m-source').value.trim();
  if (!title) return;
  data.media.push({ id: Date.now(), type, date, title, source });
  saveData(data);
  renderMedia();
  document.getElementById('m-date').value = '';
  document.getElementById('m-title').value = '';
  document.getElementById('m-source').value = '';
}

function deleteMedia(id) {
  if (!confirm('Silmək istəyirsiniz?')) return;
  const data = getData();
  data.media = data.media.filter(m => m.id !== id);
  saveData(data);
  renderMedia();
}

// ========== DASHBOARD STATS ==========
function loadDashboardStats() {
  const data = getData();
  const el = id => document.getElementById(id);
  if (el('dash-testimonials')) el('dash-testimonials').textContent = data.testimonials.length;
  if (el('dash-certs')) el('dash-certs').textContent = data.certificates.length;
  if (el('dash-media')) el('dash-media').textContent = data.media.length;
  if (el('dash-langs')) el('dash-langs').textContent = '3';
}

// ========== EXPORT JSON ==========
function exportData() {
  const data = getData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'turan_lawyer_data.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Məlumatlar export edildi');
}

// ========== IMPORT JSON ==========
function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      showToast('Məlumatlar import edildi');
      initAdmin();
    } catch {
      alert('JSON faylı düzgün deyil!');
    }
  };
  reader.readAsText(file);
}

// ========== INIT ==========
function initAdmin() {
  loadProfile();
  loadDashboardStats();
  renderTestimonials();
  renderCertificates();
  renderMedia();
}

// initAdmin() is now called by showAdminPanel() after successful login
