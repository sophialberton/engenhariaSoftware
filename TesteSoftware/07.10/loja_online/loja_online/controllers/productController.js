const express = require('express');
const router = express.Router();
const service = require('../services/productService');

router.post('/', async (req, res) => {
  try {
    const product = await service.addProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const products = await service.listProducts();
  res.json(products);
});

module.exports = router;
