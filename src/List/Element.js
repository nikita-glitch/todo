import React, { useState } from "react";
import './element.css'
import { listItems } from "../storage";

function Element(todoTask) {
    const [value, setValue] = useState(todoTask.value);
    const [edit, setEdit] = useState(false);

    const deleteElement = () => {
       let index = listItems.findIndex(item => item.id === todoTask.id);
       if(index !== -1){
            listItems.splice(index, 1);
        }
        
    };  
    
    return(
        <div className="element">
            {edit ?
                <div>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    
                    <button className="submit_button" onClick={() => setEdit(false)}>
                            Submit
                        </button>
                </div>
                :
                <div>
                    <div className="task">
                        {value}
                    </div>
                    
                        <button className="edit_button" onClick={() => setEdit(true)}>
                            Edit
                        </button>
                    
                </div>
            }
            <div className="button_group">
            
                <button className="delete_button" onClick={deleteElement} >
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Element;