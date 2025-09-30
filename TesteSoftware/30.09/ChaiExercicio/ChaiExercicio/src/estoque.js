const logger = require('./logger');

const estoque = {
  // idProduto: quantidade
  'pao': 100,
  'leite': 50,
  'cafe': 30
};

function consultarEstoque(produto) {
  return estoque[produto] || 0;
}

function adicionarAoEstoque(produto, quantidade) {
  if (quantidade <= 0) {
    logger.error(`Quantidade inválida: ${quantidade}`);
    throw new Error('Quantidade deve ser maior que zero');
  }

  estoque[produto] = (estoque[produto] || 0) + quantidade;
  logger.log(`Adicionado ${quantidade} unidades de ${produto} ao estoque`);
}

function removerDoEstoque(produto, quantidade) {
  if (!estoque[produto] || estoque[produto] < quantidade) {
    logger.error(`Estoque insuficiente para ${produto}`);
    throw new Error('Estoque insuficiente');
  }

  estoque[produto] -= quantidade;
  logger.log(`Removido ${quantidade} unidades de ${produto} do estoque`);
}

module.exports = {
  consultarEstoque,
  adicionarAoEstoque,
  removerDoEstoque,
  _estoqueInterno: estoque // exposto só para testes avançados (opcional)
};
