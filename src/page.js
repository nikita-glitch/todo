import React, { useState } from "react";
import List from "./List/List";
import './page.css';
//import { listItems } from "./storage";


function Page() {
  const [listItem, setListItem] = useState([]);
  const [input, setInput] = useState('')
  function addElement() {
    const buf = listItem.slice()
    console.log('avav');
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
      <textarea
          className="input_task"
          placeholder="Write your task here"
          value={input}
          onChange={(e) => 
            setInput(e.target.value)}
        />
      <List value={listItem} onAddElementClick={addElement} />
    </div>
  );
}
export default Page;