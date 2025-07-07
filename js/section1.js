// Swiper 슬라이드 기능 초기화: 자동 재생, 페이지네이션 활성화, 루프 설정
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
