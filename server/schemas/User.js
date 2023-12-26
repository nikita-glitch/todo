const mongoose = require('mongoose');
const ToDo = require('./ToDo');

const userShema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  todos: [ToDo]
})
module.exports = mongoose.model('user', userShema);