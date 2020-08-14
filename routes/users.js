const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('api/userdata', (req, res) => {
  User.find()
    .then(items => res.json(items));
});

router.post('api/userdata', (req, res) => {
  const NewUser = new Item({
    name: req.body.name,
    city: req.body.city,
    email: req.body.email,
    password: req.body.password
  });
  NewUser.save().then(item => res.json(item));
});

router.get('api/test', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

module.exports = router;