 import { useState } from 'react';



function App() {
  
  let [counter, setCounter] = useState(5)
 
 const addValue = () => {
  if (counter >= 20) {
    console.log("Counter value is already at maximum");
    return;
  }
  setCounter(counter + 1);
 }

 const removeValue = () => {
  if (counter <= 0) {
    console.log("Counter value is already at minimum");
    return;
  }
  setCounter(counter - 1);
  
 }

  return (
    <>
     <h1>Assalam o Alaikum</h1>
     <h2>Counter value: {counter}</h2>
     <button 
      onClick={addValue}>
      Add value
      </button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
