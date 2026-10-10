import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if(counter<20){
    setCounter(counter+1)
    }
    console.log(counter)
  };
  
  function decValue(){
    if(counter>0){
      setCounter(counter-1)
    }
    console.log(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick ={decValue}>decrease value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
