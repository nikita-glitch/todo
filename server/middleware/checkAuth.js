const jwt = require('jsonwebtoken');

exports.check = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token || token === null) {
      return res.status(401).json({ message: "Unauthoried" });
    }
    const decodedToken = jwt.verify(token, 'new-secret-signature');
    req.id = decodedToken.data;
    next();
  } catch (error) {
    console.log(error);
  }
};
