import React, { Fragment, useState } from "react";
import "./element.css";

function Element({
  value,
  onSubmitEdit,
  editText,
  onEditText,
  onDeleteTask,
  onCheck
}) {
  const [edit, setEdit] = useState(false);
  function handleClick() {
    onSubmitEdit();
    setEdit(false);
  }
  function handleInput(ev) {
    onEditText(ev.target.value)
  }
  return (
    <div className="element">
      <input type="checkbox" onChange={onCheck}/>
      {edit ? (
        <Fragment>
          <input
            type="text"
            onChange={handleInput}
            value={editText}
          />
          <button className="submit_button" onClick={handleClick}>
            Submit
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <div className="task">{value.todoTask}</div>
          <button className="edit_button" onClick={() => setEdit(true)}>
            Edit
          </button>
        </Fragment>
      )}
      <div className="button_group">
        <button className="delete_button" onClick={onDeleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Element;
