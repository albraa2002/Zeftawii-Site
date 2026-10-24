export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
    const track = root.querySelector('.track') as HTMLElement;
    const cards = Array.from(track.children) as HTMLElement[];
    const prev = root.querySelector('[data-dir="prev"]') as HTMLButtonElement;
    const next = root.querySelector('[data-dir="next"]') as HTMLButtonElement;
    const dotsBox = root.querySelector('.car-dots') as HTMLElement;
    const sign = () => (getComputedStyle(track).direction === 'rtl' ? -1 : 1);
    const step = () => (cards.length > 1 ? Math.abs(cards[1].offsetLeft - cards[0].offsetLeft) : track.clientWidth);
    const maxScroll = () => track.scrollWidth - track.clientWidth;
    const pos = () => Math.abs(track.scrollLeft);
    const goTo = (i: number) => track.scrollTo({ left: sign() * Math.min(i * step(), maxScroll()), behavior: 'smooth' });
    // dots: one per scroll position
    const pages = () => Math.max(1, Math.round(maxScroll() / step()) + 1);
    let dots: HTMLButtonElement[] = [];
    const buildDots = () => {
      dotsBox.innerHTML = '';
      dots = Array.from({ length: pages() }, (_, i) => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'car-dot'; b.setAttribute('aria-label', String(i + 1));
        b.addEventListener('click', () => goTo(i));
        dotsBox.appendChild(b); return b;
      });
    };
    const update = () => {
      const p = pos(), m = maxScroll();
      prev.disabled = p < 10;
      next.disabled = p > m - 10;
      const idx = p > m - 10 ? dots.length - 1 : Math.round(p / step());
      dots.forEach((d, i) => d.classList.toggle('on', i === idx));
    };
    prev.addEventListener('click', () => goTo(Math.round(pos() / step()) - 1));
    next.addEventListener('click', () => goTo(Math.round(pos() / step()) + 1));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    window.addEventListener('resize', () => { buildDots(); update(); });
    buildDots(); update();
  });
}
