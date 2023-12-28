const { BlogPost } = require("../../models/blog");

const addBlog = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ error: "Blog Data are required" });
    }

    const blogPost = new BlogPost(data);
    await blogPost.save();

    res.send({
      insertOne: true,
      message: "Inserted Successfully!!",
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = addBlog;
