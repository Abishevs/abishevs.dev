(function () {
  const data = window.__graphData;
  if (!data || !data.nodes.length) return;

  const colors = {
    'projects': '#38BDF8',
    'work-experience': '#22C55E',
    'education': '#F59E0B',
    'technologies': '#9F7AEA',
    'workflows': '#EC4899',
    'books': '#FB923C',
    'project-journal': '#6EE7B7',
    'posts': '#E5E7EB'
  };

  const container = document.getElementById('graph-container');
  const svg = d3.select('#graph-svg');
  const width = container.clientWidth;
  const height = Math.max(500, window.innerHeight - 300);

  svg.attr('width', width).attr('height', height);

  // Build node map for edge resolution
  const nodeMap = new Map(data.nodes.map(n => [n.id, n]));

  // Filter edges to only those with valid endpoints
  const edges = data.edges.filter(e => nodeMap.has(e.source) && nodeMap.has(e.target));

  const simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(20));

  // Edges
  const link = svg.append('g')
    .attr('class', 'graph-links')
    .selectAll('line')
    .data(edges)
    .join('line')
    .attr('stroke', '#374151')
    .attr('stroke-width', 1.5);

  // Nodes
  const node = svg.append('g')
    .attr('class', 'graph-nodes')
    .selectAll('circle')
    .data(data.nodes)
    .join('circle')
    .attr('r', d => edges.some(e => e.source === d || e.target === d) ? 8 : 5)
    .attr('fill', d => colors[d.section] || '#6B7280')
    .attr('stroke', '#111827')
    .attr('stroke-width', 1.5)
    .style('cursor', 'pointer')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  // Tooltip
  const tooltip = d3.select(container).append('div')
    .attr('class', 'graph-tooltip')
    .style('opacity', 0);

  node.on('mouseover', function (event, d) {
    tooltip.transition().duration(150).style('opacity', 1);
    tooltip.html(d.title)
      .style('left', (event.offsetX + 12) + 'px')
      .style('top', (event.offsetY - 8) + 'px');
    d3.select(this).attr('r', d =>
      edges.some(e => e.source === d || e.target === d) ? 11 : 7
    );
  })
  .on('mousemove', function (event) {
    tooltip.style('left', (event.offsetX + 12) + 'px')
      .style('top', (event.offsetY - 8) + 'px');
  })
  .on('mouseout', function (event, d) {
    tooltip.transition().duration(150).style('opacity', 0);
    d3.select(this).attr('r', d =>
      edges.some(e => e.source === d || e.target === d) ? 8 : 5
    );
  })
  .on('click', function (event, d) {
    window.location.href = d.id;
  });

  // Labels for connected nodes
  const label = svg.append('g')
    .attr('class', 'graph-labels')
    .selectAll('text')
    .data(data.nodes.filter(d => edges.some(e => e.source === d || e.target === d || e.source.id === d.id || e.target.id === d.id)))
    .join('text')
    .text(d => d.title)
    .attr('font-size', '9px')
    .attr('fill', '#9CA3AF')
    .attr('dx', 12)
    .attr('dy', 4);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
    label
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // Resize
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = Math.max(500, window.innerHeight - 300);
    svg.attr('width', w).attr('height', h);
    simulation.force('center', d3.forceCenter(w / 2, h / 2));
    simulation.alpha(0.3).restart();
  });
})();
