import React, { useState } from "react";
import Element from "./Element";
import './List.css'
import { listItems } from '../storage'

function List() {
    
    const click = () => {

    };
    return(
        <div className="list">
            <h2>TODO list</h2>
            
            {listItems.map(Item => 
       
                <Element value={Item}/>
            )}
            
        </div>
    );
}
export default List;



/*function AddListItem() {
    listItems.push({
        
    })
}

*/