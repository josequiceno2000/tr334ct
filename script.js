document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger__icon');
  const closeIcon = document.querySelector('.hamburger__icon--close');
  const hamburger = document.querySelector('.hamburger');
  const hamburgerLinks = document.querySelectorAll('.hamburger__link');

  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const testimonials = document.querySelectorAll('.testimonial');

  let currentIndex = 0;
  const totalTestimonials = testimonials.length;

  // Updates carousel position
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next Button
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalTestimonials - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Prev Button
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalTestimonials - 1;
    }
    updateCarousel();
  });
  
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