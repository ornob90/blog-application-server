const addBlog = require("../../api/blog/addBlog");

const router = require("express").Router();

// POST
router.post("/api/blog-post", addBlog);

module.exports = router;
