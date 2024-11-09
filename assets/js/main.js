// Toggle the navigation menu on mobile
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


