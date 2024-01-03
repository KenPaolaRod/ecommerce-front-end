import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import { AuthProvider } from './contex/AuthContext.jsx'
import {ProductsProvider } from './contex/productsContext.jsx'
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <PayPalScriptProvider options={{"client-id": "AUuitEOyXAiZiOZVxIO7w19pa4v5POs0XF0sJ6OLgkUvrC-t_JMkaTtIX2hZ4EadnB2iWjlqVEK1zVPb"}}>
           <App />
          </PayPalScriptProvider>
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
