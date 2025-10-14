const navbar = document.querySelector(".navbar-container");

console.log("Navbar element found:", navbar); // Check if element exists

window.addEventListener("scroll", () => {
  console.log("Scroll Y:", window.scrollY); // Check scroll position

  if (window.scrollY > 50) {
    console.log("Adding scrolled class");
    navbar.classList.add("scrolled");
  } else {
    console.log("Removing scrolled class");
    navbar.classList.remove("scrolled");
  }
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
