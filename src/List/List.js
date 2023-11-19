import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({ value, onAddElementClick, input, onInputChange, deleteTodo }) {
  const [edit, setEdit] = useState(false);
  const [submit, setSubmit] = useState();
 
  const [editText, setEditText] = useState();
  function editTask() {
  //  let index = value.findIndex(item => item.id === todoTask.id);
   // if (index !== -1) {
  //    listItems[index].todoTask = todoTask;
    
  }
  function submitEdit() {
    //  let index = value.findIndex(item => item.id === todoTask.id);
     // if (index !== -1) {
    //    listItems[index].todoTask = todoTask;
      
    }
   
      // function edit() {
      //   //  let index = value.findIndex(item => item.id === todoTask.id);
      //    // if (index !== -1) {
      //   //    listItems[index].todoTask = todoTask;
          
      //   }
  return (
    <div className="list">
      <div className="add_element">
        <textarea
          className="input_task"
          placeholder="Write your task here"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button className="add_button" onClick={onAddElementClick}>
          Add task
        </button>

      </div>
      
      {value.map(item =>
        <Element
          key={item.id}
          value={item}
          edit={edit}
          submit={submit}
          editText={editText}
          onEditField={setEdit}
          onSubmitEdit={setSubmit}
          onDeleteTask={() => deleteTodo(item.id)}
          onInputEdit={editTask}
        />)}
    </div>
  );
}
export default List;
/* {value.map(item =>
        <Element
          key={item.id}
          value={item}
          
        />)}
         */