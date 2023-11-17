import React, { useState } from "react";
import './element.css'
import { listItems } from "../storage";

function Element({ value, todoTask, setTodoTask }) {
  console.log(value);
  const [edit, setEdit] = useState(false);

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
        <div>
          <input type="text" 
          />

          <button className="submit_button" >
            Submit
          </button>
        </div>
        :
        <div>
          <div className="task">
            {value.todoTask}
          </div>

          <button className="edit_button" >
            Edit
          </button>

        </div>
      }
      <div className="button_group">

        <button className="delete_button"  >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Element;