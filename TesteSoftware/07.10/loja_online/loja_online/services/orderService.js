const repo = require('../repositories/orderRepository');
const productService = require('./productService');

async function placeOrder(productId, quantity) {
  if (typeof quantity !== 'number' || quantity <= 0) {
    throw new Error('Quantidade inválida');
  }
  await productService.findProductById(productId);
  return await repo.createOrder(productId, quantity);
}

async function listOrders() {
  return await repo.getAllOrders();
}

module.exports = { placeOrder, listOrders };
