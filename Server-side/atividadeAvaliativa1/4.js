function verificarEstoque() {
  // Usando um array de objetos para armazenar os dados dos produtos
  const produtos = [
    {
      nome: 'Caneta Esferográfica',
      qtdAtual: 75,
      qtdMaxima: 150,
      qtdMinima: 50,
    },
    {
      nome: 'Caderno 96 folhas',
      qtdAtual: 30,
      qtdMaxima: 100,
      qtdMinima: 20,
    },
    {
      nome: 'Lápis de Cor (12 cores)',
      qtdAtual: 45,
      qtdMaxima: 60,
      qtdMinima: 40,
    }
  ];

  console.log("--- Análise de Estoque ---");

  // Itera sobre cada produto no array
  produtos.forEach(produto => {
    // Calcula a quantidade média, que serve como ponto de reposição
    const quantidadeMedia = (produto.qtdMaxima + produto.qtdMinima) / 2;
    
    console.log(`\nProduto: ${produto.nome}`);
    console.log(`Estoque Atual: ${produto.qtdAtual}`);
    console.log(`Ponto de Compra (Qtd Média): ${quantidadeMedia}`);

    // Compara o estoque atual com a média para decidir se a compra é necessária
    if (produto.qtdAtual >= quantidadeMedia) {
      console.log("Status: Não efetuar compra");
    } else {
      console.log("Status: Efetuar compra");
    }
  });
}

verificarEstoque();