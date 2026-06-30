const $ = (selector) => document.querySelector(selector);

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function el(tag, className, html = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

function renderProfile() {
  const { profile } = portfolioData;
  $('#heroLead').textContent = profile.intro;
  $('#heroDetail').textContent = profile.detail;
  $('#educationTitle').textContent = profile.educationTitle;
  $('#educationMajor').textContent = profile.educationMajor;
  $('#educationPeriod').textContent = profile.educationPeriod;
  $('#gmailHero').href = profile.gmail;
  $('#gmailContact').href = profile.gmail;
}

function renderSkills() {
  const root = $('#skillGrid');
  portfolioData.skills.forEach((skill) => {
    const card = el('article', 'skill-card reveal');
    card.innerHTML = `
      <div>
        <div class="skill-icon">${escapeHtml(skill.icon)}</div>
        <h3>${escapeHtml(skill.title)}</h3>
      </div>
      <p>${escapeHtml(skill.description)}</p>
    `;
    root.appendChild(card);
  });
}

function splitJourney(item) {
  const match = item.match(/^([A-Za-z0-9가-힣.,:\-–—\s]+?)(?=\s(?:Entered|Obtained|Enlisted|Honorably|Earned|Elected|Served|Participated|Won|Advanced|Placed|Instructor|Korea|Appointed|Second|Spring))/);
  if (!match) return { date: 'Journey', text: item };
  return { date: match[1].trim(), text: item.slice(match[1].length).trim() };
}

function renderJourney() {
  const root = $('#journeyList');
  portfolioData.journey.forEach((item) => {
    const { date, text } = splitJourney(item);
    const row = el('article', 'timeline-item reveal');
    row.innerHTML = `<div class="timeline-date">${escapeHtml(date)}</div><div class="timeline-text">${escapeHtml(text)}</div>`;
    root.appendChild(row);
  });
}

function projectLinks(project) {
  if (!project.links || !project.links.length) return '';
  return `<div class="modal-links">${project.links.map((link) => `
    <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} →</a>
  `).join('')}</div>`;
}

function mediaMarkup(project) {
  if (project.video && /\.(mp4|webm|ogg)$/i.test(project.video)) {
    return `<video src="${escapeHtml(project.video)}" controls muted playsinline poster="${escapeHtml(project.image || '')}"></video>`;
  }
  return `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project cover" />`;
}

function renderProjects() {
  const root = $('#projectGrid');
  portfolioData.projects.forEach((project, index) => {
    const card = el('button', `project-card reveal ${project.featured ? 'featured' : ''}`);
    card.type = 'button';
    card.setAttribute('data-project-index', String(index));
    const tags = (project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
    card.innerHTML = `
      <div class="project-image">${mediaMarkup(project)}</div>
      <div class="project-body">
        <div class="period">${escapeHtml(project.period || project.type || 'Project')}</div>
        <h3>${escapeHtml(project.shortTitle || project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-meta">${tags}</div>
        <span class="open-detail">Read project detail →</span>
      </div>
    `;
    card.addEventListener('click', () => openProject(index));
    root.appendChild(card);
  });
}

function sectionMarkup(section) {
  const body = (section.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const items = section.items && section.items.length
    ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';
  const code = section.code ? `<pre><code>${escapeHtml(section.code)}</code></pre>` : '';
  return `<section class="detail-section"><h3>${escapeHtml(section.heading)}</h3>${body}${items}${code}</section>`;
}

function openProject(index) {
  const project = portfolioData.projects[index];
  const tags = (project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  $('#modalContent').innerHTML = `
    <div class="modal-hero">
      <div class="modal-media">${mediaMarkup(project)}</div>
      <div>
        <p class="eyebrow">${escapeHtml(project.type || 'Project')}</p>
        <h2 id="modalTitle">${escapeHtml(project.title)}</h2>
        <p class="modal-subtitle">${escapeHtml(project.subtitle || project.description)}</p>
        <p class="period">${escapeHtml(project.period || '')}</p>
        <div class="project-meta">${tags}</div>
        ${projectLinks(project)}
      </div>
    </div>
    <div class="modal-detail">
      ${(project.sections || []).map(sectionMarkup).join('')}
    </div>
  `;
  const modal = $('#projectModal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('.modal-close').focus();
}

function closeModal() {
  const modal = $('#projectModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function initModal() {
  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initNav() {
  const toggle = $('.nav-toggle');
  const nav = $('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initGlow() {
  const glow = $('.cursor-glow');
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function duplicateMarquee() {
  const track = document.querySelector('.marquee div');
  if (track) track.innerHTML += track.innerHTML;
}

renderProfile();
renderSkills();
renderJourney();
renderProjects();
duplicateMarquee();
initModal();
initReveal();
initNav();
initGlow();
$('#year').textContent = new Date().getFullYear();
