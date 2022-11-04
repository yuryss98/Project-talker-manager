const talkMiddleware = (campo, res, value) => {
  if (!campo || campo === undefined) {
    return res.status(400).json(
      { message: `O campo "${value}" é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { talk } = req.body;

  return talkMiddleware(talk, res, 'talk')
    || talkMiddleware(talk.watchedAt, res, 'watchedAt')
    || talkMiddleware(talk.rate, res, 'rate')
    || next();
};