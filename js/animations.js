/*
 * Optional ambient pointer parallax.
 * Disabled on touch devices and when reduced motion is requested.
 */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const stage = document.querySelector('.hero-visual');
  const medallion = document.querySelector('.logo-medallion');
  if (!stage || !medallion) return;

  let raf = null;
  stage.addEventListener('pointermove', (event) => {
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 10;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      medallion.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  });
  stage.addEventListener('pointerleave', () => { medallion.style.transform = ''; });
})();
