import React, { useState } from "react";
import List from "./List/List";
import "./page.css";

function Page() {
  const [listItem, setListItem] = useState([]);
  const [input, setInput] = useState("");
  const [checkedTodo, setChekedTodo] = useState([]);
  function addElement() {
    if (!input) {
      return;
    }
    const buf = listItem.slice();
    setListItem([
      {
        id: Date.now(),
        todoTask: `${input}`,
        isChecked: false,
      },
      ...buf,
    ]);
    setInput("");
  }
  function deleteTodo(id) {
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
    // const editBuf = listItem.slice();
    // const firstPart = listItem.slice(0, index);
    // const secondPart = listItem.slice(index, listItem.length - 1);
    // const elem = editBuf[index];
    // setListItem(
    //   firstPart.concat(
    //     {
    //       ...elem,
    //       todoTask: editText,
    //     },
    //     secondPart
    //   )
    // );
    
    editBuf[index].todoTask = editText;
    setListItem(editBuf);
  }
  function setChecked(id, isChecked) {
    //массив объектов(id, index)
    let index = listItem.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    const checkBuf = listItem.slice();
    if (isChecked) {
      checkBuf[index].isChecked = !isChecked;
      setChekedTodo(checkedTodo.filter((todo) => todo.id !== id));
      const [oldIndex] = checkedTodo.filter((todoId) => todoId.id === id);
      const [currentTodo] = checkBuf.filter((todo) => todo.id === id);
      const firstPart = listItem.slice(0, oldIndex.index);
      const secondPart = listItem.slice(oldIndex.index, listItem.length - 1);
      setListItem(firstPart.concat(currentTodo, secondPart));
    } else {
      checkBuf[index].isChecked = !isChecked;
      setChekedTodo([
        ...checkedTodo,
        {
          id: id,
          index: index,
        },
      ]);
      checkBuf[index].isChecked = !isChecked;
      const [bufArray] = listItem.filter((todo) => todo.id === id);
      const arr = checkBuf.filter((todo) => todo.id !== id);
      setListItem(arr.concat(bufArray));
      /*console.log(bufArray);
      console.log(arr);*/
      // setListItem([arr, bufArray])
      // const item = checkBuf.splice(index, 1)[0];
      // checkBuf.splice(checkBuf.length, 1, item);
      // setListItem(checkBuf);
    }
  }
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
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
