import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./styles/main.scss";

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
