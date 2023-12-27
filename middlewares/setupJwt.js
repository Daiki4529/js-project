const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../config/config.json");

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_PASSWORD);
  } catch (err) {
    return null;
  }
};

module.exports = verifyToken;
