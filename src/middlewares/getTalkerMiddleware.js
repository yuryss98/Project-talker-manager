const readFile = require('../services/readFile');

const getTalkerMiddleware = async (req, res) => {
  const { q } = req.query;
  const talkers = await readFile();

  const searchTalkersByQuery = talkers.filter(
    ({ name }) => name.toUpperCase().includes(q.toUpperCase()),
  );

  res.status(200).json(searchTalkersByQuery);
};

module.exports = getTalkerMiddleware;