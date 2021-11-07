import React , {useState} from 'react'
import  "./InputForm.css"
export default function InputForm(props) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  
  const list = {
    name: name,
    date: date,
    id: Math.floor(Math.random() * 1000)
  }
  

  const clearForm = () => {
    setName("")
    setDate("")
  }
  const submitHandler = (e) => {
    e.preventDefault();
    clearForm();
  }
  return (
    <>
      <div className="formContainer">
      <div className="heading">
        <h1>Add Task</h1>
      </div>
       <form onSubmit={submitHandler}>
         <div className="taskField">
           <input type="text" name="Task" value={name} placeholder="Add Task..." onChange={(e) => setName(e.target.value)}/>
         </div>
         <div className="dateField">
           <input type="date" name="Date"  value={date} onChange={(e) => setDate(e.target.value)}/>
         </div>
         <div className="submitBtn">
           <input className="addBtn" type="submit" value="Add Task" onClick={(e) => {
             e.preventDefault();
             props.listHandler(list)}
           }/>
         </div>
       </form>
       </div>
    </>
  )
}
