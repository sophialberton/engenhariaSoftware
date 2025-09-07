const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAnos(popA, taxaA, popB, taxaB) {
  let anos = 0;
  // Validação para garantir que a população A possa alcançar a B
  if (taxaA <= taxaB) {
      console.log("\nA taxa de crescimento de A precisa ser maior que a de B para que a população se iguale.");
      return;
  }
  
  while (popA < popB) {
    popA += popA * (taxaA / 100);
    popB += popB * (taxaB / 100);
    anos++;
  }

  console.log(`\nResultado: Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a do país B.`);
}

function iniciarCalculo() {
  rl.question('População inicial do país A: ', (popAStr) => {
    rl.question('Taxa de crescimento de A (%): ', (taxaAStr) => {
      rl.question('População inicial do país B: ', (popBStr) => {
        rl.question('Taxa de crescimento de B (%): ', (taxaBStr) => {
          
          const popA = parseInt(popAStr);
          const taxaA = parseFloat(taxaAStr);
          const popB = parseInt(popBStr);
          const taxaB = parseFloat(taxaBStr);

          if (isNaN(popA) || isNaN(taxaA) || isNaN(popB) || isNaN(taxaB) || popA <= 0 || popB <= 0) {
            console.log("\nEntrada inválida. Por favor, insira valores numéricos positivos para populações e taxas.");
          } else {
            calcularAnos(popA, taxaA, popB, taxaB);
          }
          
          perguntarParaRepetir();
        });
      });
    });
  });
}

function perguntarParaRepetir() {
    rl.question('\nDeseja realizar outro cálculo? (s/n) ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            iniciarCalculo();
        } else {
            console.log('Encerrando o programa.');
            rl.close();
        }
    });
}

console.log('--- Calculadora de Equivalência Populacional ---');
iniciarCalculo();