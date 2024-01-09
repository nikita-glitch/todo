const ValidationError = require("../error/error");

exports.handleError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Unexpected error' });
};
