import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { FindPair } from "./components/FindPair/FindPair";
import { MinChange } from "./components/MinChange/MinChange";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <FindPair />
      <MinChange />
    </div>
  );
}

export default App;
