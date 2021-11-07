import React from "react";
import './Modal.css'
import InputForm from "./InputForm"
export default function Modal() {
  return (
    <div className="modal-backDrop">
      <div className="modal">
       <InputForm/>
      </div>
    </div>
  );
}
