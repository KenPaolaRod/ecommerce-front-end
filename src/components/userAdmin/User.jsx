import React from 'react'
import Header from '../Header'
import { useContext } from 'react';
import { AuthContext } from '../../contex/AuthContext';
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { ProductsContext } from '../../contex/productsContext';
import Footer from '../Footer';

function User() {

  const productCtx = useContext(ProductsContext);
  const {cart} = productCtx
  const authCtx = useContext(AuthContext);
  const {currentUser} = authCtx;

  return (
    <div className='admiArea'>
      <Header />

      <h1>Hello, {currentUser().userName}</h1>

      <article className='userAdmin'>
        <h2>My Orders</h2>
        <div className="userCart orders-box">
          <FaShoppingCart />
          <span>{cart.length}</span>
        </div>

        <div className="userProcesing orders-box">
          <FaBoxArchive />
          <span>Processing 0</span>
        </div>

        <div className="orderSent orders-box">
          <FaTruckArrowRight />
          <span>Sent 0</span>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default User