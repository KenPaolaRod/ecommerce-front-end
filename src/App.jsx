import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import ProductsSection from './components/home/productsSection'
import ProductPage from './components/productPage/ProductPage'
import LogIn from './components/logIn/LogIn'
import SignIn from './components/signIn/SignIn'
import User from './components/userAdmin/User'
import ShoppingCart from './components/userAdmin/ShoppingCart'



function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home />} >
         <Route  >
            <Route path={`/category/:category`} element={ProductsSection} />
        </Route>
      </Route>
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path='/logIn' element={<LogIn />}  />
      <Route path='/sigIn' element={<SignIn />}  />
      <Route path='/UserAdmin' element={<User />}  />
      <Route path='/shoppingCard' element={<ShoppingCart />}  />


    </Routes>
    
  )
}

export default App
