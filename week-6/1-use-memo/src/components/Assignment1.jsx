import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

/*factorial
 1 => 1
 2 => 2 * 1
 3 => 3 * 2 * 1
*/

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        let value = 1; 
        for(let i = 1 ; i<= input ; i++){
            value = value * i;
        }
        return value;
    },[input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => {
                    setInput(Number(e.target.value))
                }} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}