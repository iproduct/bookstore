const express = require('express');
const { OK, NOT_FOUND } = require('http-status-codes');
const router = express.Router();
const BookService = require('../services/book-service');
const NotFoundError = require('../errors/not-found-error');

router.get('/', async function (req, res, next) {
  const books = await BookService.query();
  res.json(books);
});

router.post('/', async function (req, res, next) {
  const book = await BookService.create(req.body);
  res.json(book);
});

router.get('/:id', async function (req, res, next) {
  const book = await BookService.findById(req.params.id);
  res.json(book);
});

router.put('/:id', async function (req, res, next) {
  const book = await BookService.findById(req.params.id);
  const { id, ...data } = req.body;
  await book.update(data);

  return res.json(book);
});

router.delete('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  try {
    await BookService.delete(id);
    return res.status(OK).end();
  } catch (err) {
    if (err instanceof NotFoundError) {
      return res.status(NOT_FOUND).json({ status: 'error', message: err.message });
    }
  }
});

module.exports = router;
