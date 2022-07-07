import React from "react";
import "./App.css";
import Nav from "./nav/nav";
import Main from "./main/main";
import Work from "./projects/projects";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>

      <Work></Work>
    </div>
  );
}

export default App;
