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


const http = require('http');
const url = require('url');

// Função para calcular desconto
function calcularDesconto(valorCompra) {
    let pontos = Math.floor(valorCompra / 20);
    if (pontos > 100) pontos = 100;
    pontos = pontos - (pontos % 10);
    if (pontos >= 10) {
        return pontos / 2;
    }
    return 0;
}

const server = http.createServer(function(req, res) {
    const reqUrl = url.parse(req.url, true); // true para pegar query params

    console.log(`Requisição de ${req.socket.remoteAddress} para ${reqUrl.pathname}`);

    if (reqUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<html><body><meta charset="utf-8"><p>Esta é uma Página Web!<script>console.log("NO BROWSER")</script></p></body></html>');
        res.end();
    }
    else if (reqUrl.pathname === '/estudantes') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<html><body><p>Esta é a Página do Estudante!</p></body></html>');
        res.end();
    }
    else if (reqUrl.pathname === '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<html><body><p>Esta é a Página do Administrador!</p></body></html>');
        res.end();
    }
    else if (reqUrl.pathname === '/desconto') {
        const valor = parseFloat(reqUrl.query.valor);

        if (isNaN(valor) || valor < 0) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Parâmetro "valor" inválido ou ausente.');
            console.log('Parâmetro "valor" inválido ou ausente.');
        } else {
            const desconto = calcularDesconto(valor);
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

            if (desconto > 0) {
                res.end(`O cliente terá um desconto de ${desconto}% na próxima compra.`);
            } else {
                res.end('O cliente não terá desconto na próxima compra.');
            }

            console.log(`Valor da compra: R$${valor.toFixed(2)} - Desconto calculado: ${desconto}%`);
        }
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Invalid Request ou Solicitação Inválida!');
    }
});

const porta = 2000;
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta} via Node.js`);
});
