import { lazy,Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  
  //suspense API 
  /*another API that react provides you which is used for cases like -
			-asynchronous component fetching
			-asynchronous data fetching 
  */

  return (
    <div>
     <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={
          <Suspense fallback={"loading..."}>
            <Dashboard/>
          </Suspense>}/>
        <Route path="/" element={
          <Suspense fallback={"loading.."}>
            <Landing/>
          </Suspense>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return(
    <div>
      <div>
        <button onClick={()=>{
          navigate("/");

          //window.location.href = "/"; 
          //this is not the right way to go from one page to another, if you're using client side routing
          //reloading happens in the network when we switch buttons
        }}>Landing Page</button>

        <button onClick={()=>{
          navigate("/dashboard");
          //window.location.href = "/dashboard";
        }}>Dashboard</button>

      </div>
    </div>
  )
}

export default App
