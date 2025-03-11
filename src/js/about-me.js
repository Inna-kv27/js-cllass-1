import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const aboutSwiperContainer = document.querySelector('.skills-slider');

if (aboutSwiperContainer) {
  const aboutSwiper = new Swiper(aboutSwiperContainer, {
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1,
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: true,
    speed: 500,
    navigation: {
      nextEl: '.skills-button',
    },
    breakpoints: { 768: { slidesPerView: 3 }, 1440: { slidesPerView: 6 } },
  });
}
