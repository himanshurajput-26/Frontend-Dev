// Q4: Theme switcher using setAttribute and data-theme
const buttons = document.querySelectorAll('.themeBtn');
const current = document.getElementById('currentTheme');

function applyTheme(t){
  document.body.setAttribute('data-theme', t);
  document.body.setAttribute('data-theme-applied', t); // custom attribute
  current.textContent = t;
}

buttons.forEach(b => b.addEventListener('click', () => applyTheme(b.getAttribute('data-theme'))));

const saved = document.body.getAttribute('data-theme') || 'light';
applyTheme(saved);
