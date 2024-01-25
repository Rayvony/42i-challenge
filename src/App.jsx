import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import minChange from "./helpers/minChange";
import findPairWithSum from "./helpers/findPairWithSum";

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

  const handleFindPair = () => {
    try {
      const numbers = numbersInput.split(",").map((value) => Number(value.trim()));
      const targetInputNumber = Number(targetInput);
      const result = findPairWithSum(numbers, targetInputNumber);
      setFindPairResult(`Pair with sum: ${JSON.stringify(result)}`);
    } catch (error) {
      setFindPairResult("Invalid input");
    }
  };

  return (
    <div>
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
      <div>
        <Typography variant='h6' sx={{ textAlign: "center" }}>
          Find Pair
        </Typography>
        <TextField label='Numbers (Array)' variant='outlined' value={numbersInput} onChange={(e) => setNumbersInput(e.target.value)} />
        <TextField label='Target Number' variant='outlined' value={targetInput} onChange={(e) => setTargetInput(e.target.value)} />
        <Button variant='contained' color='primary' onClick={handleFindPair}>
          Run findPair
        </Button>
        <div>{findPairResult}</div>
      </div>
    </div>
  );
}

export default App;
