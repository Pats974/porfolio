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

  const slides = document.querySelectorAll('.hero-slider img');
  let currentSlide = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  window.addEventListener('scroll', () => {
    const slider = document.querySelector('.hero-slider');
    if (slider) {
      slider.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
    }
  });
});
