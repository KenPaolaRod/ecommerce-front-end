import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import ProductsSection from './components/home/ProductsSection'
import ProductPage from './components/productPage/ProductPage'
import LogIn from './components/logIn/LogIn'
import SignIn from './components/signUp/SignUp'
import User from './components/userAdmin/User'
import ShoppingCart from './components/userAdmin/ShoppingCart'
import SignUp from './components/signUp/SignUp'

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
      <Route path='/sigUp' element={<SignUp />}  />
      <Route path='/UserAdmin' element={<User />}  />
      <Route path='/shoppingCard' element={<ShoppingCart />}  />


    </Routes>
    
  )
}

export default App
