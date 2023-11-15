import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

function List() {
    const AddElement = () => {
        listItems.push({
            id: Date.now(),
            line: `${task}`
        });
        setTask('');
        console.log(listItems);
    };
    const [task, setTask] = useState();
    return(
        <div className="list">
            <h2>TODO list</h2>
            <div className="add_element">
                <textarea className="input_task"  placeholder="Write your task here"  value={task} onChange={e => setTask(e.target.value)}/>
                <button className="add_button" onClick={AddElement}>
                    Add item
                </button>
                
            </div>
            {listItems.map(Item => 
       
                <Element key={Item.id} value={Item.line} id={Item.id}/>
            )}
            
        </div>
    );
}
export default List;



