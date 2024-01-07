import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contex/productsContext'
import Header from '../Header'
import ProductCard from '../home/ProductCard';
import Button from '../Button'
import { PaypalBtn } from '../PaypalBtn';
import { FaRegTrashAlt } from "react-icons/fa";


function ShoppingCart() {
  const productsCtx = useContext(ProductsContext);
  const { cart, removeFromCart, updateCartItemQuantity } = productsCtx;

  const cartLength = cart ? cart.length : 0;

  // Function to calculate the cart total
  const calcularTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    
  };
    
  return (
    <div className='cart-container'>
      <Header />

      <h1>Shopping Cart</h1>
      {cartLength === 0 ? (
        <h1>The cart is empty</h1>
      ) : (
        <div className='cart-products'>
          {cart.map((product) => (
            <div key={`${product._id}-${product.selectedSize}-${product.selectedColor}`} className='cart-prduct'>
            <ProductCard 
            btnClass="btn-aside" 
            pictures={product.pictures} 
            title={product.title} 
            price={product.price}
            />
            <div className="quantity-controls">
              <input
                type="number"
                min="1"
                value={typeof product.quantity === 'number' ? product.quantity : 1} 
                onChange={(e) => updateCartItemQuantity(product._id, product.selectedColor, product.selectedSize, parseInt(e.target.value))  }
              />
            </div>
            <div>
              <Button text={<FaRegTrashAlt />} btnClass={'remove-btn'} onClick={() => removeFromCart(product._id, product.selectedColor, product.selectedSize)} />
            </div>
            </div>
          ))}
          <div className='cart-total'>
            <h4>Total: ${calcularTotal()}</h4>
          </div>
        </div>
      )}
      <PaypalBtn currency={'USD'} showSpinner={'false'} amount={calcularTotal()} />
      {/* Aquí puedo incluir la sección de productos disponible */}
      {/* Por ejemplo, puedo usar el componente ProductsSection que ya has creado */}
      {/* <ProductsSection /> */}
    </div>
  );
}


export default ShoppingCart;
