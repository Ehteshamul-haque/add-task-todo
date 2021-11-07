import React , {useState} from "react";
import "./App.css";
import ListItem from "./ListItem";
// import InputForm from "./InputForm";
import Modal from "./Modal"
function App() {
  const [listItem, setListItem] = useState([])
  const [isShowing, setIsShowing] = useState(false)

  const listHandler = (list) => {
    setListItem(prevList => ([...prevList, list]));
    setIsShowing(false)
  } 

  const showModal = (show) => {
    setIsShowing(show);
  }

  return (
    <>
      <ListItem listItem={listItem} showModal={showModal}/>
      {isShowing && <Modal listHandler={listHandler}/>}
    </>
  );
}

export default App;
