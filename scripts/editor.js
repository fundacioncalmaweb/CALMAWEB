function toggleEditMode() {
  const editableElements = document.querySelectorAll('h1, h2, h3, p');
  const isEditing = document.body.classList.toggle('edit-mode');

  editableElements.forEach(el => {
    el.contentEditable = isEditing;
    el.style.outline = isEditing ? '2px dashed #6b5b95' : 'none';
    el.style.backgroundColor = isEditing ? '#fdf7ff' : 'transparent';
  });

  const btn = document.getElementById('editToggleBtn');
  btn.textContent = isEditing ? '💾 Guardar cambios' : '✏️ Editar textos';

  if (!isEditing) saveEditedContent();
}

function saveEditedContent() {
  const content = document.body.innerHTML;
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = document.title.replace(/\s+/g, '_').toLowerCase() + '.html';
  a.click();
  URL.revokeObjectURL(url);
}
