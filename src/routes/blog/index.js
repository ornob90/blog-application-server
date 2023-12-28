const addBlog = require("../../api/blog/addBlog");
const getAllBlogs = require("../../api/blog/getAllBlogs");
const getSingleBlogPost = require("../../api/blog/getSingleBlogPost");
const updateSingleBlog = require("../../api/blog/updateSingleBlog");

const router = require("express").Router();

// GET
router.get("/api/blogs", getAllBlogs);
router.get("/api/blog-post/:postId", getSingleBlogPost);

// POST
router.post("/api/blog-post", addBlog);

router.put("/api/blog-post/:postId", updateSingleBlog);

module.exports = router;
