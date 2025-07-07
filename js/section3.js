// box1: 호버 시 오버레이 애니메이션 효과
const box1 = document.querySelector('.box1');
const overlay = box1.querySelector('.box1-overlay');

if (window.innerWidth >= 1280) {
  box1.addEventListener('mouseenter', () => {
    overlay.style.transition = 'all 0.6s ease';
    overlay.style.bottom = '0';
    overlay.style.opacity = '1';
  });

  box1.addEventListener('mouseleave', () => {
    overlay.style.transition = 'all 0.6s ease';
    overlay.style.bottom = '-100%';
    overlay.style.opacity = '0';
  });
}

// box2: 마우스 이탈 시 leave 클래스 효과 적용
const box2 = document.querySelector('.box2');
if (window.innerWidth >= 1280) {
  box2.addEventListener('mouseleave', () => {
    box2.classList.add('leave');
    setTimeout(() => {
      box2.classList.remove('leave');
    }, 500);
  });
}

// box3: 전체 클릭 수 및 박스3 개별 클릭 수를 각각 표시
let totalClickCount = 0;
let box3ClickCount = 0;

const box3 = document.querySelector('.box3');
const box3_1 = document.querySelector('.inner1');
const box3_2 = document.querySelector('.inner2');

box3_1.setAttribute('data-count', totalClickCount);
box3_2.setAttribute('data-count', box3ClickCount);

document.body.addEventListener('click', () => {
  totalClickCount++;
  box3_1.setAttribute('data-count', totalClickCount);
});

box3.addEventListener('click', (e) => {
  e.stopPropagation();
  box3ClickCount++;
  box3_2.setAttribute('data-count', box3ClickCount);
});
