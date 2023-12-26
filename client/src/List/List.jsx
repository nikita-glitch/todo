import React from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

const List = () => {
  const todo = useSelector(selector);
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

const selector = createSelector(
  (state) => state.todo.todos,
  (state) => state.todo.filter,

  (todos, filter) => {
    if (filter === "all") {
      return todos;
    }

    return todos.filter((todo) => {
      if (filter === "active") {
        return !todo.isChecked;
      }
      return todo.isChecked;
    });
  }
);
