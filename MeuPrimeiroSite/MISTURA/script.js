function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}
function testando(){
    alert('Funcionou!  ')
}
//exemplo carrossel js slides
let slideIndex=0;
function showslides(){
    const slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i< slideIndex; i++){
        slides[i].style.display ="none"; // Oculta ds imagens
    }
    slideIndex++;
    if(slideIndex>slideIndex.length){
        slideIndex=1;
    }
    slides[slideIndex - 1].style.display =" block"; //exib slide atual
        setTimeout(showslides, 3000); //executa novemnte apos 3 seg
}
