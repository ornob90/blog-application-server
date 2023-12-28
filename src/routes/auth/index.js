const login = require("../../api/auth/login");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// POST
router.post("/api/auth/login", login);

module.exports = router;
