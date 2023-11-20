import React, { useState } from "react";
import Element from "./Element";
import "./List.css";

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({
  value,
  onAddElementClick,
  input,
  onInputChange,
  deleteTodo,
  submitEdit,
}) {
  const [editText, setEditText] = useState("");
  return (
    <div className="list">
      <div className="add_element">
        <form>
          <input
            className="input_task"
            placeholder="Write your task here"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
          />
        </form>
        <button className="add_button" onClick={onAddElementClick}>
          Add task
        </button>
      </div>

      {value.map((item) => (
        <Element
          key={item.id}
          value={item}
          editText={editText}
          onEditText={setEditText}
          onSubmitEdit={() => {submitEdit(item.id, editText); setEditText('')}}
          onDeleteTask={() => deleteTodo(item.id)}
        />
      ))}
    </div>
  );
}
export default List;
