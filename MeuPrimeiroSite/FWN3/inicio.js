function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}

//javascript do chat gpt
const images = document.querySelectorAll('.carousel-image');
const buttons = document.querySelectorAll('.buttons button');
let currentIndex = 0;

function changeImage(index) {
  // Remove classe 'active' da imagem e do botão atuais
  images[currentIndex].classList.remove('active');
  buttons[currentIndex].classList.remove('active');
  
  // Atualiza o índice atual
  currentIndex = index;
  
  // Adiciona classe 'active' à nova imagem e ao novo botão
  images[currentIndex].classList.add('active');
  buttons[currentIndex].classList.add('active');
}

// Exemplo: Alterar para a próxima imagem a cada 3 segundos
setInterval(() => {
  const nextIndex = (currentIndex + 1) % images.length;
  changeImage(nextIndex);
}, 3000);

function openLightbox(src) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = src;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  lightbox.classList.add('hidden');
}

// Adiciona o evento de clique nas imagens para abrir a lightbox
images.forEach(image => {
  image.addEventListener('click', () => openLightbox(image.src));
});
