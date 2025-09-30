const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const urlInput = document.getElementById('urlInput');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Upload local file
  if (fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      addImage(e.target.result);
    };
    reader.readAsDataURL(fileInput.files[0]);
  }

  // Upload from URL
  if (urlInput.value) {
    addImage(urlInput.value);
    urlInput.value = '';
  }
});

function addImage(src) {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
}
