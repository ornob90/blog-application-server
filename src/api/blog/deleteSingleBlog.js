const validatePostId = require("../../lib/blog/validatePostId");
const BlogPost = require("../../models/blog");

const deleteSingleBlog = async (req, res, next) => {
  try {
    const { postId } = req.params;

    if (!validatePostId(postId)) {
      return res.status(400).send({ error: "Invalid Post ID" });
    }

    const deletedBlogPost = await BlogPost.findByIdAndDelete(postId);

    if (!deletedBlogPost) {
      return res.status(404).send({ error: "Blog Post not found" });
    }

    res.send({
      deleteOne: true,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = deleteSingleBlog;
