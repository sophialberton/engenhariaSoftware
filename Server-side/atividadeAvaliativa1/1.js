function calcularAnosParaEquivalencia() {
  let popA = 80000;
  const taxaA = 0.03; // 3%
  let popB = 200000;
  const taxaB = 0.015; // 1.5%

  let anos = 0;

  // O laço continua enquanto a população de A for menor que a de B.
  while (popA < popB) {
    // Calcula o crescimento populacional para o ano
    popA += popA * taxaA;
    popB += popB * taxaB;
    
    // Incrementa o contador de anos
    anos++;
  }

  console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
  console.log(`População final de A: ${Math.floor(popA)}`);
  console.log(`População final de B: ${Math.floor(popB)}`);
}

// Executa a função
calcularAnosParaEquivalencia();