import React, { Fragment, useState } from "react";
import './element.css'
//import { listItems } from "../storage";

function Element({ value, edit, onEditField, onSubmitEdit, editInput, onInputEdit, onDeleteTask }) {
  console.log(value);
  

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
  // const handleInput = (ev) =>{
  //   setTodoTask(ev.target.value)
  // }

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
            onChange={e => onEditField(e.target.value)}
            value={editInput}
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

          <button className="edit_button" onClick={onInputEdit}>
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