// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// "View Work" panels — accordion behavior
document.querySelectorAll('.view-work-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const panel = document.getElementById(targetId);
    const slide = btn.closest('.work-slide');
    const isOpen = slide.classList.contains('open');

    document.querySelectorAll('.work-slide').forEach(s => s.classList.remove('open'));
    document.querySelectorAll('.work-panel').forEach(p => { p.style.maxHeight = null; });

    if (!isOpen) {
      slide.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      setTimeout(() => { slide.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150);
    }
  });
});

// Lightbox
function openLightbox(src) {
  const img = document.getElementById('lightbox-img');
  const box = document.getElementById('lightbox');
  if (img && box) {
    img.src = src;
    box.classList.add('active');
  }
  if (window.event) window.event.stopPropagation();
}
function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (box) box.classList.remove('active');
}
const lightboxClose = document.querySelector('.lightbox-close');
if (lightboxClose) {
  lightboxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });
}
const lightboxImg = document.getElementById('lightbox-img');
if (lightboxImg) {
  lightboxImg.addEventListener('click', (e) => e.stopPropagation());
}
