import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import ProductsSection from './components/home/productsSection'
import ProductPage from './components/productPage/ProductPage'
import LogIn from './components/logIn/LogIn'
import SignIn from './components/signIn/SignIn'



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


    </Routes>
    
  )
}

export default App
