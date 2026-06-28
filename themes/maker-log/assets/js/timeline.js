(function () {
  const data = window.__timelineData;
  if (!data || !data.length) return;

  const tracks = window.__timelineTracks;
  if (!tracks) return;

  const trackOrder = Object.keys(tracks).sort((a, b) => tracks[a].order - tracks[b].order);
  const colors = {};
  const trackLabels = {};
  trackOrder.forEach(k => { colors[k] = tracks[k].color; trackLabels[k] = tracks[k].label; });

  const container = document.getElementById('timeline-container');
  const filtersEl = document.getElementById('timeline-filters');
  const activeFilters = new Set(Object.keys(colors));
  const now = new Date();

  function parseDate(s) {
    if (!s) return null;
    if (s.length === 4) return new Date(parseInt(s), 0, 1);
    return new Date(s);
  }

  // Absolute bounds
  let absMin = now, absMax = new Date(2000, 0, 1);
  data.forEach(item => {
    const s = parseDate(item.start);
    if (!s) return;
    const e = item.current ? now : (parseDate(item.end) || s);
    if (s < absMin) absMin = s;
    if (e > absMax) absMax = e;
  });
  const firstYear = absMin.getFullYear();
  const lastYear = now.getFullYear();

  // View state: selected year range
  let viewStartYear = firstYear;
  let viewEndYear = lastYear;
  let pendingStart = null;

  function toPercent(date) {
    const vMin = new Date(viewStartYear, 0, 1);
    const vMax = new Date(viewEndYear + 1, 0, 1);
    const totalMs = vMax - vMin;
    if (!date || totalMs === 0) return 0;
    return Math.max(0, Math.min(100, ((date - vMin) / totalMs) * 100));
  }

  function render() {
    const vMin = new Date(viewStartYear, 0, 1);
    const vMax = new Date(viewEndYear + 1, 0, 1);

    const visible = data.filter(d => activeFilters.has(d.track) && parseDate(d.start));

    // Group by track, filter to visible range
    const groups = {};
    trackOrder.forEach(t => { groups[t] = []; });
    visible.forEach(item => {
      const s = parseDate(item.start);
      const e = item.current ? now : (parseDate(item.end) || s);
      if (e >= vMin && s <= vMax) groups[item.track].push(item);
    });
    Object.values(groups).forEach(arr => arr.sort((a, b) => (a.start || '').localeCompare(b.start || '')));

    // Range selector — clickable year pills
    let html = '<div class="signal-range">';
    for (let y = firstYear; y <= lastYear; y++) {
      const inRange = y >= viewStartYear && y <= viewEndYear;
      html += `<button class="signal-range__year${inRange ? ' is-active' : ''}" data-year="${y}" type="button">${y}</button>`;
    }
    html += '</div>';

    // Time axis — adaptive granularity
    html += '<div class="signal-axis">';
    const rangeYears = viewEndYear - viewStartYear + 1;

    if (rangeYears <= 1) {
      // Monthly ticks
      for (let m = 0; m < 12; m++) {
        const d = new Date(viewStartYear, m, 1);
        const pct = toPercent(d);
        const label = d.toLocaleDateString('en-US', { month: 'short' });
        html += `<span class="signal-axis__tick" style="left:${pct}%">${label}</span>`;
      }
    } else if (rangeYears <= 3) {
      // Quarterly ticks
      for (let y = viewStartYear; y <= viewEndYear; y++) {
        for (let q = 0; q < 4; q++) {
          const d = new Date(y, q * 3, 1);
          const pct = toPercent(d);
          const label = q === 0 ? `${y}` : `Q${q + 1}`;
          html += `<span class="signal-axis__tick${q === 0 ? ' is-year' : ''}" style="left:${pct}%">${label}</span>`;
        }
      }
    } else {
      // Yearly ticks
      for (let y = viewStartYear; y <= viewEndYear + 1; y++) {
        const pct = toPercent(new Date(y, 0, 1));
        html += `<span class="signal-axis__tick is-year" style="left:${pct}%">${y}</span>`;
      }
    }
    html += `<span class="signal-axis__now" style="left:${toPercent(now)}%"></span>`;
    html += '</div>';

    // Rows
    trackOrder.forEach(track => {
      const items = groups[track];
      if (!items || !items.length) return;

      html += `<div class="signal-group">`;
      html += `<div class="signal-group__header" style="--track-color:${colors[track]}">${trackLabels[track]}</div>`;

      items.forEach(item => {
        const s = parseDate(item.start);
        const e = item.current ? now : (parseDate(item.end) || s);
        const startPct = toPercent(s);
        const endPct = toPercent(e);
        const isPoint = (endPct - startPct) < 0.5;

        html += `<a class="signal-row" href="${item.url}" title="${item.title}">`;
        html += `<span class="signal-row__label">${item.title}</span>`;
        html += `<span class="signal-row__trace">`;

        if (isPoint) {
          html += `<span class="signal-row__point" style="left:${startPct}%;background:${colors[track]}"></span>`;
        } else {
          html += `<span class="signal-row__lifetime" style="left:${startPct}%;width:${endPct - startPct}%;background:${colors[track]}"></span>`;

          if (item.activity && item.activity.length) {
            item.activity.forEach(a => {
              const as = parseDate(a.start);
              const ae = parseDate(a.end) || now;
              html += `<span class="signal-row__active" style="left:${toPercent(as)}%;width:${Math.max(0.4, toPercent(ae) - toPercent(as))}%;background:${colors[track]}" title="${a.label || ''}"></span>`;
            });
          } else {
            html += `<span class="signal-row__active" style="left:${startPct}%;width:${endPct - startPct}%;background:${colors[track]}"></span>`;
          }

          if (item.current) {
            html += `<span class="signal-row__ongoing" style="left:${endPct}%;border-left-color:${colors[track]}"></span>`;
          }
        }

        if (item.milestones && item.milestones.length) {
          item.milestones.forEach(m => {
            const md = parseDate(m.date);
            if (md) html += `<span class="signal-row__milestone" style="left:${toPercent(md)}%" title="${m.title}"></span>`;
          });
        }

        html += `</span></a>`;
      });
      html += `</div>`;
    });

    container.innerHTML = html;

    // Year pill interaction: first click sets start, second click sets end
    container.querySelectorAll('.signal-range__year').forEach(btn => {
      btn.addEventListener('click', () => {
        const y = parseInt(btn.dataset.year);
        if (pendingStart === null) {
          pendingStart = y;
          viewStartYear = y;
          viewEndYear = y;
          render();
        } else {
          const a = Math.min(pendingStart, y);
          const b = Math.max(pendingStart, y);
          viewStartYear = a;
          viewEndYear = b;
          pendingStart = null;
          render();
        }
      });
    });
  }

  // Track filtering
  filtersEl.querySelectorAll('.timeline-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = btn.dataset.track;
      if (activeFilters.has(track)) {
        activeFilters.delete(track);
        btn.classList.remove('is-active');
      } else {
        activeFilters.add(track);
        btn.classList.add('is-active');
      }
      render();
    });
  });

  render();
})();
