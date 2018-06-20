const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');
const { OK, UNAUTHORIZED, CONFLICT, BAD_REQUEST, NOT_FOUND } = require('http-status-codes');

const USER_ALREADY_EXISTS = 'User already exists';
const PASSWORDS_DO_NOT_MATCH = 'Passwords do not match';
const USER_NOT_FOUND = 'User not found';

router.get('/current', async function (req, res, next) {
  const user = await UserService.findById(req.session.userId);
  res.json(user);
});

router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  const user = await UserService.findByEmail(username);

  if (!user) {
    return res.status(NOT_FOUND).send({ status: NOT_FOUND, error: USER_NOT_FOUND });
  }
  const hasValidPassword = await UserService.hasValidPassword(password, user.password);
  console.log(hasValidPassword);

  if (hasValidPassword) {
    req.session.userId = user.id;
    req.session.views = req.session.views || 0;
    req.session.views++;
    req.session.save();
    console.log('-------:', req.session.userId);
    console.log('views: ', req.session.views);

    return res.json(user);
  } else {
    res.status(UNAUTHORIZED);
  }
});

router.post('/register', async function (req, res, next) {
  const { email, password, repeatPassword } = req.body;
  const existingUser = await UserService.findByEmail(email);

  if (existingUser) {
    return res.status(CONFLICT).send({ status: CONFLICT, error: USER_ALREADY_EXISTS });
  }

  if (password !== repeatPassword) {
    return res.json({ status: BAD_REQUEST, error: PASSWORDS_DO_NOT_MATCH });
  }

  const user = await UserService.create(req.body);
  res.json(user);
});

module.exports = router;
