import React, { useEffect, useState } from "react";

const Footer = ({ listItem, setListItem, completedTasks }) => {
  const [store, setStore] = useState(listItem)
  const [allItems, setAllItems] = useState(listItem);
  const [activeItems, setActiveItems] = useState(listItem);
  const [completedItems, setCompletedItems] = useState([]);

  

  const allButtonHandler = () => {
    //setStore(listItem.slice());
    //const buf = listItem.slice();
    // setAllItems(activeItems.concat(completedItems))
    setListItem(listItem)

  };
  const activeButtonHandler = () => {
    const bufArr = listItem.filter((item) => item.isChecked === false);
    if (bufArr){}
    setActiveItems(bufArr);
    //setListItem(activeItems)
    
  };
  const completedButtonHandler = () => {
    const bufArr = listItem.filter((item) => item.isChecked === true);
    setCompletedItems(bufArr);
    //setListItem(completedItems)
  };
  // console.log(allItems, 'all');
  // console.log(activeItems, 'active');
  // console.log(completedItems, 'complete');
  // console.log(listItem, 'list');    
  // console.log(store, 'store');
  return (
    <>
      {completedTasks === 1 ? (
        <>{completedTasks} item left</>
      ) : (
        <>{completedTasks} items left</>
      )}
      <ul className="filters">
        <div onClick={allButtonHandler}>All</div>
        <div onClick={activeButtonHandler}>Active</div>
        <div onClick={completedButtonHandler}>Completed</div>
      </ul>
    </>
  );
};

export default Footer;
