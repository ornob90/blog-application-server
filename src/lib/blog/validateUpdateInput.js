const validateUpdateInput = (postId, dataToUpdate) => {
  if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
    return false;
  }

  if (!dataToUpdate) {
    return false;
  }

  return true;
};

module.exports = validateUpdateInput;
