const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token === undefined) {
    return res.status(401).json(
      { message: 'Token não encontrado' },
    ); 
  }

  if (token.length !== 16) {
    return res.status(401).json(
      { message: 'Token inválido' },
    ); 
  }

  next();
};

module.exports = authMiddleware;