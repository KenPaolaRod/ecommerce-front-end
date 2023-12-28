import React, { useContext } from 'react';
import { ProductsContext } from '../../contex/productsContext'
import Header from '../Header'
import ProductCard from '../home/ProductCard';
import Button from '../Button'



function ShoppingCart() {
  const productsCtx = useContext(ProductsContext);
  const { cart, removeFromCart } = productsCtx;

  const cartLength = cart ? cart.length : 0;


  // Función para calcular el total del carrito
  const calcularTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className='cart-container'>

      <Header />

      <h2>Carrito de Compras</h2>
      {cartLength === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((product) => (
            // <div key={product._id} className='cart-item'>
            //   <img src={product.pictures[0]} alt={product.title} />
            //   <div className='cart-item-info'>
            //     <h3>{product.title}</h3>
            //     <span>${product.price.toFixed(2)}</span>
            //     <button onClick={() => removeFromCart(product._id)}>Quitar del carrito</button>
            //   </div>
            // </div>
            <div key={product._id}>
            <ProductCard 
            btnClass="btn-aside" 
            pictures={product.pictures[0]} 
            title={product.title} 
            price={product.price}
            />
            <Button text={'remove'} onClick={() => removeFromCart(product._id)}/>
           </div>
          ))}
          <div className='cart-total'>
            <h4>Total: ${calcularTotal()}</h4>
          </div>
        </div>
      )}

      {/* Aquí puedo incluir la sección de productos disponible */}
      {/* Por ejemplo, puedo usar el componente ProductsSection que ya has creado */}
      {/* <ProductsSection /> */}
    </div>
  );
}


export default ShoppingCart;
