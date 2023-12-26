const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  // Récupérez le token JWT
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    // Vérification du token
    const decoded = jwt.verify(token, 'quoicoubeh_key');

    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
