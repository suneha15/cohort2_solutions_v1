import { set } from "mongoose";
import { useCallback } from "react";
import { useState } from "react";
import React, { memo } from 'react';

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
   const handleIncrement =  useCallback(()=>{
        setCount(currentCount => currentCount + 1);
    },[]) 

    const handleDecrement = useCallback(()=>{
        setCount(count => count - 1);
    },[])
    // Your code ends here

    return (
        <div><p>hi</p>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
