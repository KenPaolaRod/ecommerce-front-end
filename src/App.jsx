import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from './contex/productsContext'
import Home from './components/home/Home'
import Header from './components/header'
import ProductsSection from './components/home/productsSection'



function App() {
  // const [count, setCount] = useState(0)
  const productsCtx = useContext(ProductsContext)
  const { selectedCategory} = productsCtx;

  return (
    
    <Routes>
      <Route path='/' element={<Home />} >
         <Route  >
            {/* <Route path={`/category/${selectedCategory ? selectedCategory : 'Coat' }`} element={ProductsSection} /> */}
            <Route path={`/category/:category`} element={ProductsSection} />

        </Route>
      </Route>
    </Routes>
    
  )
}

export default App
