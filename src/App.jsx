import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Button from "./layouts/Button";
import Main from "./layouts/Main";
import Teste from "./containers/Teste";

const App = () => {
  return (
    <div className="App">
      <Header name="OIa" />
      <Button fundo="green" cor="#fff">
        <h1>nois</h1>
      </Button>
      <Main />
      <Teste />
    </div>
  );
};

export default App;
