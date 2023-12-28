const validatePostId = (postId) => {
  if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
    return false;
  }
  return true;
};

module.exports = validatePostId;
