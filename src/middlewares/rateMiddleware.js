const ratingMiddleware = (req, res, next) => {
  const { talk: { rate } } = req.body;

  const intervalNumber = rate >= 1 && rate <= 5;

  if (!intervalNumber || !Number.isInteger(rate)) {
    return res.status(400).json(
      { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
    );
  }

  next();
};

module.exports = ratingMiddleware;