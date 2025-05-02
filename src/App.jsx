import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Footer from './Components/Footer';
import { useAppContext } from './Context/AppContext';
import Login from './Components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './Components/seller/SellerLogin';





const App = () => {
  const IsSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin,isSeller}=useAppContext()
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'> 
{IsSellerPath ? null : <Navbar />}
{showUserLogin ? <Login/> : null}

<Toaster/>
<div className={`${IsSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>   
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:category' element={<ProductCategory/>}/>
        <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/add-address' element={<AddAddress/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
<Route path='/seller'element={isSeller ? <SellerLayout/> : <SellerLogin/>}>

  

</Route>
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}

      </Routes>
      </div>
     {!IsSellerPath && <Footer/>}
    </div>
  )
}

export default App
