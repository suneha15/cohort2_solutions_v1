import { useState } from 'react'
import './App.css'
import { set } from 'zod'

//global variable 
let counter = 4;

function App(){
  const [todos, setTodos] = useState([
  {
    id : 1,
    title : "Go to gym",
    description :"6am-8am"
   },
   {
    id : 2,
    title : "Go to office",
    description :"9am - 5pm"
  },
  {
    id : 3,
    title : "study - DSA",
    description :"9pm-11pm"
  }])

  function addTodo(){
    setTodos([...todos,{  
      id : counter++,
      title : Math.floor(Math.random()*10),
      description: Math.floor(Math.random()* 100)
    }])

    // const newTodos = [];
    // for(let i=0 ; i< todos.length ; i++){
    //   newTodos.push(todos[i]);
    // }
    // at this point //newTodos = todos
    // newTodos.push({  
    //   id : 4,
    //   title : Math.random(),
    //   description: Math.floor(Math.random()* 100)
    // })
    // here it becomes => todos + 1new todo = newTodos array
    // setTodos(newTodos);

    return(
      <div>
        <input type="text" placeholder='title' />
        <input type="text" placeholder='description' />
      </div>
    )
  }

  return(
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map(function(todo){
            return(
              <Todo key={todo.id} title={todo.title} description={todo.description}/>
            )
        })}
      </div>
    </div>
  )
}

function Todo({title,description}){

  return(
    <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
    </div>
  )
}

export default App
