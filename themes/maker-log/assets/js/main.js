// Navigation panels
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const navCats = document.querySelectorAll('.nav-cat[data-nav-cat]');

// Mobile hamburger
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

// Panel behavior
let closeTimer = null;
const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

function openPanel(cat) {
  clearTimeout(closeTimer);
  navCats.forEach(c => { if (c !== cat) c.classList.remove('is-open'); });
  cat.classList.add('is-open');
  cat.querySelector('.nav-cat__trigger').setAttribute('aria-expanded', 'true');
}

function closePanel(cat) {
  cat.classList.remove('is-open');
  cat.querySelector('.nav-cat__trigger').setAttribute('aria-expanded', 'false');
}

function closeAll() {
  navCats.forEach(c => closePanel(c));
}

navCats.forEach(cat => {
  const trigger = cat.querySelector('.nav-cat__trigger');

  // Click/tap toggle (mobile accordion + keyboard)
  trigger.addEventListener('click', () => {
    if (cat.classList.contains('is-open')) {
      closePanel(cat);
    } else {
      openPanel(cat);
    }
  });

  // Desktop hover
  cat.addEventListener('mouseenter', () => {
    if (!isMobile()) openPanel(cat);
  });

  cat.addEventListener('mouseleave', () => {
    if (!isMobile()) {
      closeTimer = setTimeout(() => closePanel(cat), 120);
    }
  });
});

// Close on Escape or click outside
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-cat')) closeAll();
});

// Project list filtering
const grid = document.getElementById('proj-grid');
if (grid) {
  const filtersEl = document.getElementById('proj-filters');
  const resetBtn  = document.getElementById('filter-reset');
  const emptyMsg  = document.getElementById('proj-empty');
  const chips     = filtersEl ? Array.from(filtersEl.querySelectorAll('.filter-chip')) : [];

  const active = {};

  function applyFilters() {
    const cards = Array.from(grid.querySelectorAll('.proj-card'));
    let visible = 0;
    cards.forEach(card => {
      let show = true;
      for (const [dim, val] of Object.entries(active)) {
        if (!val) continue;
        const cardVal = card.dataset[dim] || '';
        if (!cardVal.split(' ').includes(val)) { show = false; break; }
      }
      card.hidden = !show;
      if (show) visible++;
    });
    if (emptyMsg) emptyMsg.hidden = visible > 0;
    if (resetBtn) resetBtn.hidden = !Object.values(active).some(Boolean);
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const dim = chip.dataset.filter;
      const val = chip.dataset.value;
      active[dim] = active[dim] === val ? null : val;
      filtersEl.querySelectorAll(`.filter-chip[data-filter="${dim}"]`).forEach(c => {
        c.classList.toggle('is-active', c.dataset.value === active[dim]);
      });
      applyFilters();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      for (const k of Object.keys(active)) active[k] = null;
      chips.forEach(c => c.classList.remove('is-active'));
      applyFilters();
    });
  }
}

// ─── Code block copy buttons ─────────────────────────────────
document.querySelectorAll('.highlight').forEach(block => {
  const btn = document.createElement('button');
  btn.className = 'code-copy';
  btn.textContent = 'Copy';
  btn.addEventListener('click', () => {
    const code = block.querySelector('code');
    if (!code) return;
    navigator.clipboard.writeText(code.textContent).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('is-copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 1500);
    });
  });
  block.appendChild(btn);
});
