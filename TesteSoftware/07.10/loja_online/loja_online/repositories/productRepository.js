const db = require('../db/pgMemDb');

async function createProduct(name, price) {
  return await db.one(
    'INSERT INTO products(name, price) VALUES($1, $2) RETURNING *',
    [name, price]
  );
}

async function getAllProducts() {
  return await db.any('SELECT * FROM products');
}

async function getProductById(id) {
  return await db.oneOrNone('SELECT * FROM products WHERE id = $1', [id]);
}

module.exports = { createProduct, getAllProducts, getProductById };
