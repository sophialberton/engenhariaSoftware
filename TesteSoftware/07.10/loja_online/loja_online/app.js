const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./controllers/productController');
const orderRoutes = require('./controllers/orderController');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
