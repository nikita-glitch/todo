import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List({ value, onAddElementClick }) {
  console.log(value);
  return (
    <div className="list">
      <div className="add_element">
        
        <button className="add_button" onClick={onAddElementClick}>
          Add task
        </button>

      </div>
      
      {value.map(item =>
        <Element
          key={item.id}
          value={item}
          
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