import React from "react";
import "./App.css";

// COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting="Your Bag is empty." />
      </>
    );
  }
}

export default App;
