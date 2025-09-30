const { removerDoEstoque } = require('./estoque');
const logger = require('./logger');

function calcularTotal(venda) {
  // venda = [{ produto: 'pao', preco: 2, quantidade: 3 }, ...]
  return venda.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
  }, 0);
}

function registrarVenda(venda) {
  if (!Array.isArray(venda) || venda.length === 0) {
    logger.error('Venda inválida');
    throw new Error('Venda inválida');
  }

  venda.forEach(item => {
    removerDoEstoque(item.produto, item.quantidade);
  });

  const total = calcularTotal(venda);
  logger.log(`Venda registrada. Total: R$ ${total.toFixed(2)}`);
  return total;
}

module.exports = {
  calcularTotal,
  registrarVenda
};
