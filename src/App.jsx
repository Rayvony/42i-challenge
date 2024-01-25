import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { FindPair } from "./components/FindPair/FindPair";
import { MinChange } from "./components/MinChange/MinChange";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <NavBar />
      <FindPair />
      <MinChange />
      <Typography variant='subtitle2' sx={{ textAlign: "center", mt: "5%", mb: "1%" }}>
        Write your Arrays as numbers separated by commas. For example: 1, 2, 3, 4, 5
      </Typography>
      <Footer />
    </div>
  );
}

export default App;
