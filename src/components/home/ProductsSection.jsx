import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../contex/productsContext'
import Aside from './Aside'
import ProductCard from './ProductCard'


function ProductsSection() {
  const productsCtx = useContext(ProductsContext)
  const {products, selectedCategory, cart, addToCart} = productsCtx;

  const category = Array.isArray(products) ? products.filter((el) => el.category === selectedCategory ) : [];
            
  return (
    <article className='products-section'>
      <Aside />
      <div className='cards-container'>
        <h1>{selectedCategory}</h1>
          {category.map(el => (
            <div key={el._id}>
              <Link style={{textDecoration: 'none'}}  to={`/product/${el._id} `}>
              <ProductCard 
              key={el._id} btnClass="btn-aside" 
              pictures={el.pictures[0]} 
              title={el.title} 
              price={el.price}
              />
              </Link>
              </div>
              ))
          }
      </div>

    </article>
  )
}

export default ProductsSection