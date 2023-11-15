import React from "react";
import './element.css'

function Element(line) {
    return(
        <div className="element">
            <button className="add_button" onClick={{}}>
                Add item
            </button>
            <textarea className="input_task" disabled value={line.value}/>
            <div className="button_group">

                <button className="edit_button" onClick={() => {}} >
                    Edit
                </button>
                <button className="submit_button" onClick={() => {}}>
                    Submit
                </button>
                <button className="delete_button" onClick={() => {}}>
                    Delete
                </button>
            </div>
            
        </div>
    );
}
export default Element;