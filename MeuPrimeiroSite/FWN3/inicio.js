function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}

//javascript do chat gpt

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage(index) {
    images[currentIndex].classList.remove('active'); // Remove a classe "active" da imagem atual
    currentIndex = index; // Atualiza o índice da imagem ativa
    images[currentIndex].classList.add('active'); // Adiciona a classe "active" à nova imagem
}