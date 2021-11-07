import React from 'react'
import  "./InputForm.css"
import Button from "./Button"
export default function InputForm() {
  return (
    <>
      <div className="formContainer">
      <div className="heading">
        <h1>Add Task</h1>
      </div>
       <form>
         <div className="taskField">
           <input type="text" name="Task" placeholder="Add Task..."/>
         </div>
         <div className="dateField">
           <input type="date" name="Date"/>
         </div>
         <div className="submitBtn">
           <Button />
         </div>
       </form>
       </div>
    </>
  )
}
