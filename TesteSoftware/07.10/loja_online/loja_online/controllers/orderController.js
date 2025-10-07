const express = require('express');
const router = express.Router();
const service = require('../services/orderService');

router.post('/', async (req, res) => {
  try {
    const order = await service.placeOrder(req.body.productId, req.body.quantity);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const orders = await service.listOrders();
  res.json(orders);
});

module.exports = router;
