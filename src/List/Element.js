import React, { Fragment, useState } from "react";
import "./element.css";

function Element({
  value,
  onSubmitEdit,
  editText,
  onEditText,
  onDeleteTask
}) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="element">
      <input type="checkbox" />
      {edit ? (
        <Fragment>
          <input
            type="text"
            onChange={(e) => onEditText(e.target.value)}
            value={editText}
          />
          <button className="submit_button" onClick={() => {onSubmitEdit(); setEdit(false)}}>
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
