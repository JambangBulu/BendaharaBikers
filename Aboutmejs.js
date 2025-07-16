// Simple, dependency‑free slider
(() => {
  const slider = document.getElementById('slider');
  const prev   = document.querySelector('.prev');
  const next   = document.querySelector('.next');

  // Distance to move = card width + gap (1.5rem = 24 px)
  const getJump = () =>
    slider.querySelector('.card').getBoundingClientRect().width + 24;

  next.addEventListener('click', () => {
    slider.scrollBy({ left:  getJump(), behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -getJump(), behavior: 'smooth' });
  });
})();
// JavaScript Document