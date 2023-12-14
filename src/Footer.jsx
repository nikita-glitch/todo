import React, { useState } from "react";
import "./footer.css";

const Footer = ({
  completedTasks,
  setAllFlag,
  setActiveFlag,
  setCompletedFlag,
}) => {
  const [allFlagButton, setAllFlagButton] = useState(true);
  const [activeFlagButton, setActiveFlagButton] = useState(false)

  const allButtonHandler = () => {
    setAllFlagButton(true);
    setActiveFlagButton(false);
    setAllFlag(true);
    setActiveFlag(false);
    setCompletedFlag(false);
  };
  const activeButtonHandler = () => {
    setAllFlagButton(false);
    setActiveFlagButton(true);
    setAllFlag(false);
    setActiveFlag(true);
    setCompletedFlag(false);
  };
  const completedButtonHandler = () => {
    setAllFlagButton(false);
    setActiveFlagButton(false);
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
        <div className={allFlagButton ? 'filter_button_framed' : "filter_button"} onClick={allButtonHandler}>
          All
        </div>
        <div className={activeFlagButton ? 'filter_button_framed' : "filter_button"} onClick={activeButtonHandler}>
          Active
        </div>
        <div className={activeFlagButton ?  "filter_button" : allFlagButton ? 'filter_button' : 'filter_button_framed'} onClick={completedButtonHandler}>
          Completed
        </div>
      </ul>
    </div>
  );
};

export default Footer;
