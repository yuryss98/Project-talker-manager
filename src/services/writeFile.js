const fs = require('fs').promises;
const { join } = require('path');

const writeFile = async (param) => {
  try {
    const path = join(__dirname, '../talker.json');

    await fs.writeFile(path, JSON.stringify(param));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = writeFile;