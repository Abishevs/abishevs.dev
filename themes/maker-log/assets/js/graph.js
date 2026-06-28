(function () {
  const data = window.__graphData;
  if (!data || !data.nodes.length) return;

  const tracks = window.__graphTracks || {};
  const colors = {};
  const sectionLabels = {};
  Object.keys(tracks).forEach(s => { colors[s] = tracks[s].color; sectionLabels[s] = tracks[s].label; });

  const container = document.getElementById('graph-container');
  const svgEl = document.getElementById('graph-svg');
  const svg = d3.select(svgEl);
  const width = container.clientWidth;
  const height = Math.max(500, window.innerHeight - 280);
  svg.attr('width', width).attr('height', height);

  // State
  const activeFilters = new Set(Object.keys(colors));
  let focusedNode = null;

  // Build structures
  const nodeMap = new Map(data.nodes.map(n => [n.id, n]));
  const allEdges = data.edges.filter(e => nodeMap.has(e.source) && nodeMap.has(e.target));

  // Compute degree
  data.nodes.forEach(n => { n.degree = 0; });
  allEdges.forEach(e => {
    nodeMap.get(e.source).degree = (nodeMap.get(e.source).degree || 0) + 1;
    nodeMap.get(e.target).degree = (nodeMap.get(e.target).degree || 0) + 1;
  });

  // Zoom
  const g = svg.append('g');
  const zoom = d3.zoom()
    .scaleExtent([0.3, 4])
    .on('zoom', (event) => g.attr('transform', event.transform));
  svg.call(zoom);

  // Simulation
  const simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(allEdges).id(d => d.id).distance(90))
    .force('charge', d3.forceManyBody().strength(-180))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => nodeRadius(d) + 4));

  // Draw
  const linkG = g.append('g');
  const nodeG = g.append('g');
  const labelG = g.append('g');

  let linkEls = linkG.selectAll('line').data(allEdges).join('line')
    .attr('stroke', '#374151').attr('stroke-width', 1.5);

  let nodeEls = nodeG.selectAll('circle').data(data.nodes).join('circle')
    .attr('r', d => nodeRadius(d))
    .attr('fill', d => colors[d.section] || '#6B7280')
    .attr('stroke', '#111827').attr('stroke-width', 1.5)
    .style('cursor', 'pointer')
    .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

  let labelEls = labelG.selectAll('text').data(data.nodes.filter(d => d.degree > 0)).join('text')
    .text(d => d.title)
    .attr('font-size', '9px').attr('fill', '#9CA3AF')
    .attr('dx', 12).attr('dy', 4)
    .style('pointer-events', 'none');

  // Tooltip
  const tooltip = d3.select(container).append('div')
    .attr('class', 'graph-tooltip').style('opacity', 0);

  nodeEls.on('mouseover', function (event, d) {
    const edgeCount = allEdges.filter(e => e.source === d || e.target === d).length;
    tooltip.transition().duration(100).style('opacity', 1);
    tooltip.html(
      `<strong>${d.title}</strong>` +
      `<span class="graph-tooltip__section">${sectionLabels[d.section] || d.section}</span>` +
      (d.desc ? `<span class="graph-tooltip__desc">${d.desc}</span>` : '') +
      `<span class="graph-tooltip__meta">${edgeCount} connection${edgeCount !== 1 ? 's' : ''}</span>`
    );
    positionTooltip(event);
    d3.select(this).transition().duration(100).attr('r', nodeRadius(d) + 3);
  })
  .on('mousemove', positionTooltip)
  .on('mouseout', function (event, d) {
    tooltip.transition().duration(100).style('opacity', 0);
    d3.select(this).transition().duration(100).attr('r', nodeRadius(d));
  })
  .on('click', function (event, d) {
    event.stopPropagation();
    if (focusedNode === d) {
      // Double-click same node → navigate
      window.location.href = d.id;
    } else {
      focusNode(d);
    }
  });

  // Click background to unfocus
  svg.on('click', () => unfocus());

  function positionTooltip(event) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left + 12;
    const y = event.clientY - rect.top - 8;
    tooltip.style('left', x + 'px').style('top', y + 'px');
  }

  function nodeRadius(d) { return Math.max(5, 4 + (d.degree || 0) * 1.5); }

  // Tick
  simulation.on('tick', () => {
    linkEls.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    nodeEls.attr('cx', d => d.x).attr('cy', d => d.y);
    labelEls.attr('x', d => d.x).attr('y', d => d.y);
  });

  // ─── FILTERING ───
  document.querySelectorAll('.graph-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      if (activeFilters.has(section)) {
        activeFilters.delete(section);
        btn.classList.remove('is-active');
      } else {
        activeFilters.add(section);
        btn.classList.add('is-active');
      }
      applyVisibility();
    });
  });

  function applyVisibility() {
    nodeEls.attr('opacity', d => activeFilters.has(d.section) ? 1 : 0.08)
      .style('pointer-events', d => activeFilters.has(d.section) ? 'all' : 'none');
    linkEls.attr('opacity', e =>
      activeFilters.has(e.source.section) && activeFilters.has(e.target.section) ? 0.7 : 0.05
    );
    labelEls.attr('opacity', d => activeFilters.has(d.section) ? 1 : 0);
  }

  // ─── SEARCH ───
  const searchInput = document.getElementById('graph-search');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) {
      nodeEls.classed('graph-node--highlighted', false).attr('opacity', d => activeFilters.has(d.section) ? 1 : 0.08);
      labelEls.attr('opacity', d => activeFilters.has(d.section) ? 1 : 0);
      return;
    }
    const matches = data.nodes.filter(d => d.title.toLowerCase().includes(q));
    const matchIds = new Set(matches.map(d => d.id));
    nodeEls.attr('opacity', d => matchIds.has(d.id) ? 1 : 0.1)
      .classed('graph-node--highlighted', d => matchIds.has(d.id));
    labelEls.attr('opacity', d => matchIds.has(d.id) ? 1 : 0.1);
    // Center on first match
    if (matches.length === 1) centerOn(matches[0]);
  });

  function centerOn(d) {
    const transform = d3.zoomIdentity.translate(width / 2 - d.x, height / 2 - d.y);
    svg.transition().duration(500).call(zoom.transform, transform);
  }

  // ─── FOCUS MODE ───
  function focusNode(d) {
    focusedNode = d;
    const neighbors = new Set([d.id]);
    allEdges.forEach(e => {
      if (e.source === d || e.source.id === d.id) neighbors.add(typeof e.target === 'object' ? e.target.id : e.target);
      if (e.target === d || e.target.id === d.id) neighbors.add(typeof e.source === 'object' ? e.source.id : e.source);
    });

    nodeEls.transition().duration(200)
      .attr('opacity', n => neighbors.has(n.id) ? 1 : 0.08)
      .attr('r', n => n === d ? nodeRadius(n) + 4 : nodeRadius(n));
    linkEls.transition().duration(200)
      .attr('opacity', e => (e.source === d || e.target === d) ? 1 : 0.04)
      .attr('stroke', e => (e.source === d || e.target === d) ? colors[d.section] : '#374151')
      .attr('stroke-width', e => (e.source === d || e.target === d) ? 2.5 : 1.5);
    labelEls.transition().duration(200)
      .attr('opacity', n => neighbors.has(n.id) ? 1 : 0);
  }

  function unfocus() {
    if (!focusedNode) return;
    focusedNode = null;
    nodeEls.transition().duration(200)
      .attr('opacity', d => activeFilters.has(d.section) ? 1 : 0.08)
      .attr('r', d => nodeRadius(d));
    linkEls.transition().duration(200)
      .attr('opacity', e => activeFilters.has(e.source.section) && activeFilters.has(e.target.section) ? 0.7 : 0.05)
      .attr('stroke', '#374151').attr('stroke-width', 1.5);
    labelEls.transition().duration(200)
      .attr('opacity', d => activeFilters.has(d.section) ? 1 : 0);
  }

  // ─── DRAG ───
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }

  // ─── RESIZE ───
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = Math.max(500, window.innerHeight - 280);
    svg.attr('width', w).attr('height', h);
    simulation.force('center', d3.forceCenter(w / 2, h / 2));
    simulation.alpha(0.3).restart();
  });
})();
