import React from "react";
import Button from "./Button";
import './ListItem.css'
export default function ListItem(props) {
  const listOfItem = [
    { name: "Go for Walk", date: "20-12-2018" },
    { name: "Buy Milk", date: "20-12-2025" },
    { name: "Buy Vegetables", date: "20-12-2021" }
  ];

   
  return (
    <>
      <div id="container">
      <div class="fixed-container"></div>
      <div class="content-wrapper">
        <div className="heading">
          <h1>Task List</h1>
        </div>
        <div className="listItem">
          {listOfItem.map((items) => {
            return (
            <>
              <div className="listName">{items.name}</div>
              <div style={{ fontSize: "13px" }} className="listDate">
                {items.date}
              </div>
              <hr/>
            </>
            );
          })}
        </div>
        <Button />
        </div>
        <div className="fixed-container"></div>
      </div>
    </>
  );
}
