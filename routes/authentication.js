const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');
const { OK, UNAUTHORIZED } = require('http-status-codes');


router.get('/current', async function (req, res, next) {
  const user = await UserService.findById(req.session.userId);
  res.json(user);
});

router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  const user = await UserService.findByEmail(email);
  const hasValidPassword = user.hasValidPassword(password);

  if (hasValidPassword) {
    req.sesion.userId = user.id;
    res.status(OK);
  } else {
    res.status(UNAUTHORIZED);
  }
});

module.exports = router;
