import { useEffect, useState,useMemo } from 'react'
import './App.css'
import { set } from 'zod';
import { useCallback } from 'react';

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

    //useCallback is not about minimizing the amout of code that is run.

    //useCallback is about - not rendering a child component, if the function hasn't/doesnt need to change across renders.

    const calculateCryptoReturns = useCallback( function(){
        return exchange1Data.returns + exchange2Data.returns; 
    },[exchange1Data,exchange2Data])
    //now this function will only referncially change if the dependency changes

    return(
        <div>
            <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}>
                Hi
            </CryptoGainsCalculator>
            <Dummy></Dummy>
        </div>
    )
}

//only rerender this function if an input to the function changes
const Dummy = memo(function(){
    console.log("Hi from dummy")
    return <div>
        hi
    </div>
})

const CryptoGainsCalculator = memo(function({calculateCryptoReturns}){
    return (<div>
        your crypto returns are {calculateCryptoReturns()}
    </div>
    )
})

export default App;