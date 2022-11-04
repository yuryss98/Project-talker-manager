const express = require('express');
const generateToken = require('../services/generateToken');
const middleWares = require('../middlewares');

const login = express();

const {
  validateEmail,
  validatePassword,
} = middleWares;

login.post('/', validateEmail, validatePassword, (req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = login;