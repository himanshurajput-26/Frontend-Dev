// Q6: Real-time filter (case-insensitive)
const search = document.getElementById('search');
const rows = Array.from(document.querySelectorAll('#tbl tbody tr'));
const nores = document.getElementById('nores');

search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  rows.forEach(r=>{
    const text = r.textContent.toLowerCase();
    if (text.includes(q)) {
      r.style.display = '';
      visible++;
    } else r.style.display = 'none';
  });
  nores.style.display = visible? 'none':'block';
});
