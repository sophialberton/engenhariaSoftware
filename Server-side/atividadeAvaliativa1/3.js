function calcularSalarioVendedor(numCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
  // Calcula a comissão com base no número de carros vendidos
  const comissaoTotalPorCarro = numCarrosVendidos * comissaoPorCarro;

  // Calcula a comissão de 5% sobre o valor total das vendas
  const comissaoSobreVendas = valorTotalVendas * 0.05;

  // O salário final é a soma do salário fixo com as duas comissões
  const salarioFinal = salarioFixo + comissaoTotalPorCarro + comissaoSobreVendas;

  console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);
}

// Exemplo de uso
const carrosVendidos = 5;
const totalVendas = 150000; // R$ 150.000,00
const salarioFixo = 2000;    // R$ 2.000,00
const valorPorCarro = 300;     // R$ 300,00 por carro

calcularSalarioVendedor(carrosVendidos, totalVendas, salarioFixo, valorPorCarro);