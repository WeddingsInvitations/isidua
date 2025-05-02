<script>
  window.onload = function () {
    // Animasi logo container (milik kamu)
    setTimeout(() => {
      const logo = document.querySelector('.logo-container');
      if (logo) logo.classList.add('animate');
    }, 500);

    // Animasi foto pasangan
    const photo = document.querySelector('.couple-photo');
    if (photo) {
      setTimeout(() => {
        photo.style.opacity = '1';
        photo.style.transform = 'translateY(0)';
      }, 300);
    }
  };

  // Animasi scroll masuk (kecuali logo)
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-in");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('logo-container')) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  });
</script>
