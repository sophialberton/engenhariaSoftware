const db = require('../db/pgMemDb');

async function createOrder(productId, quantity) {
  return await db.one(
    'INSERT INTO orders(product_id, quantity) VALUES($1, $2) RETURNING *',
    [productId, quantity]
  );
}

async function getAllOrders() {
  return await db.any(`
    SELECT o.id, o.quantity, p.name AS product_name, p.price AS product_price
    FROM orders o
    JOIN products p ON o.product_id = p.id
  `);
}

module.exports = { createOrder, getAllOrders };
