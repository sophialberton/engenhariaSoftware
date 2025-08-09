/*
Em uma casa de secos e molhados há uma 
determinada promoção: a cada 20 reais em compras, cada cliente recebe 
um cupom com um ponto. A partir de 10 pontos ou cupons, clientes têm direito a
50% do total de pontos como porcentagem de desconto em uma nova compra, sendo que o 
acúmulo de pontos é múltiplo de 10 até 100 pontos para uso. Crie um algoritmo que, a partir 
do valor total de uma compra, identifica se o cliente terá desconto na próxima compra.
Se sim, informe qual será a porcentagem. Em seguida, traduza o algoritmo para JavaScript 
e o execute utilizando NodeJS. Obs.: neste momento o acumulo de pontos não será implementado*
*/

const porta = 2000;
server.listen(porta);
console.log(`O Servidor Web está em execução na porta ${porta} via Node.js`);

// Função para calcular o desconto baseado no valor da compra
function calcularDesconto(valorCompra) {
  let pontos = Math.floor(valorCompra / 20);
  // Limitar pontos a 100 no máximo
  if (pontos > 100) pontos = 100;
  // Ajustar para múltiplo de 10 (arredondar para baixo)
  pontos = pontos - (pontos % 10);
  if (pontos >= 10) {
    return pontos / 2; // 50% do total de pontos
  }
  return 0;
}

// Exemplo de uso
const valorCompra = 250; // Valor total da compra
const desconto = calcularDesconto(valorCompra);
if (desconto > 0) {
    console.log(`O cliente terá um desconto de ${desconto}% na próxima compra.`);
}else {
    console.log("O cliente não terá desconto na próxima compra.");
}
module.exports = calcularDesconto; // Exportando a função para testes ou uso em outros módulos

// Testando a função com diferentes valores de compra
console.log(calcularDesconto(200));  // pontos=10 -> desconto 5%
console.log(calcularDesconto(250));  // pontos=10 -> desconto 5%
console.log(calcularDesconto(400));  // pontos=20 -> desconto 10%
console.log(calcularDesconto(1000)); // pontos=50 -> desconto 25%
console.log(calcularDesconto(19));   // pontos=0 -> desconto 0%
console.log(calcularDesconto(300));  // pontos=15 -> arredonda p/10, desconto 5%

var http = require('http');

var server = http.createServer(function(req, res ){
  if (req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    res.write('<html><body><meta charset="utf-8"> <p>Esta é uma Página Web!<script>console.log("NO BROWSER") </script></p></body></html>');
    console.log("Está No Servidor");
    res.end();
  }
  else if (req.url == "/estudantes") {
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'})
    res.write('<html><body><p> Esta é a Página do Estudante!</p></body></html');
    res.end();
  }

  else if (req.url == "/admin") {
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'})
    res.write('<html><body><p> Esta é a Página do Administrador!</p></body></html>');
    res.end();
  }
  else
    res.end('Invalid Request ou Solicitação Inválida!'); 

});