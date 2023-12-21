import React from "react";
import List from "./List/List";
import "./page.css";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <h1 className="todo_header">todos</h1>
      <List />
      <Footer />
    </>
  );
};
export default Page;
