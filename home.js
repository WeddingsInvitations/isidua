<script>
  window.addEventListener('scroll', () => {
    const photo = document.querySelector('.couple-photo');
    const trigger = window.innerHeight * 0.8;

    if (photo.getBoundingClientRect().top < trigger) {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    }
  });
</script>
