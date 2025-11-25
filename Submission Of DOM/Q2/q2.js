// Q2: Character counter with warning behavior
const txt = document.getElementById('txt');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

function update() {
  const remaining = MAX - txt.value.length;
  counter.textContent = Math.max(0, remaining);
  counter.style.background = '';
  if (remaining <= 20 && remaining > 0) {
    counter.style.background = 'yellow';
  } else if (remaining === 0) {
    counter.style.background = 'red';
  }
}

txt.addEventListener('keydown', (e) => {
  if (txt.value.length >= MAX && e.key.length === 1) {
    // prevent typing more characters
    e.preventDefault();
  }
});

txt.addEventListener('input', update);
resetBtn.addEventListener('click', () => {
  txt.value = '';
  update();
});

update();
