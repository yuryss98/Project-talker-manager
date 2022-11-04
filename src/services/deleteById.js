const readFile = require('./readFile');
const writeFile = require('./writeFile');

const deleteById = async (personId) => {
  const data = await readFile();

  const deleteTalker = data.filter(({ id }) => id !== personId);

  writeFile(deleteTalker);
};

module.exports = deleteById;