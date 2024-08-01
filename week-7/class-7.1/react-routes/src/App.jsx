import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {

  return (
    <div>
      <div>
        <button onClick={()=>{
          window.location.href = "/"; 
          //this is not the right way to go from one page to another, if you're using client side routing
          //reloading happens in the network when we switch buttons
        }}>Landing Page</button>
        <button onClick={()=>{
          window.location.href = "/dashboard";
        }}>Dashboard</button>
      </div>
     <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
