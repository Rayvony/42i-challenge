import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import findPairWithSum from "../../helpers/findPairWithSum";

export const FindPair = () => {
  const [numbersInput, setNumbersInput] = useState("");
  const [targetInput, setTargetInput] = useState("");
  const [findPairResult, setFindPairResult] = useState("");

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
  );
};
