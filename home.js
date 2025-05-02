window.addEventListener('scroll', () => {
  const photo = document.querySelector('.couple-photo');
  const trigger = window.innerHeight * 0.8;

  if (photo.getBoundingClientRect().top < trigger) {
    photo.classList.add('visible');
  }
});
