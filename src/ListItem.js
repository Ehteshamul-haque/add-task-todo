import React from "react";
import Button from "./Button"
export default function ListItem(props) {
  return (
    <>
      <div id="container">
        <div className="heading">
          <h1>Task List</h1>
        </div>
        <div className="listItem">
          <div className="listName">Name</div>
          <div style={{ fontSize: "13px" }} className="listDate">
            Date
          </div>
        </div>
        <Button />
      </div>
    </>
  );
}
