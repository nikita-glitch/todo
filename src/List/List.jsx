import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css";

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({
  value,
  onAddElementClick,
  deleteTodo,
  submitEdit,
  setChecked,
}) {
  const [input, setInput] = useState("");
  const handleSubmitForm = (ev) => {
    ev.preventDefault();
    if (!input) {
      return;
    }
    onAddElementClick(input);
    setInput('');
  }
  const handleInputForm = (ev) => {
    setInput(ev.target.value);

  } 
  const handleSubmitEdit = (editText, item) => {
    submitEdit(item.id, editText);
  }
  return (
    <div className="list">
      <div className="add_element">
        <form onSubmit={handleSubmitForm}>
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
        <TodoItem
          key={item.id} 
          value={item}
          onCheck={() => setChecked(item)}
          onSubmitEdit={(editText) => handleSubmitEdit(editText, item)}
          onDeleteTask={() => deleteTodo(item)}
        />
      ))}
    </div>
  );
}
export default List;
