import React, { Fragment, useState } from "react";
import "./element.css";

function TodoItem({
  value,
  onSubmitEdit,
  editText,
  onEditText,
  onDeleteTask,
  onCheck,
}) {
  const [edit, setEdit] = useState(false);
  function handleClick() {
    onSubmitEdit();
    setEdit(false);
  }
  function handleInput(ev) {
    onEditText(ev.target.value);
  }// меняется только класс, верстку не менять
  return (
    <>
      {value.isChecked ? (
        <div className="checked_element"> 
          <input 
            type="checkbox" 
            onChange={onCheck} 
          />
          <>
            <div className="task">
              {value.todoTask}
            </div>
            <button
              className="edit_button"
              disabled
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          </>

          <div className="button_group">
            <button 
              className="delete_button" 
              onClick={onDeleteTask}
              >
              Delete
            </button>
          </div>
        </div>
        ) : (
        <div className="element">
          <input 
            type="checkbox" 
            onChange={onCheck} 
          />
          {edit ? (
            <>
              <input 
                type="text" 
                placeholder={value.todoTask}
                onChange={handleInput} 
                value={editText} 
              />
              <button 
                className="submit_button" 
                onClick={handleClick}
              >
                Submit
              </button>
            </>
          ) : (
            <Fragment>
              <div className="task">
                {value.todoTask}
              </div>
              <button 
                className="edit_button" 
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
            </Fragment>
          )}
          <div className="button_group">
            <button 
              className="delete_button" 
              onClick={onDeleteTask}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default TodoItem;
