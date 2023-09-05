
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"




function App() {
  // const demo = useState()
  // console.log(demo);
  const [demo, setDemo] = useState(20)
  console.log(demo, 'demo');
  console.log(setDemo, 'setdemo');

  // for increment
  const handleclick = () => {
    const demos = demo + 1
    setDemo(demos);
  }



  // for decrement
  const click = () => {
    const demos = demo - 1
    setDemo(demos);

    if (demos < 0) {
      setDemo(demo);
    }

  }

  // reset 

  const reset=() =>{
    const demos = demo - demo
    setDemo(demos);
  }



  return (
    <>
       <div className="demo">
       <h1>Count : {demo}</h1>
      <button className='inc-btn' onClick={handleclick} >Increment</button>
      <button className='dec-btn' onClick={click} >Decrement</button>
      <button className='delete-btn' onClick={reset} >Reset</button>
       </div>

    </>
  )
}

export default App


