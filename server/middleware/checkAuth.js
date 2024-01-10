const jwt = require("jsonwebtoken");
const User = require("../schemas/User");
const ValidationError = require("../error/error");

exports.check = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token || token === null) {
      return next(ValidationError.unautorizedError('Unautorized'))
    }
    const decodedToken = '';
    try {
      decodedToken = jwt.verify(token, process.env.SECRET_KEY); 
    } catch (error) {
      return next(ValidationError.invalidTokenError(error.message));
    }
    if (!(await User.findById(decodedToken.data))) {
      return next(ValidationError.notFound("User not found"));
    }
    req.id = decodedToken.data;
    next();
  } catch (error) {
    console.log(error);
    next(error)
  }
};
