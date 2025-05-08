import { useState } from 'react'
import './App.css'
import Keypad from './components/Keypad/Keypad'
import CalculatorGrid from './components/Keypad/CalculatorGrid'
import Calculator from './components/Keypad/Calculator'

function App() {


  return (
    <>
     <h1>React Calculator</h1>
      
  {/* <CalculatorGrid></CalculatorGrid> */}
      {/* <Keypad></Keypad> */}
      <Calculator></Calculator>
    </>
  )
}

export default App
