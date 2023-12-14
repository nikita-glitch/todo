import React, { useState } from "react";
import List from "./List/List";
import "./page.css";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";

function Page() {
  const [allFlag, setAllFlag] = useState(true);
  const [activeFlag, setActiveFlag] = useState(false);
  const [completedFlag, setCompletedFlag] = useState(false);
  const todoList = useSelector((state) => state.todo);
  
  const activeArray = todoList.filter((todo) => todo.isChecked === false);
  const complitedArray = todoList.filter((todo) => todo.isChecked === true);
  return (
    <>
      <h1 className="todo_header">todos</h1>
      <List
        value={allFlag ? todoList : activeFlag ? activeArray : complitedArray}
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
