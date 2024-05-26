import { useEffect, useState, useMemo } from 'react'
import './App.css'
import { set } from 'zod';

function App(){
    
    /*lets say you've kept your money at 3 places-
    > two exchanges -
        1. coinDCX
        2. wazirX

    > 3. Bank - where you get your normal web2 income
    */

    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    console.log("Hi there from App")

    useEffect(()=>{
        //some operation to get the data
        console.log("hi from exchange1");
        setExchange1Data({
            returns : 100
        });
    },[]);

    useEffect(()=>{
        //some operation to get the data
        console.log("Hi from exchange2");
        setExchange2Data({
            returns : 200
        })
    },[])

    useEffect(()=>{
        //some operation to get the data
        console.log("hi from bank")
        setTimeout(()=>{
            setBankData({
                income : 500
            })
        },3000)
    },[])

    const cryptoReturns = useMemo(()=>{
        console.log("hi there before")
        const ans = exchange1Data.returns + exchange2Data.returns; 
        return ans;
    },[exchange1Data,exchange2Data]) 
    //only rerun this function if exchange1Data has changed or exchange2Data has changed

    const incomeTax = (cryptoReturns + bankData.income) * 0.3

    return(
        <div>
            hi there your income tax returns are {incomeTax}
        </div>
    )
}

export default App;