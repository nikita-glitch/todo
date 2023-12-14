import React, { useState } from "react";
import "./element.css";
import { useDispatch } from "react-redux";

function TodoItem({ value }) {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(value.todoTask);
  const dispatch = useDispatch();

  const handleEditedForm = (ev) => {
    ev.preventDefault();
    if (!editedText) {
      return;
    }
    dispatch({
      type: "todo/editTodo",
      payload: value.id,
      editText: editedText,
    });
    setEdit(false);
  };
  const handleInput = (ev) => {
    setEditedText(ev.target.value);
  };
  const handleDoubleClick = (ev) => {
    ev.preventDefault();
    setEdit(true);
  };
  const onDeleteTask = () => {
    dispatch({ type: "todo/deleteTodo", payload: value.id });
  };
  const onCheck = () => {
    dispatch({ type: "todo/setCheckedTodo", payload: value.id });
  };
  const handleBlur = () => {
    setEdit(false);
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
        <div className="field" onDoubleClick={handleDoubleClick}>
          {edit ? (
            <form onSubmit={handleEditedForm} onBlur={handleBlur}>
              <input
                className="edit_input"
                type="text"
                onChange={handleInput}
                value={editedText}
                autoFocus
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
