import React, { Fragment, useState } from "react";
import './element.css'
//import { listItems } from "../storage";

function Element({ value,  onEditField, onSubmitEdit, editText, onEditText, onDeleteTask }) {
  //console.log(value);
  const [edit, setEdit] = useState(false);
    const [submit, setSubmit] = useState(false)
  // const deleteElement = () => {
  //   let index = listItems.findIndex(item => item.id === todoTask.id);
  //   if (index === -1) { return }
  //   listItems.splice(index, 1);
  // };

  // const editElement = () => {
  //   let index = listItems.findIndex(item => item.id === todoTask.id);
  //   if (index !== -1) {
  //     listItems[index].todoTask = todoTask;
  //   }
  //   setEdit(false);
  // };


  // const handleEdit = () => {
  //   setEdit(true)
  // }

  return (
    <div className="element">
      <input type="checkbox" />
      {edit ?
        <Fragment>
          <input 
            type="text" 
            onChange={(e) => onEditText(e.target.value)}
            value={editText}
          />

          <button className="submit_button" onClick={onSubmitEdit}>
            Submit
          </button>
        </Fragment>
        :
        <Fragment>
          <div className="task">
            {value.todoTask}
          </div>

          <button className="edit_button" onClick={() => setEdit(true)}>
            Edit
          </button>

        </Fragment>
      }
      <div className="button_group">

        <button className="delete_button" onClick={onDeleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Element;