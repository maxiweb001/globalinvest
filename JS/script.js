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
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  breakpoints: {
    475: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Close all others first (only one open at a time)
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.classList.remove("show");
        item.querySelector(".faq-icon").textContent = "+";
      }
    });

    // Toggle this one
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".faq-icon");

    if (question.classList.contains("active")) {
      answer.classList.add("show");
      icon.textContent = "−";
    } else {
      answer.classList.remove("show");
      icon.textContent = "+";
    }
  });
});
