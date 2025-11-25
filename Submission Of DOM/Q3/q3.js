// Q3: 3-step form with validation
const form = document.getElementById('multiForm');
const steps = Array.from(document.querySelectorAll('.step'));
let current = 0;
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const summary = document.getElementById('summary');

function showStep(idx) {
  steps.forEach((s,i)=>s.style.display = (i===idx)?'block':'none');
  backBtn.style.display = idx===0?'none':'inline-block';
  nextBtn.style.display = idx===steps.length-1?'none':'inline-block';
  submitBtn.style.display = idx===steps.length-1?'inline-block':'none';
}

function validateStep(idx) {
  const inputs = steps[idx].querySelectorAll('input');
  for (const inp of inputs) {
    const val = inp.value.trim();
    if (!val) {
      alert('Please fill the field');
      inp.focus();
      return false;
    }
    if (inp.id === 'email' && !val.includes('@')) {
      alert('Enter a valid email');
      inp.focus();
      return false;
    }
    if (inp.id === 'password' && val.length < 6) {
      alert('Password must be at least 6 chars');
      inp.focus();
      return false;
    }
  }
  return true;
}

nextBtn.addEventListener('click', ()=>{
  if (!validateStep(current)) return;
  current++;
  showStep(current);
});

backBtn.addEventListener('click', ()=>{
  current = Math.max(0, current-1);
  showStep(current);
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // show summary
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  summary.innerHTML = `<h3>Summary</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Password:</strong> ${'*'.repeat(document.getElementById('password').value.length)}</p>`;
});

showStep(current);
