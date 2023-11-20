import React, { useState } from "react";
import List from "./List/List";
import './page.css';


function Page() {
  const [listItem, setListItem] = useState([]);
  const [input, setInput] = useState('');
  console.log(input);
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
  function deleteTodo(id) { 
    let index = listItem.findIndex(item => item.id === id);
    if (index === -1) { return }
    const filteredBuf = listItem.filter(todo => todo !== listItem[index]);
    setListItem(filteredBuf);
  }
  function submitEdit(id, editText) {
    if(!editText) { return }
    let index = listItem.findIndex(item => item.id === id);
    if (index === -1) { return }
    const editBuf = listItem.slice();
    editBuf[index].todoTask = editText;
    setListItem(editBuf);
  }
  function setChecked(id, isChecked) {
    let index = listItem.findIndex(item => item.id === id);
    if (index === -1) { return }
    const checkBuf = listItem.slice();
    checkBuf[index].isChecked = !isChecked;
    setListItem(checkBuf);
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
      
      <List 
        value={listItem}
        onAddElementClick={addElement} 
        textInput={input} 
        onInputChange={setInput} 
        deleteTodo={deleteTodo} 
        submitEdit={submitEdit}
        setChecked={setChecked}
      />
    </div>
  );
}
export default Page;