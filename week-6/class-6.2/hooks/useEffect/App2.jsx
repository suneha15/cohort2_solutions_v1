import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import { set } from 'mongoose';

function App() {
    const [selectedId,setSelectedId] = useState(1);

    return <div>
      <button onClick={()=>{setSelectedId(1)}}>1</button>
      <button onClick={()=>{setSelectedId(2)}}>2</button>
      <button onClick={()=>{setSelectedId(3)}}>3</button>
      <button onClick={
        function(){
          setSelectedId(4)
        }}>4</button>
      <Todo id={selectedId}/>
    </div>
}

function Todo({id}){
  const [todo,setTodo] = useState({})

//implement effect here
useEffect(()=>{
  axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(response){
      setTodo(response.data.todo)
  })
},[id])

  return <div>
    Id : {id}
    <h2>{todo.title}</h2>
    <h3>{todo.description}</h3>
  </div>
}

export default App
