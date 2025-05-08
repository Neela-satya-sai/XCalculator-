import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import Styles from "./Calculator.module.css"

const buttonLabels = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Follows BODMAS
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <Box sx={{ width: "350px", margin: "auto", padding: 2 }}>
      <input type="text" value={input} readOnly style={{ width: "100%", height: "40px", textAlign: "right" }} />
      <div style={{ textAlign: "right", padding: "10px", fontSize: "20px" }}>{result}</div>
      <Grid container spacing={2}>
        {buttonLabels.map((label) => (
          <Grid item xs={3} key={label}>
             {/* <button className={Styles.buttonStyle} >{label}</button> */}
            <Button variant="outlined" fullWidth className={Styles.buttonStyle} onClick={() => handleClick(label)}>
              {label}
            </Button>
         
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calculator;