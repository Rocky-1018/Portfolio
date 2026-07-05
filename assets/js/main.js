// ============================================================
// Render project cards from PROJECTS (assets/js/projects-data.js)
// ============================================================
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (!window.PROJECTS || window.PROJECTS.length === 0) {
    grid.innerHTML = '<div class="project-placeholder">No projects added yet — add one in assets/js/projects-data.js</div>';
    return;
  }

  grid.innerHTML = window.PROJECTS.map(project => {
    const highlights = (project.highlights || [])
      .map(h => `<li>${escapeHtml(h)}</li>`)
      .join('');

    const tech = (project.tech || [])
      .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
      .join('');

    const links = [];
    if (project.links && project.links.live) {
      links.push(`<a class="project-link" href="${escapeAttr(project.links.live)}" target="_blank" rel="noopener">Live Site ↗</a>`);
    }
    if (project.links && project.links.github) {
      links.push(`<a class="project-link" href="${escapeAttr(project.links.github)}" target="_blank" rel="noopener">GitHub ↗</a>`);
    }

    return `
      <div class="project-card ${project.featured ? 'featured' : ''}">
        <div class="project-card-inner">
          <div class="project-top">
            ${project.featured ? '<span class="project-badge">Featured</span>' : '<span></span>'}
            <span class="project-period">${escapeHtml(project.period || '')}</span>
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-tagline">${escapeHtml(project.tagline || '')}</p>
          ${project.role ? `<p class="project-role">${escapeHtml(project.role)}</p>` : ''}
          <p class="project-description">${escapeHtml(project.description || '')}</p>
          ${highlights ? `<ul class="project-highlights">${highlights}</ul>` : ''}
          ${tech ? `<div class="project-tech">${tech}</div>` : ''}
          ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// Render certification cards from CERTIFICATIONS (assets/js/certifications-data.js)
// ============================================================
function renderCertifications() {
  const grid = document.getElementById('certificationsGrid');
  if (!grid) return;

  if (!window.CERTIFICATIONS || window.CERTIFICATIONS.length === 0) {
    grid.innerHTML = '<div class="project-placeholder">No certifications added yet — add one in assets/js/certifications-data.js</div>';
    return;
  }

  grid.innerHTML = window.CERTIFICATIONS.map(cert => {
    const statusClass = cert.status === 'Completed' ? 'status-completed' : 'status-progress';
    const titleContent = cert.link
      ? `<a href="${escapeAttr(cert.link)}" target="_blank" rel="noopener">${escapeHtml(cert.title)}</a>`
      : escapeHtml(cert.title);

    return `
      <div class="cert-card">
        <div class="cert-top">
          <span class="cert-status ${statusClass}">${escapeHtml(cert.status || '')}</span>
          <span class="cert-period">${escapeHtml(cert.period || '')}</span>
        </div>
        <h3 class="cert-title">${titleContent}</h3>
        <p class="cert-provider">${escapeHtml(cert.provider || '')}</p>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}

// ============================================================
// Mobile nav toggle
// ============================================================
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('menu-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('menu-open');
    });
  });

  // Active link highlighting on scroll
  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

// ============================================================
// Reveal-on-scroll animation
// ============================================================
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCertifications();
  initNav();
  initReveal();
  document.getElementById('year').textContent = new Date().getFullYear();
});
