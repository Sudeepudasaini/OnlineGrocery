import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';

const App = () => {
  const IsSellerPath = useLocation().pathname.includes("seller");
  return (
    <div> 
{IsSellerPath ? null : <Navbar />}
<div className={`${IsSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
