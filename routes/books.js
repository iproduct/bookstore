const express = require('express');
const router = express.Router();
const BookService = require('../services/book-service');
const NotFoundError = require('../errors/not-found-error');

router.get('/', async function (req, res, next) {
  const books = await BookService.query()
  res.json(books);
});

router.post('/', async function (req, res, next) {
  const book = await BookService.create(req.body);
  res.json(book);
});

router.get('/:id', async function (req, res, next) {
  const book = await BookService.findById(req.params.id)
  res.json(book);
});

router.put('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  const book = await BookService.update(id, req.body);

  res.json(book);
});

router.delete('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  try {
    await BookService.delete(id);
    res.status(200);
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(404);
      res.json({ status: 'error', message: err.message });
    }
  }
});

module.exports = router;
