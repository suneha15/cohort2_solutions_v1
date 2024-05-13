import { useEffect, useState,useMemo } from 'react'
import axios from "axios";
import './App.css'
import { set } from 'mongoose';

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);
  // const [count,setCount] = useState(0);


  //when the counter button is clicked, count state updates,which triggers a re-render due to which sum logic runs again.
  //this very expensive for loop runs again, even when the inputValue hasnt changed

  //incase of a derivative operation present inside , we use useMemo
  let count = useMemo(()=>{
    let finalCount = 0; 
    for(let i= 1 ; i<= inputValue ;i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  },[inputValue]) //here count depends on inputValue

//vs we use useEffect incase of life cycle events.

  // useEffect(()=>{
  //   let finalCount = 0;
  //   for(let i= 1 ; i<= inputValue ;i++){
  //     finalCount = finalCount + i;
  //   }
  //   setCount(finalCount);
  // },[inputValue])

  //

  return(
    <div>
      <input 
      onChange={function(e){setInputValue(e.target.value)}} type="text" placeholder='Enter a number' /><br />
      <span>Sum from 1 to {inputValue} is {count}</span><br />
      <button onClick={()=>{setCounter(counter + 1)}}>Counter {counter}</button><br />
    </div>
  )

}

export default App

