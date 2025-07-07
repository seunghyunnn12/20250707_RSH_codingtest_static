// 데스크탑 환경에서 메뉴에 마우스를 올렸을 때 서브메뉴를 보여주는 함수
export function initMenuHover() {
  const menuItems = document.querySelectorAll('.menu-item');

  // 각 메뉴 항목에 마우스 이벤트 등록
  menuItems.forEach(item => {
    const submenu = item.querySelector('.depth2');

    // 마우스를 올리면 서브메뉴 보이기
    item.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
      requestAnimationFrame(() => {
        submenu.style.transition = 'all 0.3s ease';
        submenu.style.opacity = '1';
        submenu.style.maxHeight = '300px';
        submenu.style.pointerEvents = 'auto';
      });
    });

    // 마우스를 내리면 서브메뉴 숨기기
    item.addEventListener('mouseleave', () => {
      submenu.style.opacity = '0';
      submenu.style.maxHeight = '0';
      submenu.style.pointerEvents = 'none';
      setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    });
  });
}
