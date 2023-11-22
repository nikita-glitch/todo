import React, { useState } from "react";

const Footer = ({
  //listItem,
  //setListItem,
  completedTasks,
  setAllFlag,
  setActiveFlag,
  setCompletedFlag,
}) => {
  const allButtonHandler = () => {
    setAllFlag(true);
    setActiveFlag(false);
    setCompletedFlag(false);
  };
  const activeButtonHandler = () => {
    setAllFlag(false);
    setActiveFlag(true);
    setCompletedFlag(false);
  };
  const completedButtonHandler = () => {
    setAllFlag(false);
    setActiveFlag(false);
    setCompletedFlag(true);
  };

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
