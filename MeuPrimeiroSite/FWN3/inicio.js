function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}

//javascript do chat gpt
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const totalSlides = slides.length;

  let currentSlide = 0;

  const updateCarousel = () => {
      const offset = -currentSlide * 100; // Calcula a posição do slide atual
      carousel.style.transform = `translateX(${offset}%)`;
  };

  prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
  });

  // Atualiza o carrossel na inicialização
  updateCarousel();
});
