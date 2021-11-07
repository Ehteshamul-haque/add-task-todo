import React from 'react'
import './Button.css'
export default function Button(props) {
    
    return (
             <div className="addBtn" onClick={(e) => {
                e.preventDefault();
                 props.showModal(true)
                }}>Add Task</div>
    )
}
