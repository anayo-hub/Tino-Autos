/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

// validate if content exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Function to close menu when clicking outside of it
function closeMenu(event) {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove("show-menu");
  }
}

// Add event listener to the body
document.body.addEventListener("click", closeMenu);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we lick on each navlink we remove the show-enu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((nav) => nav.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto", // Set slidesPerView to "auto" for dynamic sizing
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
  autoplay: {
    delay: 5000,
    disbalOnIteraction: false,
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

// Initially hide items except those with class 'web-design'
// mixerFeatured.filter(".audi");

/* Link active featured */

const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured");
}

linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/
function scrollup() {
  const scrollup = document.getElementById("scroll-up");

  if (this.scrollY >= 350) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");

      // document
      //   .querySelector(`.nav__menu a[href*=${sectionId}]`)
      //   .classList.remove("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(
  `.home__title, .popular__container, .features__img, .featred__filters`
);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 100, interval: 100, origin: "bottom" });
sr.reveal(`.about__group, .offer__data`, { origin: "left" });
sr.reveal(`.about__data, .offer__img`, { delay: 800, origin: "right" });
sr.reveal(`.features__map `, { delay: 100, origin: "bottom" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logos__content, .footer__content`, {
  interval: 100,
});
