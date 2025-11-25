// Q5: Image gallery and modal preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

const images = Array.from({length:6}, (_,i) => `https://picsum.photos/seed/q5${i}/600/400`);

images.forEach(src=>{
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
  img.addEventListener('click', (e)=>{
    modalImg.src = src;
    modal.style.display = 'flex';
  });
});

modal.addEventListener('click', ()=>{
  modal.style.display = 'none';
});

modal.querySelector('.modal-content').addEventListener('click', (e)=>{
  e.stopPropagation();
});
