import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { FindPair } from "./components/FindPair/FindPair";
import { MinChange } from "./components/MinChange/MinChange";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <FindPair />
      <MinChange />
      <Footer />
    </div>
  );
}

export default App;
