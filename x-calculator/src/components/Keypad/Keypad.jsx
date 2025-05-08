import React from 'react'
import {Grid,Paper, Button, Box} from '@mui/material';
import Styles from "./Keypad.module.css"

const Keypad = () => {
  return (
    <Box sx={{ flexGrow: 1,  border: "2px solid black", marginTop:"20px"}}>
    <Grid container spacing={2} >
      <Grid item size={3}  sx={{ maxWidth: "fit-content" }}>
       <button className={Styles.buttonStyle} >1</button>
      </Grid>
      <Grid item size={3}  sx={{ maxWidth: "fit-content" }}>
       <button className={Styles.buttonStyle} >1</button>
      </Grid>
      <Grid item size={3}  sx={{ maxWidth: "fit-content" }}>
       <button className={Styles.buttonStyle} >1</button>
      </Grid>
      <Grid item size={3}  sx={{ maxWidth: "fit-content" }}>
       <button className={Styles.buttonStyle} >1</button>
      </Grid>
      <Grid item size={3}  sx={{ maxWidth: "fit-content" }}>
       <button className={Styles.buttonStyle} >1</button>
      </Grid>
      <Grid item size={3}>
       <button className={Styles.buttonStyle}>1</button>
      </Grid>
      <Grid item size={3}>
       <button className={Styles.buttonStyle}>1</button>
      </Grid>
      <Grid item size={3}>
       <button className={Styles.buttonStyle}>1</button>
      </Grid>
     
      
     
    </Grid>
  </Box>
  )
}

export default Keypad