const navbar = document.querySelector('.navbar-container');

console.log('Navbar element found:', navbar); // Check if element exists

window.addEventListener('scroll', () => {
  console.log('Scroll Y:', window.scrollY); // Check scroll position
  
  if (window.scrollY > 50) {
    console.log('Adding scrolled class');
    navbar.classList.add('scrolled');
  } else {
    console.log('Removing scrolled class');
    navbar.classList.remove('scrolled');
  }
});