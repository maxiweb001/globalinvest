// Menu
let menu = document.querySelector(".menu-icon");
let navmenu = document.querySelector(".nav-menu");

menu.onclick = () => {
  menu.classList.toggle("move");
  navmenu.classList.toggle("menu-active");
};

window.onscroll = () => {
  menu.classList.remove("move");
  navmenu.classList.remove("menu-active");
};

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
    720: {
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
      slidesPerView: 4,
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
