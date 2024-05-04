import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
function App() {
  
         let [counter , setCounter]  =  useState(1)
  
  const addValue = ()=>{
    counter = counter +1;
    setCounter(counter);
    console.log('value added' , counter)
  }

  const removeValue = ()=>{
    if(counter>0){
      counter -= 1;
    }
      setCounter(counter);
      console.log('after removing the value is: ' , counter);
  }

  // let count = 51;
  return (
    <>
     <h1>Learning React</h1>
    <h2>counter value {counter}</h2>
      <button
      onClick={addValue}
      >add value {counter}</button>

      <br />

      <button
      onClick={removeValue}
      >remove value</button>
    <p>footter: {counter}</p>
    </>
  )
}

export default App
