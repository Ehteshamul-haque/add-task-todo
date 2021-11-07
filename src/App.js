import React , {useState} from "react";
import "./App.css";
import ListItem from "./ListItem";
// import InputForm from "./InputForm";
import Modal from "./Modal"
function App() {
  const [listItem, setListItem] = useState([])
  const listHandler = (list) => {
    setListItem(prevMovies => ([...prevMovies, list]));
    
    console.log(listItem)
  } 

  return (
    <>
      <ListItem/>
      <Modal listHandler={listHandler}/>
    </>
  );
}

export default App;
