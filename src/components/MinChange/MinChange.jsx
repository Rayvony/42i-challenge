import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import minChange from "../../helpers/minChange";

export const MinChange = () => {
  const [coinsInput, setCoinsInput] = useState("");
  const [minChangeResult, setMinChangeResult] = useState("");

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
      <Typography variant='h6' sx={{ textAlign: "center" }}>
        Min Change
      </Typography>
      <TextField label='Coins (Array)' variant='outlined' value={coinsInput} onChange={(e) => setCoinsInput(e.target.value)} />
      <Button variant='contained' color='primary' onClick={handleMinChange}>
        Run minChange
      </Button>
      <div>{minChangeResult}</div>
    </div>
  );
};
