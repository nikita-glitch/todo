const Todo = require("../schemas/ToDo");
const User = require("../schemas/User");

exports.getTodoList = async (req, res) => {
  try {
    const id = req.id;
    const todos = await Todo.find({ userID: id });
    res.json(todos);
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.body.id;
    if (!todoId) {
      res.status(400).json({ message: "Error" });
    }
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: "Todo deleted succsessfully" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    const { todoId, todoTask, isChecked } = req.body;
    if (todoTask && isChecked) {
      await Todo.findByIdAndUpdate(todoId, { todoTask: todoTask, isChecked: isChecked });
    } else if (isChecked) {
      await Todo.findByIdAndUpdate(todoId, { isChecked: isChecked });
    } else {
      await Todo.findByIdAndUpdate(todoId, { todoTask: todoTask });
    }
    res.status(200).json({ message: "Todo updated succsessfully" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};
exports.createTodo = async (req, res) => {
  try {
    const id = req.id;
    const { todoTask } = req.body;
    const todo = new Todo({ todoTask: todoTask, userID: id });
    await todo.save();
    res.status(201).json({ message: "Todo created succsessfully" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
};
