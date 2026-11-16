const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const backdropSections = document.querySelectorAll('main section[data-backdrop]');

if ('IntersectionObserver' in window && backdropSections.length > 0) {
  const backdropObserver = new IntersectionObserver(
    (entries) => {
      const activeSection = entries.find((entry) => entry.isIntersecting);

      if (activeSection) {
        document.body.dataset.backdrop = activeSection.target.dataset.backdrop;
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );

  backdropSections.forEach((section) => backdropObserver.observe(section));
}
