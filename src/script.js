document.addEventListener('DOMContentLoaded', () => {
  const linkButtons = document.querySelectorAll('.cssbuttons-io-button, .Btn');

  linkButtons.forEach(btn => {
    const href = btn.getAttribute('href') || btn.dataset.href || btn.getAttribute('data-href');
    if (!href) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (/^https?:\/\//i.test(href)) {
        window.open(href, '_blank', 'noopener');
      } else {
        window.location.href = href;
      }
    });

    btn.setAttribute('role', btn.getAttribute('role') || 'button');
    if (btn.tabIndex < 0) btn.tabIndex = 0;
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});