const express = require('express');

const router = express.Router();
const UserServices = require('../services/user_srver');

router.get('/', (req, res) => {
  const u = UserServices.getAllUsers();
  res.locals.users = u;
  res.json(u);
});

router.post('/', (req, res) => {
  const { firstname, lastname, age } = req.body;
  const u = UserServices.addUser(firstname, lastname, age);
  res.json(u);
});

router.get('/:userId', (req, res) => {
  const u = UserServices.getOneById(Number(req.params.userId));
  res.locals.user = u;
  res.json(u);
});

router.post('/:userId/sub', (req, res) => {
  const sub = UserServices.createSub(Number(req.params.userId), req.body.url);
  res.json(sub);
});

module.exports = router;
