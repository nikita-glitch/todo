import React, { useState } from "react";
import List from "./List/List";
import "./page.css";

function Page() {
  const [listItem, setListItem] = useState([]);
  const [input, setInput] = useState("");
  const [checkedTodo, setChekedTodo] = useState([]);

  //console.log(listItem);
  function addElement() {
    if (!input) {
      return;
    }
    const buf = listItem.slice();
    
    setListItem([
      {
        id: Date.now(),
        todoTask: input,
        isChecked: false,
      },
      ...buf,
    ]);
    setInput(""); // setInput  в компонент 
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
    const editBuf = listItem.slice();
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

  console.log(listItem);
  function setChecked(id, isChecked) {
    let index = listItem.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    const checkBuf = listItem.slice();
    
    if (isChecked) {
      

      const [oldIndex] = checkedTodo.filter((todoId) => todoId.id === id);
      const [currentTodo] = listItem.filter((todo) => todo.id === id);
      //const firstPart = listItem.slice(0, oldIndex.index);
      const firstPart = listItem.filter(todo => todo.isChecked === false);
      let secondPart = listItem.filter(todo => todo.isChecked === true);
      secondPart = secondPart.filter(todo => todo.id !== id);
      let newIndex = listItem.findIndex((item) => item.id === id);
      let n = firstPart.slice(0, oldIndex.index);
      let m = firstPart.slice(oldIndex.index, firstPart.length);
      console.log(n, m);
      console.log(oldIndex);
      setListItem(n.concat(currentTodo, m, secondPart))
      // console.log(oldIndex, 'old');
      // console.log(newIndex, 'new');
      // console.log(firstPart, 'first');
     // let secondPart =listItem.slice(oldIndex.index, listItem.length);
     // secondPart = secondPart.filter(todo => todo.id !== id)
      console.log(secondPart, 'second');
      //setListItem(firstPart.concat(currentTodo, secondPart));
      // //const secondPart = listItem.slice(oldIndex.index, listItem.length - index);
      // if ((listItem.length - newIndex) > 1) {
      //   const secondPart = listItem.slice(
      //     newIndex + 1,
      //     listItem.length
      //   );
      //   console.log(secondPart, 'second');
      //   // const tail = listItem.slice(listItem.length - newIndex, listItem.length);
      //   // console.log(tail, 'tail');
      //   //secondPart = secondPart.filter(todo => todo.id !== id)
      //   setListItem(firstPart.concat(currentTodo, secondPart));
      // } else {
      //   console.log(secondPart, 'second');
      //   const secondPart = listItem.slice(oldIndex.index, listItem.length - 1);
      //   setListItem(firstPart.concat(currentTodo, secondPart));
      // }
      setChekedTodo(checkedTodo.filter((todo) => todo.id !== id));
      checkBuf[index].isChecked = !isChecked;
    } else {
      
      setChekedTodo([
        ...checkedTodo,
        {
          id: id,
          index: index,
        },
      ]);
      
      const [bufArray] = listItem.filter((todo) => todo.id === id);
      const arr = checkBuf.filter((todo) => todo.id !== id);
      setListItem(arr.concat(bufArray));
      /*console.log(bufArray);
      console.log(arr);*/
      // setListItem([arr, bufArray])
      // const item = checkBuf.splice(index, 1)[0];
      // checkBuf.splice(checkBuf.length, 1, item);
      // setListItem(checkBuf);
      checkBuf[index].isChecked = !isChecked;
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
