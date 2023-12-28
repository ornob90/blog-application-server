const User = require("../../models/user");
const generateToken = require("../../utils/auth/generateToken");

const login = async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  if (!user) {
    return res.status(401).send("unauthorized access");
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return res.status(401).json({
      error: "unauthorized access",
    });
  }

  const token = generateToken(userInfo);

  const secureCookie = req?.secure || req.hostname === "localhost";

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: secureCookie,
      sameSite: "none",
    })
    .send({ status: true, message: "Logged in successfully!" });
};

module.exports = login;
