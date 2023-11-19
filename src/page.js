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
  function deleteTodo(id) { // удалить по ключу
    let index = listItem.findIndex(item => item.id === id);
     if (index == -1) { return }
     const filteredBuf = listItem.filter(todo => todo !== listItem[index]);
     setListItem(filteredBuf);
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
      
      <List value={listItem} onAddElementClick={addElement} textInput={input} onInputChange={setInput} deleteTodo={deleteTodo}/>
    </div>
  );
}
export default Page;