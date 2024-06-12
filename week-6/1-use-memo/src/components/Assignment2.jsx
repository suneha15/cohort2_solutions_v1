import React, { useEffect, useState , useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"  ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

/* filter function 

let x = "my name is harkirat"
    x.includes("harkirat")
    -> will return True
    
    x.includes("harkirat11")
    -> will return False
*/

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filters, setFilters] = useState("");

    const filteredSentences = useMemo(()=>{
        return sentences.filter(x => x.includes(filters))
    },[sentences , filters])

    /*things to learn -

    -> it is not necessary that you will have a single input in the dependency array here

    -> depending on what all is being used inside this function, you should put here in the dependency array,
    */

    return <div>
        <input type="text" onChange={(e) => {
            setFilters(e.target.value)
        }}></input>
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}