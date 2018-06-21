const express = require('express');
const router = express.Router();
const BasketService = require('../services/basket-service');

router.get('', async function (req, res, next) {
  const user = await BasketService.query(req.params.id);
  res.json(user);
});

