import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
// import ProductsSection from './components/home/productsSection'
import ProductsSection from './components/home/ProductsSection'
import ProductDetail from './components/ProductDetail'
import ProductPage from './components/ProductPage'



function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home />} >
         <Route  >
            <Route path={`/category/:category`} element={ProductsSection} />
            {/* <Route path='/product/:productId' element={<ProductDetail/>}/> */}
        </Route>
      </Route>
      <Route path="/product/:productId" element={<ProductPage />} />

    </Routes>
    
  )
}

export default App
