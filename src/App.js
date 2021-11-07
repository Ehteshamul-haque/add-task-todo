import React , {useState} from "react";
import "./App.css";
import ListItem from "./ListItem";

import Modal from "./Modal"
function App() {
  const [listItem, setListItem] = useState([])
  const [isShowing, setIsShowing] = useState(false)
  //Adding list via lift up - props & closing modal
  const listHandler = (list) => {
    setListItem(prevList => ([...prevList, list]));
    setIsShowing(false)
  } 
  // Show Modal via lift up - props
  const showModal = (show) => {
    setIsShowing(show);
  }
  // deleting list when click
  const deleteHandler = (id) => {
    setListItem((previousItem) => {
      return previousItem.filter((item) => {
      return id !== item.id;
        
    })})
    
  }

  return (
    <>
      <ListItem listItem={listItem} showModal={showModal} deleteHandler={deleteHandler}/>
      {isShowing && <Modal listHandler={listHandler}/>}
    </>
  );
}

export default App;
