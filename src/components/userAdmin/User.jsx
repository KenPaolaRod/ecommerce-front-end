import React from 'react'
import Header from '../header'
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";




function User() {
  return (
    <div>
      <Header />

      <h1>Hola Kenyerling</h1>

      <article className='userAdmin'>
        <h2>My Orders</h2>
        <div className="userCart orders-box">
          <FaShoppingCart />
          <span>Cart 0</span>
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
    </div>
  )
}

export default User