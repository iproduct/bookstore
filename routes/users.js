const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');


/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = UserService.getUsers();
  res.json(data);
});

module.exports = router;
