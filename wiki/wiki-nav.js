(() => {
  const nav = document.querySelector('.wiki-nav');
  if (!nav) return;

  const root = document.documentElement;
  const textSizeControls = nav.querySelectorAll('[data-text-size]');
  const defaultFontSize = 14;
  const minFontSize = 11;
  const maxFontSize = 20;
  const defaultContentWidth = 680;
  const maxContentWidth = 820;
  const contentWidthStep = 40;
  const storageKey = 'wikiTextSize';

  const clamp = (value) => Math.min(maxFontSize, Math.max(minFontSize, value));

  const applyTextSize = (size) => {
    const nextSize = clamp(size);
    const nextContentWidth = Math.min(
      maxContentWidth,
      defaultContentWidth + Math.max(0, nextSize - defaultFontSize) * contentWidthStep
    );

    root.style.setProperty('--root-font-size', `${nextSize}px`);
    root.style.setProperty('--markdown-body-max-width', `${nextContentWidth}px`);
    localStorage.setItem(storageKey, String(nextSize));
  };

  const savedTextSize = Number(localStorage.getItem(storageKey));
  if (!Number.isNaN(savedTextSize) && savedTextSize > 0) {
    applyTextSize(savedTextSize);
  }

  textSizeControls.forEach((control) => {
    control.addEventListener('click', () => {
      const currentSize = Number.parseFloat(getComputedStyle(root).getPropertyValue('--root-font-size')) || defaultFontSize;
      const direction = control.dataset.textSize === 'increase' ? 1 : -1;
      applyTextSize(currentSize + direction);
    });
  });

  let lastScrollY = window.scrollY;

  const updateNav = () => {
    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY <= 0;
    const isScrollingUp = currentScrollY < lastScrollY;

    nav.classList.toggle('is-visible', isAtTop || isScrollingUp);
    lastScrollY = Math.max(currentScrollY, 0);
  };

  nav.classList.add('is-visible');
  window.addEventListener('scroll', updateNav, { passive: true });
})();
