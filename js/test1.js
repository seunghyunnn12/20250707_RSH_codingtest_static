// Swiper 슬라이더 초기화 설정
// - 기본: 1장씩 자동 슬라이드
// - 768px 이상: 2장 표시, 자동 슬라이드 해제
// - 1280px 이상: 3장 표시, 자동 슬라이드 다시 활성화

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
      autoplay: false,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    }
  }
});
