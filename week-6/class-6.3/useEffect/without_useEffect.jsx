import { useState } from 'react'
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

    //irrespective of how many times the app rerenders, make sure that this code only runs once

    setTimeout(()=>{
        setBankData({income : 200})
    },3000);

    // fetch("https://google.com", async (res)=>{
    //     const json = await res.json();
    //     setBankData(json)
    //     //Assume it is {income : 200}
    // });

    setTimeout(()=>{
        setExchangeDate({
            returns : 100
        })
    },1000);

    /*When you get either one of the data, the components re-renders,which causes both the clocks to trigger again, thus creating a loop of infite renders*/

    const incomeTax = (bankData.income + exchangeDate.returns) * 0.3;

    return(
        <div>
            Hi there, your income tax returns are {incomeTax}
        </div>
    )
}

export default App;