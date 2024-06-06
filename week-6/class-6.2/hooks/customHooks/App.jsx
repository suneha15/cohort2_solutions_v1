import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css'
import { set } from 'zod';

function useTodos(){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get("")
            .then((res)=>{
                setTodos(res.data.todos)
            })
    },[])
    return todos;
}

function App() {
    const todos = useTodos();
    return(
        {todos}
    )
}
export default App
