import React, { useState } from 'react'
import './App.css'
import { set } from 'zod';

function App() {
  const [title,setTitle] = useState("Suneha");

  function updateTitle(){
    setTitle("my name is " + Math.floor(Math.random()*100))
  }

  return (
      <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}/>
        <Header title={title}/>
        <Header title="Harkirat3"/>
        <Header title="Harkirat3"/>
        <Header title="Harkirat3"/>
        <Header title="Harkirat3"/>
      </div>
  )
}

//memoization
const Header = React.memo(function({title}){
    return(
        <div>
            {title}
        </div>
    )
  })
  
  export default App