const { verifyToken } = require("./setupJwt");

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = verifyToken(token);

  if (!user) {
    return res.status(403).json({ message: "Forbidden" });
  }

  req.user = user;
  next();
};

module.exports = { authenticateJWT };
