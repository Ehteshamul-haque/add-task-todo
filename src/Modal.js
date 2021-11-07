import React from "react";
import './Modal.css'
import InputForm from "./InputForm"
export default function Modal(props) {
  return (
    <div className="modal-backDrop">
      <div className="modal">
       <InputForm listHandler={props.listHandler}/>
      </div>
    </div>
  );
}
