// Q8: Custom dropdown — use capturing phase to close when clicking outside
const toggle = document.getElementById('toggle');
const options = document.getElementById('options');
toggle.addEventListener('click', ()=> options.style.display = options.style.display === 'none' ? 'block' : 'none');

document.addEventListener('click', (e)=>{
  
}, true);


document.addEventListener('click', function(e){
  const dropdown = document.getElementById('dropdown');
  if (!dropdown.contains(e.target)) {
    options.style.display = 'none';
  }
}, true);

options.addEventListener('click', (e)=>{
  if (e.target.classList.contains('opt')) {
    toggle.textContent = e.target.textContent;
    options.style.display = 'none';
  }
});
