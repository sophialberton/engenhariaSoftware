const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaDesconto() {
    readline.question('Digite o valor da compra: ', (valorCompra) => {
        const valor = parseFloat(valorCompra);

        const pontos = Math.floor(valor / 20);

        if (pontos < 10) {
            console.log("Você não tem pontos suficientes para desconto.");
            readline.close();
            return;
        }

        let desconto = Math.floor(pontos / 10) * 10 * 0.5;

        if (desconto > 50) {
            desconto = 50; // desconto máximo
        }

        console.log(`Você tem direito a um desconto de R$${desconto.toFixed(2)}`);
        readline.close();
    });
}

verificaDesconto();
