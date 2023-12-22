import React from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

const List = () => {
  const todo = useSelector((state) => {
    switch (state.todo.filter) {
      case "all":
        return state.todo.todos;
      case "active":
        return state.todo.todos.filter((todo) => !todo.isChecked);
      case "completed":
        return state.todo.todos.filter((todo) => todo.isChecked);
    }
  });
  return (
    <div className="list">
      <AddTodo />
      {todo.map((item) => (
        <TodoItem key={item.id} value={item} />
      ))}
    </div>
  );
};
export default List;
