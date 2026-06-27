// Project list filtering
const grid = document.getElementById('proj-grid');
if (grid) {
  const filtersEl = document.getElementById('proj-filters');
  const resetBtn  = document.getElementById('filter-reset');
  const emptyMsg  = document.getElementById('proj-empty');
  const chips     = filtersEl ? Array.from(filtersEl.querySelectorAll('.filter-chip')) : [];

  const active = { status: null, domain: null };

  function applyFilters() {
    const cards = Array.from(grid.querySelectorAll('.proj-card'));
    let visible = 0;
    cards.forEach(card => {
      const statusMatch = !active.status || card.dataset.status === active.status;
      const domainMatch = !active.domain || (card.dataset.domains || '').split(' ').includes(active.domain);
      const show = statusMatch && domainMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (emptyMsg) emptyMsg.hidden = visible > 0;
    if (resetBtn) resetBtn.hidden = !active.status && !active.domain;
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
      active.status = null;
      active.domain = null;
      chips.forEach(c => c.classList.remove('is-active'));
      applyFilters();
    });
  }
}
