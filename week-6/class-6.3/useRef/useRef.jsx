import {useCallback,  useEffect, useState, useRef} from 'react';

function App(){
    //lets say you want to override something what React does.

    const [incomeTax,setIncomeTax] = useState(20000);

    //useRef is another hook which you can use to get refernce to DOM elements.
    const divRef = useRef();

    useEffect(()=>{ 
        setTimeout(()=>{
            console.log(divRef.current);
            divRef.current.innerHTML = 10;
        },5000)
    },[])

    return(
        <div>
            hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
        </div>
    )
}

export default App