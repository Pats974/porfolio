document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => observer.observe(fader));

  window.addEventListener('scroll', () => {
    const video = document.querySelector('.hero video');
    if (video) {
      video.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
    }
  });
});
