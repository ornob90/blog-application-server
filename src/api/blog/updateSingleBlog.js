const { ObjectId } = require("mongodb");
const validateUpdateInput = require("../../lib/blog/validateUpdateInput");
const BlogPost = require("../../models/blog");

const updateSingleBlog = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const dataToUpdate = req.body;

    if (!validateUpdateInput(postId, dataToUpdate)) {
      return res.status(400).send({ error: "Invalid Input" });
    }

    const response = await BlogPost.updateOne(
      { _id: new ObjectId(postId) },
      {
        $set: dataToUpdate,
      }
    );

    res.send({
      updateOne: response.modifiedCount > 0,
      status: response.acknowledged,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = updateSingleBlog;
