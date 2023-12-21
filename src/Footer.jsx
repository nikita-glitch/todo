import React from "react";
import "./footer.css";
import { useDispatch, useSelector } from "react-redux";
import { settedFilter } from "./store/todoSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);
  let todo = useSelector((state) => state.todo.todos);
  todo = todo.filter((item) => !item.isChecked);

  const allButtonHandler = () => {
    dispatch(settedFilter("all"));
  };
  const activeButtonHandler = () => {
    dispatch(settedFilter("active"));
  };
  const completedButtonHandler = () => {
    dispatch(settedFilter("completed"));
  };

  return (
    <div className="footer">
      <div className="completed_tasks">
        {todo.length === 1 ? (
          <>{todo.length} item left</>
        ) : (
          <>{todo.length} items left</>
        )}
      </div>
      <ul className="filters">
        <div
          className={
            filter === "all" ? "filter_button_framed" : "filter_button"
          }
          onClick={allButtonHandler}
        >
          All
        </div>
        <div
          className={
            filter === "active" ? "filter_button_framed" : "filter_button"
          }
          onClick={activeButtonHandler}
        >
          Active
        </div>
        <div
          className={
            filter === "completed" ? "filter_button_framed" : "filter_button"
          }
          onClick={completedButtonHandler}
        >
          Completed
        </div>
      </ul>
    </div>
  );
};

export default Footer;
