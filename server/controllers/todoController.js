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
exports.updateTodo = async (req, res, next) => {
  try {
    const { todoId, todoTask, isChecked } = req.body;

    const fieldsToUpdate = {
      isChecked,
    };

    if (todoTask) {
      fieldsToUpdate.todoTask = todoTask;
    }
    await Todo.findByIdAndUpdate(todoId, fieldsToUpdate);
    res.status(200).json({ message: "Todo updated succsessfully" });
  } catch (error) {
    console.log(error);
    if (error.ValidationError) {
      return next(new ValidationError(403, "message"));
    }
    next(err);
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

class ValidationError extends Error {
  // constructor(status, message, extraData) {
  //   super(message);
  //   this.status = status;
  //   this.extraData=extraData
  // }
}

function errorLogger(error, req, res) {
  res.status(error.status).json({ message: error.message });
}
