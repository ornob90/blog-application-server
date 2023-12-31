const validatePostId = require("../../lib/blog/validatePostId");
const BlogPost = require("../../models/blog");

const getSingleBlogPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    if (!validatePostId(postId)) {
      return res.status(400).send({ error: "Invalid Post ID" });
    }

    const blogPost = await BlogPost.findById(postId);

    if (!blogPost) {
      return res.status(404).send({ error: "Blog Post not found" });
    }

    res.send({
      status: "success",
      message: "Data retrieved",
      blogPost,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = getSingleBlogPost;
