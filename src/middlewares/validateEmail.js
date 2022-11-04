const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || email === undefined) {
    return res.status(400).json(
      { message: 'O campo "email" é obrigatório' },
    );
  }

  const emailIsValidity = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);

  if (!emailIsValidity) {
    return res.status(400).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    );
  }

  next();
};

module.exports = validateEmail;