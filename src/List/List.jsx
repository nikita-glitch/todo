import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import { useDispatch } from "react-redux";

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({ value }) {
  const [input, setInput] = useState("");
  const check = value.every((item) => item.isChecked === true);
  const dispatch = useDispatch();

  const handleSubmitForm = (ev) => {
    ev.preventDefault();
    if (!input) {
      return;
    }
    dispatch({ type: "todo/addTodo", payload: input });
    setInput("");
  };
  const handleInputForm = (ev) => {
    setInput(ev.target.value);
  };
  const setAllChecked = () => {
    if (!value) {
      return;
    }
    dispatch({ type: "todo/setAllChecked" });
  };
  return (
    <div className="list">
      <div className="add_todo">
        <input
          className={value.length ? "visible_checkbox" : "invisible_checkbox"}
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
      {value.map((item) => (
        <TodoItem key={item.id} value={item} />
      ))}
    </div>
  );
}
export default List;
