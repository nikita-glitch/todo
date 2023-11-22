import React, { useState } from "react";
import List from "./List/List";
import "./page.css";
import Footer from "./Footer";

function Page() {
  const [listItem, setListItem] = useState([]);
  const [allFlag, setAllFlag] = useState(true);
  const [activeFlag, setActiveFlag] = useState(false);
  const [completedFlag, setCompletedFlag] = useState(false);

  const complitedArray = listItem.filter((item) => item.isChecked === true);
  const activeArray = listItem.filter((item) => item.isChecked === false);

  function addElement(input) {
    const buf = [
      ...listItem,
      {
        id: Date.now(),
        todoTask: input,
        isChecked: false,
      },
    ];
    setListItem(buf);
  }
  function deleteTodo(item) {
    const id = item.id;
    const filteredBuf = listItem.filter((todo) => todo.id !== id);
    setListItem(filteredBuf);
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
    const { id, isChecked } = item;
    const index = listItem.findIndex((todo) => todo.id === id);
    const checkedBuf = listItem.slice();
    checkedBuf[index].isChecked = !isChecked;
    setListItem(checkedBuf);
  };
  const setAllChecked = () => {
    const arr = listItem.map((item) => {
      item.isChecked = !item.isChecked;
      return item;
    });
    setListItem(arr);
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
        value={allFlag ? listItem : activeFlag ? activeArray : complitedArray}
        onAddElementClick={addElement}
        deleteTodo={deleteTodo}
        submitEdit={submitEdit}
        setChecked={setChecked}
        setAllChecked={setAllChecked}
      />
      <Footer
        completedTasks={activeArray.length}
        setAllFlag={setAllFlag}
        setActiveFlag={setActiveFlag}
        setCompletedFlag={setCompletedFlag}
      />
    </>
  );
}
export default Page;
