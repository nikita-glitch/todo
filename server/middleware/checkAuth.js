const jwt = require('jsonwebtoken');

exports.check = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token || token === null) {
    return res.json({ message: "Error" });
  }
  const decodedToken = jwt.verify(token, 'new-secret-signature');
  req.id = decodedToken.data;
  next();
};
