import React from "react";
import Button from "./Button";
import './ListItem.css'
export default function ListItem(props) {
   
  return (
    <>
      <div id="container">
      <div className="fixed-container"></div>
      <div className="content-wrapper">
        <div className="heading">
          <h1>Task List</h1>
        </div>
        <div className="listItem">
          {props.listItem.map((items) => {
            return (
            <div key={items.id}>
              <div className="listName">{items.name}</div>
              <div style={{ fontSize: "13px" }} className="listDate">
                {items.date}
              </div>
              <hr/>
            </div>
            );
          })}
        </div>
        <Button showModal={props.showModal}/>
        </div>
        <div className="fixed-container"></div>
      </div>
    </>
  );
}
