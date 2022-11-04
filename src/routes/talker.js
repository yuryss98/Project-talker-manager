const express = require('express');
const readFile = require('../services/readFile');
const writeFile = require('../services/writeFile');

const talker = express();

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

module.exports = talker;