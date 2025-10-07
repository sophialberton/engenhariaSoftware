const repo = require('../repositories/productRepository');

async function addProduct(data) {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Nome inválido');
  }
  if (typeof data.price !== 'number' || data.price < 0) {
    throw new Error('Preço inválido');
  }
  return await repo.createProduct(data.name, data.price);
}

async function listProducts() {
  return await repo.getAllProducts();
}

async function findProductById(id) {
  const product = await repo.getProductById(id);
  if (!product) {
    throw new Error('Produto não encontrado');
  }
  return product;
}

module.exports = { addProduct, listProducts, findProductById };
