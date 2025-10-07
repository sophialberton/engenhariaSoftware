const { newDb } = require('pg-mem');
const pgp = require('pg-promise')();

const db = newDb();

db.public.none(`
  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL CHECK (price >= 0)
  );

  CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity > 0)
  );
`);

const pg = db.adapters.createPgPromise();

module.exports = pg;
