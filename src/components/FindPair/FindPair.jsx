import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import findPairWithSum from "../../helpers/findPairWithSum";
import styles from "./FindPair.module.css";

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
      setFindPairResult(error.message || "Invalid input");
    }
  };
  return (
    <>
      <Typography variant='h6' sx={{ textAlign: "center", mt: "5%", mb: "1%" }}>
        Find Pair
      </Typography>
      <div className={styles.findPair}>
        <TextField label='Numbers (Array)' color='purple' variant='outlined' value={numbersInput} onChange={(e) => setNumbersInput(e.target.value)} />
        <TextField label='Target Number' color='purple' variant='outlined' value={targetInput} onChange={(e) => setTargetInput(e.target.value)} />
        <Button color='purple' variant='contained' onClick={handleFindPair}>
          Run findPair
        </Button>
      </div>
      <Typography className={styles.results} variant='body1'>
        {findPairResult}
      </Typography>
    </>
  );
};
