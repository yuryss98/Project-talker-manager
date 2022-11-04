const express = require('express');
const readFile = require('../services/readFile');
const middleWares = require('../middlewares');

const talker = express();

const {
  authMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  registerPersonMiddleware,
  updatePersonMiddleware,
} = middleWares;

talker.get('/', async (req, res) => {
  try {
    const data = await readFile();
    
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
  }
});

talker.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readFile();

    const searchForPerson = data.find((person) => person.id === Number(id));
    
    if (searchForPerson) {
      return res.status(200).json(searchForPerson);
    }
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } catch (error) {
    console.error(error.message);
  }
});

talker.post(
  '/',
  authMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  registerPersonMiddleware,
);

talker.put(
  '/:id',
  authMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  updatePersonMiddleware,
);

module.exports = talker;