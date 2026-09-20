// Loomilamps — minimal interaction layer
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a nav link is chosen
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Physically "depress" the primary CTA on press, on top of the CSS hover state
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('pointerdown', () => btn.classList.add('is-pressed'));
    btn.addEventListener('pointerup', () => btn.classList.remove('is-pressed'));
    btn.addEventListener('pointerleave', () => btn.classList.remove('is-pressed'));
  });

  // Product gallery: swap the active thumbnail + caption
  const galleryThumbs = document.getElementById('galleryThumbs');
  const galleryMain = document.getElementById('galleryMain');
  const galleryCaption = document.getElementById('galleryCaption');
  const galleryMainImg = document.getElementById('galleryMainImg');

  if (galleryThumbs && galleryMain) {
    galleryThumbs.querySelectorAll('.gallery-thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        galleryThumbs.querySelectorAll('.gallery-thumb').forEach((t) => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
        const caption = thumb.dataset.caption || '';
        galleryMain.dataset.caption = caption;
        if (galleryCaption) {
          galleryCaption.textContent = caption;
        }
        const label = galleryMain.querySelector('.placeholder-label');
        if (label) label.textContent = `${caption} — photo coming soon`;
        if (thumb.dataset.src && galleryMainImg) {
          galleryMainImg.src = thumb.dataset.src;
        }
      });
    });
  }
});
