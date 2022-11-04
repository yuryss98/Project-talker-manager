const readFile = require('./readFile');
const writeFile = require('./writeFile');

const updatePerson = async ({ name, age, talk: { watchedAt, rate } }, id) => {
  const data = await readFile();
  const updated = data.map((person) => {
    if (person.id === id) {
      return {
        name,
        age,
        id,
        talk: {
          watchedAt,
          rate,
        },
      };
    }
    return person;
  });

  await writeFile(updated);
  return updated.find((person) => person.id === id);
};

module.exports = updatePerson;