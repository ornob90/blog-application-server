const checkValidUserResponse = require("../../lib/auth/checkValidUserResponse");
const User = require("../../models/user");
const generateToken = require("../../utils/auth/generateToken");

const signup = async (req, res, next) => {
  try {
    const userInfo = req.body;
    console.log(userInfo);
    const valid = checkValidUserResponse(userInfo);

    if (!valid) {
      return res.status(400).send({
        error: "Bad Request",
        message: "Invalid User Info",
      });
    }

    const token = generateToken(userInfo);

    const user = new User(userInfo);

    const response = await user.save();

    const secureCookie = req?.secure || req.hostname === "localhost";

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: secureCookie,
        sameSite: "none",
      })
      .send({ success: true });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = signup;
