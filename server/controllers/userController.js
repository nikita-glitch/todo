const User = require("../schemas/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registrationUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const person = await User.findOne({ email });
    if (person) {
      return res.json({ message: "User alredy exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    let user = new User({ name: name, email: email, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User was created succsessfully" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await User.findOne({ email });
    if (!person) {
      return res.status(400).json({ message: "Wrong email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, person.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong email or password" });
    }
    const token = jwt.sign(
      { data: person._id }, 
      "new-secret-signature", 
      { expiresIn: "1h" }
    );
    res.json(token);
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};
