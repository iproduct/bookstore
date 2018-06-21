const express = require('express');
const router = express.Router();
const BasketService = require('../services/basket-service');

router.get('', async function (req, res, next) {
  const basketItems = await BasketService.getBasketItems(req.session.userId);
  res.json(basketItems);
});


router.post('', async function (req, res, next) {
  const { userId } = req.session;
  const item = Object.assign({ userId }, req.body);
  const basketItems = await BasketService.addBasketItems(item);

  res.json(basketItems);
});

router.delete('/:id', async function (req, res, next) {
  const { userId } = req.session;
  const item = Object.assign({ userId }, req.body);
  const basketItems = await BasketService.removeBasketItems(item);

  res.json(basketItems);
});

module.exports = router;
