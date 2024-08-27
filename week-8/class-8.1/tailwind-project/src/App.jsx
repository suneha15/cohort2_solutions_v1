import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex" , justifyContent:"center"}}>
        <div style={{backgroundColor: "lightcoral"}}>Hi</div>
        <div style={{backgroundColor: "lightgreen"}}>Hi</div>
        <div style={{backgroundColor: "lightpink"}}>Hi</div>
      </div>
      <br /><br />

      <div className='flex justify-between'>
          <div className='bg-red-500'>Hello</div>
          <div className='bg-yellow-500'>Hello</div>
          <div className='bg-sky-500/75'>Hello</div>
      </div>
    <br /><br />

      <div className='grid grid-cols-10'>
        <div className='bg-red-100 col-span-5'>Hey there from 1st div</div>
        <div className='bg-yellow-100 col-span-3'>Hey threre from 2nd div</div>
        <div className='bg-green-100 col-span-2'>Hey there from 3rd div</div>
      </div>
    </>
  )
}

export default App
