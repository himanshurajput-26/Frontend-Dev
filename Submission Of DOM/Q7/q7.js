// Q7: Mouse coordinates and drop red dot on dblclick
const box = document.getElementById('box');
const coords = document.getElementById('coords');

box.addEventListener('mousemove', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  coords.textContent = `clientX: ${Math.round(e.clientX)}, clientY: ${Math.round(e.clientY)} — inside box coords: ${Math.round(x)}, ${Math.round(y)}`;
});

box.addEventListener('dblclick', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const d = document.createElement('div');
  d.className = 'dot';
  d.style.left = x + 'px';
  d.style.top = y + 'px';
  box.appendChild(d);
});
