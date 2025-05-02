// Animasi logo container//
window.onload = function () {
  setTimeout(() => {
    document.querySelector('.logo-container').classList.add('animate');
  }, 500); // Delay 0.5 detik
};

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // hanya animasi 1x
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
