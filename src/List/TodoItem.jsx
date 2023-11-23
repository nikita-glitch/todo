import React, { Fragment, useState } from "react";
import "./element.css";

function TodoItem({ value, onSubmitEdit, onDeleteTask, onCheck }) {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(value.todoTask);
  const handleEditedForm = (ev) => {
    ev.preventDefault();
    if (!editedText) {
      return;
    }
    onSubmitEdit(editedText);
    setEdit(false);
  };
  const handleInput = (ev) => {
    setEditedText(ev.target.value);
  };
  return (
    <>
      <div className={value.isChecked ? "checked_element" : "element"}>
        <input
          className="todo_checkbox"
          type="checkbox"
          onChange={onCheck}
          checked={value.isChecked}
        />
        <div className="field" onDoubleClick={() => setEdit(true)}>
          {edit ? (
            <form onSubmit={handleEditedForm}>
              <input
                className="edit_input"
                type="text"
                onChange={handleInput}
                value={editedText}
              />
            </form>
          ) : (
            <>
              <div className="task">{value.todoTask}</div>
            </>
          )}
        </div>
        <div>
          <button className="delete_button" onClick={onDeleteTask}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
