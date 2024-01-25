import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import minChange from "../../helpers/minChange";
import styles from "./MinChange.module.css";

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
    <>
      <Typography variant='h6' sx={{ textAlign: "center", mt: "5%", mb: "1%" }}>
        Min Change
      </Typography>
      <div className={styles.minChange}>
        <TextField label='Coins (Array)' color='purple' variant='outlined' value={coinsInput} onChange={(e) => setCoinsInput(e.target.value)} />
        <Button variant='contained' color='purple' onClick={handleMinChange}>
          Run minChange
        </Button>
      </div>
      <Typography className={styles.results} variant='body1'>
        {minChangeResult}
      </Typography>
    </>
  );
};
