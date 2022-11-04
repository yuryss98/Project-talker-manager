const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const authMiddleware = require('./authMiddleware');
const nameMiddleware = require('./nameMiddleware');
const ageMiddleware = require('./ageMiddleware');
const talkMiddleware = require('./talkMiddleware');
const watchedAtMiddleware = require('./watchedAtMiddleware');
const rateMiddleware = require('./rateMiddleware');
const registerPersonMiddleware = require('./registerPersonMiddleware');
const updatePersonMiddleware = require('./updatePersonMiddleware');

module.exports = {
  validateEmail,
  validatePassword,
  authMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  registerPersonMiddleware,
  updatePersonMiddleware,
};