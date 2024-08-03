import { useState } from 'react'
import './App.css'

//the goal is to create an application where someone can increase or decrease a global count that gets rendered in this <Count/> component.

function App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <Count counting={count}/>
      <Buttons count = {count} setCount = {setCount} />
    </div>
  )
}

function Count({counting}){
  return <div>
    {counting}
  </div>
}

function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{
        setCount(count +1)
    }}>Increase</button>
    <button onClick={()=>{
        setCount(count -1)
    }}>Decrease</button>
  </div>
}

export default App
