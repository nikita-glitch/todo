import React, { useState } from "react";
import "./footer.css";

const Footer = ({
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
    <div className="footer">
      <div className="completed_tasks">
        {completedTasks === 1 ? (
          <>{completedTasks} item left</>
        ) : (
          <>{completedTasks} items left</>
        )}
      </div>
      <ul className="filters">
        <div className="filter_button" onClick={allButtonHandler}>
          All
        </div>
        <div className="filter_button" onClick={activeButtonHandler}>
          Active
        </div>
        <div className="filter_button" onClick={completedButtonHandler}>
          Completed
        </div>
      </ul>
    </div>
  );
};

export default Footer;
