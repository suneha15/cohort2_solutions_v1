import { useEffect, useState,useMemo , memo, useCallback} from 'react'
import axios from "axios";
import './App.css'
import { set } from 'mongoose';

function App() {
    const [counter,setCounter] = useState(0);

//even if it is not a dynamic function, react is not smart enough to understand that this is the same function as the last render.
  function inputFunction(){
    console.log("child clicked");
  }
//so to prevent this re-rendering of child, when the input function hasnt changed , we use useCallback()

const inputFunction1 = useCallback(()=>{
  console.log("hi there")
},[])

//now only if something inside this dependency array changes, we will consider this function to be changed,
//else we will consider this inputFunction is the same across renders

    return <div>
      <ButtonComponent inputFunction1={inputFunction1}/>
      <button onClick={()=>{
        setCounter(counter + 1);
      }}>Counter ({counter})</button>
    </div>
}

//memo function only re-renders if the input changes,

//but here even if the function is not changing by value but when app() is getting re-rendered ,the inputFunction is getting changed by reference

//since memo functions only re-renders if the input changes

//but even if it is wrapped inside memo and this function itsn't changing across renders, still it will re-render


const ButtonComponent = memo(({inputFunction1})=>{
  console.log("child render");
  return(
    <div>
      <button onClick={inputFunction1}>Button Clicked</button>
    </div>
  )
})


export default App
