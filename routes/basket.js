const express = require('express');
const router = express.Router();
const BasketService = require('../services/basket-service');

router.get('', async function (req, res, next) {
  const basketItems = await BasketService.getBasketItems(req.session.userId);
  res.json(basketItems);
});

router.post('', async function (req, res, next) {
  const { userId } = req.session;
  const bookId = req.body.id;

  const basketItem = await BasketService.addBasketItem(userId, bookId);

  return res.json(basketItem);
});

router.delete('/:id', async function (req, res, next) {
  const { userId } = req.session;
  const { id } = req.params;
  const basketItems = await BasketService.removeBasketItem(userId, id);

  return res.json(basketItems);
});

module.exports = router;
