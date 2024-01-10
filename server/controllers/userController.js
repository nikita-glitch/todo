const User = require("../schemas/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ValidationError = require("../error/error");

exports.registrationUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const person = await User.findOne({ email });
    console.log(person);
    if (person) {
      return next(ValidationError.badRequest('User alredy exist'))
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ name: name, email: email, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User was created succsessfully" });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const person = await User.findOne({ email });
    if (!person) {
      return next(ValidationError.badRequest('Wrong email or password'))
    }
    const isPasswordCorrect = await bcrypt.compare(password, person.password);
    if (!isPasswordCorrect) {
      return next(ValidationError.badRequest('Wrong email or password'))
    }
    const token = jwt.sign(
      { data: person._id }, 
      process.env.SECRET_KEY, 
      { expiresIn: "1h" }
    );
    res.json(token);
  } catch (error) {
    console.log(error);
    next(error)
  }
};
