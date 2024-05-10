import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card 
      name="Suneha" 
      description="A web developer" 
      linkedIn = "https://www.linkedin.com/in/suneha-shrivastava-b41400197/" 
      leetcode="https://leetcode.com/u/suneha1111/"
      interests = {["Cooking","Web dev","Cleaning"]}
      />
    </div>
  )
}

export default App
