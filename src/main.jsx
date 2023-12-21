import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import {ProductsProvider } from './contex/productsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
)
