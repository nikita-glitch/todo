import React from "react";
import './element.css'
import { listItems } from "../storage";

function Element(line) {
    const DeleteElement = () => {

       let index = listItems.findIndex(item => item.id === line.id);
       if(index !== -1){
            listItems.splice(index, 1);
        }
    };  
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