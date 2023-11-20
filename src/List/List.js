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
  setChecked
}) {
  const [editText, setEditText] = useState("");
  function handleInput(ev) {
    onInputChange(ev.target.value)
  }
  return (
    <div className="list">
      <div className="add_element">
        <form>
          <input
            className="input_task"
            placeholder="Write your task here"
            value={input}
            onChange={handleInput}
          />
        </form>
        <button className="add_button" onClick={() => {onAddElementClick(); onInputChange}}>
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
