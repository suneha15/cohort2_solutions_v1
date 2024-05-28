import {useCallback,  useEffect, useState, useRef} from 'react';

function App(){

    useEffect(()=>{
        setInterval(()=>{
            document.getElementById("incomeTaxContainer").innerHTML = 10;
        },5000)
    },[])

    const incomeTax = 20000;

    return(
        <div>
            hi there, your income tax returns are <div id='incomeTaxContainer'>{incomeTax}</div>
        </div>
    )
}

export default App