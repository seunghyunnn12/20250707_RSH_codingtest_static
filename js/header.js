// 햄버거 버튼, 메뉴, 배경 요소, 메뉴 항목들 선택
const toggleBtn = document.querySelector(".toggle-btn");
const gnb = document.querySelector(".gnb");
const dimmed = document.querySelector(".dimmed");
const menuItems = document.querySelectorAll(".menu-item > a");
const menuItemWrappers = document.querySelectorAll(".menu-item");
const depth2Links = document.querySelectorAll(".depth2 a");

// 햄버거 버튼 클릭 시 메뉴와 dimmed 배경 표시/숨김
toggleBtn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  dimmed.classList.toggle("active");
});

// dimmed 배경 클릭 시 메뉴 닫기
dimmed.addEventListener("click", () => {
  gnb.classList.remove("active");
  dimmed.classList.remove("active");
  menuItemWrappers.forEach(item => item.classList.remove("active"));
});

// 모바일에서 1depth 메뉴 클릭 시 해당 메뉴 열고 첫 번째 2depth로 이동
menuItems.forEach(menu => {
  menu.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault(); 
      const parent = menu.closest(".menu-item");

      menuItemWrappers.forEach(item => item.classList.remove("active"));
      parent.classList.add("active");
    }
  });
});

// 모바일에서 2depth 항목 클릭 시 메뉴 닫기
depth2Links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      gnb.classList.remove("active");
      dimmed.classList.remove("active");
      menuItemWrappers.forEach(item => item.classList.remove("active"));
    }
  });
});
