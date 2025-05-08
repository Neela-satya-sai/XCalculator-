import React from "react";
import { Grid, Button, Box } from "@mui/material";

const buttonLabels = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["C", "0", "=", "/"],
];

const CalculatorGrid = () => {
  return (
    <Box sx={{ width: "300px", margin: "auto", padding: 2, border: "2px solid black" }}>
      <Grid container spacing={1}>
        {buttonLabels.flat().map((label, index) => (
          <Grid item xs={2} key={index}>
            <Button variant="outlined" fullWidth sx={{ height: "50px" }}>
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalculatorGrid;