import { useEffect, useState } from 'react'
import './App.css'
import { set } from 'zod';

/*
>You have to build a website that shows your income tax returns.
>You are creating 2 state variable because you have 2 places where you gain money from-
    1. cryto currency exchange data
    2. bank data

    -both are initialized to empty objects because you have to get these from various sources, you dont have them immediately , you have to update them in your state (just like you go to bank ,collect all the documents and give it to your CA)
*/

function App(){
    const [exchangeDate, setExchangeDate] = useState({});
    const [bankData, setBankData] = useState({});
    console.log("Hi there")

    //useEffect() makes sure that the code inside it runs only once, when the component mounts. 
    
    //only the first time when this App component renders, I want these two clocks to run and not everytime when the App re-renders due to state update

    useEffect(function(){
        console.log("hi from bank data")
      setTimeout(()=>{
        setBankData({income : 200})
    },3000);
    },[])

    // fetch("https://google.com", async (res)=>{
    //     const json = await res.json();
    //     setBankData(json)
    //     //Assume it is {income : 200}
    // });

    useEffect(function(){
        console.log("Hi from exchange data")
        setTimeout(()=>{
            setExchangeDate({
                returns : 100
            })
        },1000);
    },[])

    //each one of these setTimeOut triggers a re-render and "Hi there" gets logged on the screen, thus you'll see 3 re-renders.

    const incomeTax = (bankData.income + exchangeDate.returns) * 0.3;

    return(
        <div>
            Hi there, your income tax returns are {incomeTax}
        </div>
    )
}

export default App;