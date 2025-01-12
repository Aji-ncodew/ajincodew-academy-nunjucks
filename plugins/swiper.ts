import Swiper from "swiper";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar,} from "swiper/modules";

document.addEventListener("alpine:init", () => {
  Alpine.directive("swiper", (el) => {
    new Swiper(el as HTMLElement, {
      // Install modules
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      autoplay: {
        delay: 4300,
      },
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 7,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
});
