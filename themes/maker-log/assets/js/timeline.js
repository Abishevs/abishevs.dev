(function () {
  const data = window.__timelineData;
  if (!data || !data.length) return;

  const colors = {
    project: '#38BDF8',
    career: '#22C55E',
    education: '#F59E0B',
    workflow: '#EC4899',
    book: '#FB923C'
  };

  const container = document.getElementById('timeline-container');
  const filtersEl = document.getElementById('timeline-filters');
  const activeFilters = new Set(Object.keys(colors));
  const now = new Date();

  function parseDate(s) {
    if (!s) return null;
    if (s.length === 4) return new Date(parseInt(s), 0, 1);
    return new Date(s);
  }

  function monthDiff(a, b) {
    return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  }

  function formatMonth(d) {
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  // Compute global time range
  let minDate = now, maxDate = new Date(2020, 0, 1);
  data.forEach(item => {
    const s = parseDate(item.start);
    if (!s) return;
    const e = item.current ? now : (parseDate(item.end) || s);
    if (s < minDate) minDate = s;
    if (e > maxDate) maxDate = e;
  });
  minDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  maxDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const MONTH_HEIGHT = 40; // px per month
  const totalMonths = monthDiff(minDate, maxDate) + 1;

  function monthOffset(date) {
    if (!date) return 0;
    return monthDiff(minDate, date);
  }

  function render() {
    const visible = data.filter(d => activeFilters.has(d.track) && parseDate(d.start));
    const totalHeight = totalMonths * MONTH_HEIGHT;

    // Time axis (year/month markers)
    let axisHtml = '';
    for (let m = 0; m < totalMonths; m++) {
      const d = new Date(minDate.getFullYear(), minDate.getMonth() + m, 1);
      const isJan = d.getMonth() === 0;
      const top = m * MONTH_HEIGHT;
      if (isJan) {
        axisHtml += `<div class="gantt-axis__year" style="top:${top}px">${d.getFullYear()}</div>`;
      } else if (m % 3 === 0) {
        axisHtml += `<div class="gantt-axis__month" style="top:${top}px">${d.toLocaleDateString('en-US', { month: 'short' })}</div>`;
      }
    }

    // Lay out items in columns to avoid overlap
    const lanes = [];
    const sorted = [...visible].sort((a, b) => (a.start || '').localeCompare(b.start || ''));

    sorted.forEach(item => {
      const s = parseDate(item.start);
      const e = item.current ? now : (parseDate(item.end) || s);
      const startM = monthOffset(s);
      const endM = Math.max(startM + 0.5, monthOffset(e));

      // Find a lane where it fits
      let lane = -1;
      for (let i = 0; i < lanes.length; i++) {
        if (lanes[i] <= startM) { lane = i; break; }
      }
      if (lane === -1) { lane = lanes.length; lanes.push(0); }
      lanes[lane] = endM + 0.3;

      item._lane = lane;
      item._startM = startM;
      item._endM = endM;
    });

    const laneCount = Math.max(lanes.length, 1);
    const laneWidth = Math.floor(100 / Math.min(laneCount, 5));

    // Render items
    let itemsHtml = '';
    sorted.forEach(item => {
      const color = colors[item.track];
      const top = item._startM * MONTH_HEIGHT;
      const height = Math.max(MONTH_HEIGHT * 0.6, (item._endM - item._startM) * MONTH_HEIGHT);
      const left = item._lane * laneWidth;
      const isPoint = height < MONTH_HEIGHT;

      itemsHtml += `<a class="gantt-item" href="${item.url}" style="top:${top}px;height:${height}px;left:${left}%;width:${laneWidth - 1}%">`;
      itemsHtml += `<span class="gantt-item__bar" style="background:${color};opacity:${item.activity && item.activity.length ? 0.2 : 0.6}"></span>`;

      // Activity segments
      if (item.activity && item.activity.length) {
        item.activity.forEach(a => {
          const as = parseDate(a.start);
          const ae = parseDate(a.end) || now;
          const aStartM = monthOffset(as) - item._startM;
          const aEndM = monthOffset(ae) - item._startM;
          const durM = item._endM - item._startM || 1;
          const aTop = (aStartM / durM) * 100;
          const aHeight = Math.max(5, ((aEndM - aStartM) / durM) * 100);
          itemsHtml += `<span class="gantt-item__activity" style="top:${aTop}%;height:${aHeight}%;background:${color}" title="${a.label || ''}"></span>`;
        });
      }

      // Milestones
      if (item.milestones && item.milestones.length) {
        item.milestones.forEach(m => {
          const md = parseDate(m.date);
          const mOff = monthOffset(md) - item._startM;
          const durM = item._endM - item._startM || 1;
          const mTop = (mOff / durM) * 100;
          itemsHtml += `<span class="gantt-item__milestone" style="top:${mTop}%" title="${m.title}">◆</span>`;
        });
      }

      // Label
      itemsHtml += `<span class="gantt-item__label">${item.title}</span>`;
      itemsHtml += `</a>`;
    });

    container.innerHTML = `
      <div class="gantt" style="height:${totalHeight}px">
        <div class="gantt-axis">${axisHtml}</div>
        <div class="gantt-items">${itemsHtml}</div>
      </div>`;
  }

  // Filtering
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
