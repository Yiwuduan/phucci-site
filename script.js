// reveal on scroll
(() => {
  const els = document.querySelectorAll('.work, .follow');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();

// modal video player
(() => {
  const modal = document.getElementById('modal');
  const mount = document.getElementById('modal-mount');
  const close = modal.querySelector('.modal-close');

  const open = (id) => {
    mount.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const shut = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    mount.innerHTML = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.work').forEach(work => {
    const id = work.dataset.video;
    work.querySelector('.work-art').addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      open(id);
    });
  });
  close.addEventListener('click', shut);
  modal.addEventListener('click', (e) => { if (e.target === modal) shut(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') shut(); });
})();

// scroll-link from hero
(() => {
  const scroll = document.querySelector('.scroll');
  if (!scroll) return;
  scroll.style.cursor = 'pointer';
  scroll.addEventListener('click', () => {
    document.querySelector('.works').scrollIntoView({ behavior: 'smooth' });
  });
})();
