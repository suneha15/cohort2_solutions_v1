import { useState } from 'react'
import './App.css'
import { set } from 'zod';

function App() {

  return (
      <div>
        <HeaderWithButton/> 
        <Header title="Harkirat1"/>
        <Header title="Harkirat2"/>
        <Header title="Harkirat3"/>

      </div>
  )
}

function HeaderWithButton(){
  //since the state variable is only present here, only this component should re
  const [title,setTitle] = useState("Suneha");

  function updateTitle(){
    setTitle("my name is " + Math.floor(Math.random()*100))
  }

  return(
    <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}/>
    </div>
  )
}

function Header({title}){
  console.log("rendered")
  return(
      <div>
          {title}
      </div>
  )
}

export default App
