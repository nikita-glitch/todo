const mongoose = require("mongoose");

const todoShema = new mongoose.Schema({
  todoTask: { type: String, required: true },
  isChecked: { type: Boolean, default: false },
  userID: { type: mongoose.ObjectId, ref: "User" },
});
module.exports = mongoose.model("ToDo", todoShema);
