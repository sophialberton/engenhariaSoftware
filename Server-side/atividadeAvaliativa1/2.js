function calcularCustoCarro(custoDeFabrica) {
  const percentualDistribuidor = 0.28; // 28%
  const percentualImpostos = 0.45; // 45%

  // Calcula o valor correspondente à porcentagem do distribuidor
  const valorDistribuidor = custoDeFabrica * percentualDistribuidor;

  // Calcula o valor correspondente aos impostos
  const valorImpostos = custoDeFabrica * percentualImpostos;

  // Calcula o custo final somando o custo de fábrica com os valores calculados
  const custoFinalConsumidor = custoDeFabrica + valorDistribuidor + valorImpostos;

  console.log(`Custo de Fábrica: R$ ${custoDeFabrica.toFixed(2)}`);
  console.log("--- Cálculos ---");
  console.log(`Valor do Distribuidor (28%): R$ ${valorDistribuidor.toFixed(2)}`);
  console.log(`Valor dos Impostos (45%): R$ ${valorImpostos.toFixed(2)}`);
  console.log("-----------------");
  console.log(`Custo Final ao Consumidor: R$ ${custoFinalConsumidor.toFixed(2)}`);
}

// Exemplo de uso com um custo de fábrica de R$ 30.000,00
const custoFabricaInput = 30000;
calcularCustoCarro(custoFabricaInput);