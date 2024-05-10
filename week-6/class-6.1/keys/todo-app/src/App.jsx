import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button>Add Todo</button>
      <Todo/>
    </div>
  )
}

export default App
