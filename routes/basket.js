const express = require('express');
const router = express.Router();
const BasketService = require('../services/basket-service');

router.get('', async function (req, res, next) {
  const basketItems = await BasketService.getBasketItems(req.session.userId);
  res.json(basketItems);
});
