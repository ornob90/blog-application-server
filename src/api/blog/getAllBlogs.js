const BlogPost = require("../../models/blog");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogPosts = await BlogPost.find();
    res.send({
      status: "success",
      message: "Data retrieved",
      blogPosts,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = getAllBlogs;
