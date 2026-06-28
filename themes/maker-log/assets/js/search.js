(function () {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const hint = document.getElementById('search-hint');
  if (!input || !results) return;

  const sectionLabels = {
    'projects': 'Projects',
    'work-experience': 'Work Experience',
    'education': 'Education',
    'technologies': 'Technologies',
    'workflows': 'Workflows',
    'reading': 'Reading',
    'media': 'Media',
    'project-journal': 'Project Journal',
    'posts': 'Posts'
  };

  const sectionOrder = ['projects', 'technologies', 'workflows', 'work-experience', 'education', 'reading', 'media', 'project-journal', 'posts'];

  let index = null;

  // Load index
  fetch('/index.json')
    .then(r => r.json())
    .then(data => { index = data; })
    .catch(() => {});

  // Keyboard shortcut: / to focus from anywhere
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape' && document.activeElement === input) {
      input.blur();
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q || !index) {
      results.innerHTML = '';
      if (hint) hint.hidden = !q;
      return;
    }
    if (hint) hint.hidden = true;

    const words = q.split(/\s+/);
    const matches = index.filter(page => {
      const haystack = (page.title + ' ' + page.desc + ' ' + (page.tags || []).join(' ')).toLowerCase();
      return words.every(w => haystack.includes(w));
    });

    if (!matches.length) {
      results.innerHTML = '<p class="search-empty">No nodes found.</p>';
      return;
    }

    // Group by section
    const groups = {};
    matches.forEach(m => {
      if (!groups[m.section]) groups[m.section] = [];
      groups[m.section].push(m);
    });

    let html = '';
    sectionOrder.forEach(section => {
      const pages = groups[section];
      if (!pages) return;
      html += `<div class="search-group">`;
      html += `<h2 class="search-group__title">${sectionLabels[section] || section}</h2>`;
      pages.forEach(page => {
        html += `<a class="search-result" href="${page.url}">`;
        html += `<span class="search-result__title">${highlight(page.title, words)}</span>`;
        if (page.desc) html += `<span class="search-result__desc">${highlight(page.desc, words)}</span>`;
        html += `</a>`;
      });
      html += `</div>`;
    });

    results.innerHTML = html;
  });

  function highlight(text, words) {
    let result = escapeHtml(text);
    words.forEach(w => {
      if (!w) return;
      const re = new RegExp('(' + escapeRegex(w) + ')', 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
})();
