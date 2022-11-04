const fs = require('fs').promises;
const { join } = require('path');

const readFile = async () => {
  const path = join(__dirname, '../talker.json');

  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = readFile;