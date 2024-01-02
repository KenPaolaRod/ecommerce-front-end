import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import { AuthProvider } from './contex/AuthContext.jsx'
import {ProductsProvider } from './contex/productsContext.jsx'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
