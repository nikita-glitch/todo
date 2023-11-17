import React, { useState } from "react";
import List from "./List/List";
import './page.css';
//import { listItems } from "./storage";


function Page() {
  const [listItem, setListItem] = useState([]);
  const [input, setInput] = useState('')
  function addElement() {
    if(!input) { return }
    const buf = listItem.slice();
    buf.push({
      id: Date.now(),
      todoTask: `${input}`,
      isChecked: false
    });
    setListItem(buf);
  }
   
  return (
    <div>
      <h1 style={{
        display: "flex",
        justifyContent: "center"
      }}
      >
        TODO
      </h1>
      
      <List value={listItem} onAddElementClick={addElement} textInput={input} onInputChange={setInput}/>
    </div>
  );
}
export default Page;