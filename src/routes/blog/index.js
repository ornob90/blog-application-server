const addBlog = require("../../api/blog/addBlog");
const deleteSingleBlog = require("../../api/blog/deleteSingleBlog");
const getAllBlogs = require("../../api/blog/getAllBlogs");
const getSingleBlogPost = require("../../api/blog/getSingleBlogPost");
const updateSingleBlog = require("../../api/blog/updateSingleBlog");

const router = require("express").Router();

// GET
router.get("/api/blogs", getAllBlogs);
router.get("/api/blog-post/:postId", getSingleBlogPost);

// POST
router.post("/api/blog-post", addBlog);

// PUT
router.put("/api/blog-post/:postId", updateSingleBlog);

// DELETE
router.delete("/api/blog-post/:postId", deleteSingleBlog);

module.exports = router;
