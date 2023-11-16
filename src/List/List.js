import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

function List() {
    const [task, setTask] = useState();
    const AddElement = () => {
        listItems.push({
            id: Date.now(),
            todoTask: `${task}`
        });
        setTask('');
    };
    return(
        <div className="list">
            <div className="add_element">
                <textarea className="input_task"  placeholder="Write your task here"  value={task} onChange={e => setTask(e.target.value)}/>
                <button className="add_button" onClick={AddElement}>
                    Add task
                </button>
                
            </div>
            {listItems.map(item => 
       
                <Element key={item.id} value={item.todoTask} id={item.id}/>
            )}
            
        </div>
    );
}
export default List;



