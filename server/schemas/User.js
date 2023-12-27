const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  todos: [{type: mongoose.ObjectId, ref: 'ToDo'}]
})
module.exports = mongoose.model('user', userShema);