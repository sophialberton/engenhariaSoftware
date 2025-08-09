function EnviarFormulario() {
    alert('Verifique sua caixa de entrada de e-mails!');
}

//Conteudo dos slides para formulario slide site_bloxkB.pdf
//Captura o formulario e o elemnteo da ensagem de sucesso
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('sucess-message');
//adiciona um envento ao enviar o formulario
form.addEventListener('submit', function(event){

    successMessage.style.display = 'block';//Exibe a mensagem de sucesso

});

//COdigo chat gpt
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
  });