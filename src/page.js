import React from "react";
import List from "./List/List";
import './page.css';


function Page() {

  return (
    <div>
      <h1 style={{
        display: "flex",
        justifyContent: "center"
      }}
      >
        TODO
      </h1>

      <List />
    </div>
  );
}
export default Page;