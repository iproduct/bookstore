const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');
const NotFoundError = require('../errors/not-found-error')


router.get('/', async function (req, res, next) {
  const users = await UserService.query()
  res.json(users);
});

router.post('/', async function (req, res, next) {
  const user = await UserService.update(req.body);

  res.json(user);
});

router.get('/:id', async function (req, res, next) {
  const user = await UserService.findById(req.params.id)
  res.json(user);
});

router.put('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  const user = await UserService.update(id, req.body);

  res.json(user);
});

router.delete('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  try {
    await UserService.delete(id);
    res.status(200);
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(404);
      res.json({ status: 'error', message: err.message });
    }
  }
});

module.exports = router;
