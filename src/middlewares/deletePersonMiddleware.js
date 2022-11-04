const deleteById = require('../services/deleteById');

const deletePersonMiddleware = async (req, res) => {
  await deleteById(Number(req.params.id));

  res.status(204).end();
};

module.exports = deletePersonMiddleware;