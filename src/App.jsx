import React, { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { TextField, Button, Typography } from "@mui/material";
import minChange from "./helpers/minChange";
import { FindPair } from "./components/FindPair/FindPair";

function App() {
  const [coinsInput, setCoinsInput] = useState("");
  const [minChangeResult, setMinChangeResult] = useState("");

  const [numbersInput, setNumbersInput] = useState("");
  const [targetInput, setTargetInput] = useState("");
  const [findPairResult, setFindPairResult] = useState("");

  const handleMinChange = () => {
    try {
      const coins = coinsInput.split(",").map((value) => Number(value.trim()));
      const result = minChange(coins);
      setMinChangeResult(`Minimum change: ${result}`);
    } catch (error) {
      setMinChangeResult("Invalid input");
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <Typography variant='h6' sx={{ textAlign: "center" }}>
          Min Change
        </Typography>
        <TextField label='Coins (Array)' variant='outlined' value={coinsInput} onChange={(e) => setCoinsInput(e.target.value)} />
        <Button variant='contained' color='primary' onClick={handleMinChange}>
          Run minChange
        </Button>
        <div>{minChangeResult}</div>
      </div>
      <FindPair />
    </div>
  );
}

export default App;
