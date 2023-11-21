import React, { Fragment, useState } from "react";
import "./element.css";

function TodoItem({
  value,
  onSubmitEdit,
  onDeleteTask,
  onCheck
}) {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(value.todoTask);
  const handleEditedForm = (ev) => {
    ev.preventDefault();
    if (!editedText) {
      return;
    }
    onSubmitEdit(editedText);
    setEdit(false);
  }
  const handleInput = (ev) => {
    setEditedText(ev.target.value);
  }
  return (
    <>
      <div className={value.isChecked ? "checked_element" : 'element'}> 
          <input 
            type="checkbox" 
            onChange={onCheck} 
          />
          {edit ? (
            <form onSubmit={handleEditedForm}>
              <input 
                className="editing"
                type="text" 
                onChange={handleInput} 
                value={editedText} 
              />
            </form>
          ) : (
            <>
              <div className="task" onDoubleClick={() => setEdit(true)}>
                {value.todoTask}
              </div>
              
            </>
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
      
    </>
  );
}
export default TodoItem;
