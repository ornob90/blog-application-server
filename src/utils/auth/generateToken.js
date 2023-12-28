const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = ({ userName }) => {
  const token = jwt.sign({ userName }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = generateToken;
