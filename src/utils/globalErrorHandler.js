const globalErrorHandler = (err, _req, res, _next) => {
  res.status(err.status || 500).json({
    message: "There is a server side error!",
    errors: err.errors,
  });
};

module.exports = globalErrorHandler;
