import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settedAllChecked, todoAdded } from "../store/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const check = todos.every((item) => item.isChecked);
  const dispatch = useDispatch();

  const handleSubmitForm = (ev) => {
    ev.preventDefault();
    if (!input) {
      return;
    }
    dispatch(todoAdded(input));
    setInput("");
  };
  const handleInputForm = (ev) => {
    setInput(ev.target.value);
  };
  const setAllChecked = () => {
    if (!todos) {
      return;
    }
    dispatch(settedAllChecked());
  };
  return (
    <div className="add_todo">
      <input
        className={todos.length ? "visible_checkbox" : "invisible_checkbox"}
        type="checkbox"
        onChange={setAllChecked}
        checked={check ? true : false}
      />
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          className="input_task"
          type="text"
          placeholder="What needs to be done?"
          onChange={handleInputForm}
          value={input}
        />
      </form>
    </div>
  );
};

export default AddTodo;
