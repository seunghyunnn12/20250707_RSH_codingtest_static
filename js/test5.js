// 간단한 To-Do 리스트 기능
// - 사용자가 입력한 텍스트를 리스트에 추가
// - 항목 클릭 시 완료 표시(toggle)
// - 빈 값은 추가하지 않음

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') return;

  const li = document.createElement('li');
  li.textContent = value;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  list.appendChild(li);
  input.value = '';
});
