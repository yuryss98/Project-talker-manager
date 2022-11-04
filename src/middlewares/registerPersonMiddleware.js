const readFile = require('../services/readFile');
const writeFile = require('../services/writeFile');

const registerPersonMiddleware = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const data = await readFile();

  const newActivitie = {
    id: data[data.length - 1].id + 1,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };
  data.push(newActivitie);

  await writeFile(data);

  res.status(201).json(newActivitie);
};

module.exports = registerPersonMiddleware;