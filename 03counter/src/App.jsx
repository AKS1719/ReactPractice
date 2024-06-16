
import { useState } from 'react'
import './App.css'

function App() {



  const [counter, setcounter] = useState(5)
  const addValue = ()=>{
    console.log("value added",counter)
    setcounter(counter+1)
  }
  const removeValue = ()=>{
    console.log("value added",counter)
    setcounter(counter-1)
  }

  return (
    <>
      <h1>Akshat and React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
       onClick={addValue}>
        Add Value</button> <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
