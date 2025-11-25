// Q9: preventDefault with live error messages
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const msg = document.getElementById('msg');

function showErr(el, text){
  const span = el.parentNode.querySelector('.err');
  span.textContent = text;
}
function clearErr(el){ showErr(el, ''); }

function validateAll(){
  let ok = true;
  if (!nameInput.value.trim()) { showErr(nameInput, 'Name required'); ok = false; }
  if (!emailInput.value.trim() || !emailInput.value.includes('@')) { showErr(emailInput, 'Valid email required'); ok = false; }
  if (!passwordInput.value || passwordInput.value.length < 6) { showErr(passwordInput, 'Min 6 chars'); ok = false; }
  return ok;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  msg.textContent = '';
  if (validateAll()) {
    msg.textContent = 'Form Submitted Successfully';
    form.reset();
    
    [nameInput,emailInput,passwordInput].forEach(clearErr);
  }
});

[nameInput,emailInput,passwordInput].forEach(inp=>{
  inp.addEventListener('input', ()=>{
    if (inp === emailInput){
      if (inp.value.includes('@')) clearErr(inp);
      else showErr(inp,'Email must contain @');
    } else if (inp === passwordInput){
      if (inp.value.length >= 6) clearErr(inp);
      else showErr(inp,'Min 6 chars');
    } else {
      if (inp.value.trim()) clearErr(inp);
      else showErr(inp,'This field is required');
    }
  });
});
