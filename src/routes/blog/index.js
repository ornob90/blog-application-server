const addBlog = require("../../api/blog/addBlog");
const getAllBlogs = require("../../api/blog/getAllBlogs");

const router = require("express").Router();

// GET
router.get("/api/blogs", getAllBlogs);

// POST
router.post("/api/blog-post", addBlog);

module.exports = router;
