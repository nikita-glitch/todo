const Todo = require("../schemas/ToDo");
const User = require("../schemas/User");

exports.getTodoList = async (req, res) => {
  try {
    const id = req.id;
    const user = await User.findById(id);
    const todos = [];
    for (const item of user.todos) {
      const todo = await Todo.findById(item);
      todos.push(todo);
    }
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const id = req.id;
    const todoId = req.body;
    const user = await User.findById(id);
    isUserTodo = user.todos.find((item) => item.toString() === todoId.id);
    if (!isUserTodo) {
      return res.status(403).json({ message: "Error" });
    }
    await Todo.findByIdAndDelete(todoId.id);
    user.todos = user.todos.filter((item) => item.toString() !== todoId.id);
    await user.save();
    res.status(200).json({ message: "Todo deleted succsessfully" });
  } catch (error) {
    console.log(error);
  }
};
exports.updateTodo = async (req, res) => {
  try {
    const id = req.id;
    const { todoId, todoTask, isChecked } = req.body;
    const user = await User.findById(id);
    isUserTodo = user.todos.find((item) => item.toString() === todoId);
    if (!isUserTodo) {
      return res.status(403).json({ message: "Error" });
    }
    if (todoTask && isChecked) {
      await Todo.findByIdAndUpdate(todoId, { todoTask: todoTask });
      await Todo.findByIdAndUpdate(todoId, { isChecked: isChecked });
    } else if (isChecked) {
      await Todo.findByIdAndUpdate(todoId, { isChecked: isChecked });
    } else {
      await Todo.findByIdAndUpdate(todoId, { todoTask: todoTask });
    }
    res.status(200).json({ message: "Todo updated succsessfully" });
  } catch (error) {
    console.log(error);
  }
};
exports.createTodo = async (req, res) => {
  try {
    const id = req.id;
    const { todoTask } = req.body;
    const user = await User.findById(id);
    const todo = new Todo({ todoTask: todoTask });
    await todo.save();
    user.todos.push(todo._id);
    await user.save();
    res.status(201).json({ message: "Todo created succsessfully" });
  } catch (error) {
    console.log(error);
  }
};
