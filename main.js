import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./styles/main.scss";
import { disableScroll } from "./js/disable-scroll";
import { enableScroll } from "./js/enable-scroll";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

// import styles bundle

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");

    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      disableScroll();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      enableScroll();
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      enableScroll();
    });
  });
})();

let swiper = new Swiper(".snapslider-overflow", {
  cssMode: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  wrapperClass: "snapslider-scroll",
  slideClass: "snapslider-card",
  slidesPerView: "auto",
  mousewheel: true,
  keyboard: true,
});

const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);

// gsap animathion
gsap.fromTo(
  ".logo",
  { x: -200, opacity: 0 },
  { duration: 1, delay: 0.5, x: 0, opacity: 1 }
);
gsap.fromTo(
  ".nav__list ",
  { x: 500, opacity: 0 },
  { duration: 1, delay: 0.7, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero__title",
  { x: 0, opacity: 0 },
  { duration: 1.5, delay: 1.5, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero__quto",
  { x: -200, opacity: 0 },
  { duration: 1.5, delay: 0.7, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero__sub-info",
  { x: -200, opacity: 0 },
  { duration: 1.5, delay: 1.2, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero__image",
  { x: 0, opacity: 0 },
  { duration: 2.5, delay: 1.2, x: 0, opacity: 1 }
);

gsap.from(".bio__title", {
  scrollTrigger: ".bio__title", // start the animation when ".box" enters the viewport (once)
  opacity: 1,
});

gsap.to(".bio__title", {
  scrollTrigger: ".bio__title", // start the animation when ".box" enters the viewport (once)
  opacity: 1,
});
