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
  textInput,
  onInputChange,
  deleteTodo,
  submitEdit,
  setChecked
}) {
  const [editText, setEditText] = useState("");
  function handleInput(ev) {
    onInputChange(ev.target.value)
  }
  return (
    <div className="list">
      <div className="add_element">
          <input
            className="input_task"
            type="text"
            placeholder="Write your task here"
            onChange={handleInput}
            value={textInput}
          />
        <button className="add_button" onClick={onAddElementClick}>
          Add task
        </button>
      </div>

      {value.map((item) => (
        <Element
          key={item.id}
          value={item}
          editText={editText}
          onCheck={() => setChecked(item.id, item.isChecked)}
          onEditText={setEditText}
          onSubmitEdit={() => {
            submitEdit(item.id, editText); 
            setEditText('')
          }}
          onDeleteTask={() => deleteTodo(item.id)}
        />
      ))}
    </div>
  );
}
export default List;
