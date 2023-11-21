import React, { useEffect, useState } from "react";

const Footer = ({ value }) => {
  const [completedTasks, setComplitedTasks] = useState(0);
  useEffect(() =>{
    const count = value.filter((item) => item.isChecked === false);
    console.log();
    setComplitedTasks(count.length);
  },[value])
  // const countTasks = () => {
  //   const count = value.filter((item) => item.isChecked === false);
  //   setComplitedTasks(count.length);
  // }
  return(
    <>
      {completedTasks === 1 ? (
        <>{completedTasks} item left</>
        ) : (
        <>{completedTasks} items left</>
        )}
      <ul className="filters">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </> 
    );
}

export default Footer;