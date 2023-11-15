import React from "react";
import './element.css'
import { listItems } from "../storage";

function Element(line) {
    const DeleteElement = () => {
       let index = listItems.findIndex(Item => {Item.id === line.id});
       listItems.splice(index, 1);
    };  
console.log(line);
    return(
        <div className="element">
            <div className="task">
                {line.value}
            </div>
            <div className="button_group">
                <button className="edit_button" onClick={() => {}}>
                    Edit
                </button>
                <button className="delete_button" onClick={DeleteElement}>
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Element;