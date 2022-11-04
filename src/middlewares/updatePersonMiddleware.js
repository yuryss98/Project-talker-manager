const updatePerson = require('../services/updatePerson');

const updatePersonMiddleware = async (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const update = await updatePerson(obj, Number(id));

  res.status(200).json(update);
};

module.exports = updatePersonMiddleware;