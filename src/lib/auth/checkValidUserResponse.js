const checkValidUserResponse = (userInfo) => {
  const { userName, password, userType } = userInfo || {};
  return !!userName && !!password && !!userType;
};

module.exports = checkValidUserResponse;
