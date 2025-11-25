// Q1: Product List Manager using event delegation
const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

function createItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'inline-edit';
  span.textContent = text;
  span.setAttribute('data-editable', 'false');

  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.textContent = 'Edit';

  const delBtn = document.createElement('button');
  delBtn.className = 'delete';
  delBtn.textContent = 'Delete';

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  return li;
}

addBtn.addEventListener('click', () => {
  const value = productInput.value.trim();
  if (!value) return alert('Please enter product name');
  productList.appendChild(createItem(value));
  productInput.value = '';
});

// Event delegation on the ul
productList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const span = li.querySelector('.inline-edit');

  if (e.target.classList.contains('delete')) {
    li.remove();
  } else if (e.target.classList.contains('edit')) {
    // Enter edit mode
    const input = document.createElement('input');
    input.value = span.textContent;
    input.style.flex = '1';
    span.replaceWith(input);
    input.focus();

    function save() {
      const newSpan = document.createElement('span');
      newSpan.className = 'inline-edit';
      newSpan.textContent = input.value.trim() || 'Unnamed';
      input.replaceWith(newSpan);
      document.removeEventListener('click', outsideClick);
    }

    function outsideClick(ev) {
      if (!li.contains(ev.target)) save();
    }

    // Click outside to auto-save
    document.addEventListener('click', outsideClick);

    // Enter key to save
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') save();
    });
  }
});
