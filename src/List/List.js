import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

// let reactState;
// const setTask = (value) => {
//   reactState = value;
//   reactCore.render()
// }

function List() {
  const [task, setTask] = useState();

  const addElement = () => {
    if (!task) { return };

    listItems.push({
      id: Date.now(),
      todoTask: `${task}`,
      isChecked: false
    });
  };

  const handleTextChange = (ev) => {
    setTask(ev.target.value)
  }

  return (
    <div className="list">
      <div className="add_element">
        <textarea
          className="input_task"
          placeholder="Write your task here"
          value={task}
          onChange={handleTextChange}
        />
        <button className="add_button" onClick={addElement}>
          Add task
        </button>

      </div>
      {listItems.map(item =>
        <Element
          key={item.id}
          value={item.todoTask}
          id={item.id}
          isChecked={item.isChecked}
        />
      )}

    </div>
  );
}
export default List;