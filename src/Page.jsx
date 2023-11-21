import React, { useState } from "react";
import List from "./List/List";
import "./page.css";
import Footer from "./Footer";

function Page() {
  const [listItem, setListItem] = useState([]);
  const [completedTasks, setComplitedTasks] = useState(0);
  function addElement(input) {
    setListItem([
      ...listItem,
      {
        id: Date.now(),
        todoTask: input,
        isChecked: false,
      }
    ]);
    //setComplitedTasks((prevState) => prevState + 1);
  }
  const countCompletedTasks = () => {
    let count = listItem.filter((item) => item.isChecked === false);
   // setComplitedTasks(count.length)
}
  function deleteTodo(item) {
    const id = item.id;
    const filteredBuf = listItem.filter((todo) => todo.id !== id);
    setListItem(filteredBuf);
  //  setComplitedTasks((prevState) => prevState - 1);
    }

  function submitEdit(id, editText) {
    if (!editText) {
      return;
    }
    let index = listItem.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    const editBuf = listItem.slice();
    editBuf[index].todoTask = editText;
    setListItem(editBuf);
  }

  const setChecked = (item) => {
    const id = item.id;
    const isChecked = item.isChecked;
 
    const index = listItem.findIndex((todo) => todo.id === id);
    const checkedBuf = listItem.slice();
    // if (isChecked) {
    //   setComplitedTasks((prevState) => prevState + 1);    
    // } else {
    //   setComplitedTasks((prevState) => prevState - 1);
    // }
    checkedBuf[index].isChecked = !isChecked;
    setListItem(checkedBuf);
  };
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        TODOS
      </h1>

      <List
        value={listItem}
        onAddElementClick={addElement}
        deleteTodo={deleteTodo}
        submitEdit={submitEdit}
        setChecked={setChecked}
      />
      <Footer value={listItem}/>
    </>
  );
}
export default Page;
