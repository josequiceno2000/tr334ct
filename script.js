document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger__icon');
  const closeIcon = document.querySelector('.hamburger__icon--close');
  const hamburger = document.querySelector('.hamburger');
  const hamburgerLinks = document.querySelectorAll('.hamburger__link');
  
  hamburgerIcon.addEventListener('click', () => {
    hamburger.classList.add('active');
  });

  if (closeIcon) {
    closeIcon.addEventListener('click', () => {
      hamburger.classList.remove('active');
    });
  }

  hamburgerLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
    })
  })
});

console.log(`working`)