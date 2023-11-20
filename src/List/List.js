import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({ value, onAddElementClick, input, onInputChange, deleteTodo, submitEdit }) {
  // const [edit, setEdit] = useState(false);
  const [submit, setSubmit] = useState();
  const [editText, setEditText] = useState('');
 // console.log(editText);
  
  // function submitEdit() {
  //   //  let index = value.findIndex(item => item.id === todoTask.id);
  //    // if (index !== -1) {
  //   //    listItems[index].todoTask = todoTask;
      
  //   }
 
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
          submit={submit}
          editText={editText}
          onEditText={setEditText}
          onSubmitEdit={() => submitEdit(item.id, editText)}
          onDeleteTask={() => deleteTodo(item.id)}
        />)}
    </div>
  );
}
export default List;
