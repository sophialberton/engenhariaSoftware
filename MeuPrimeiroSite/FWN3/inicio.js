function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}

//javascript do chat gpt
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  // Move o carrossel para a imagem atual
  const offset = -currentIndex * 100; // Cada imagem ocupa 100% da largura
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Rotação automática opcional
setInterval(() => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);
