import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../contex/productsContext'
import Aside from './Aside'
import ProductCard from './ProductCard'


function ProductsSection() {
  const productsCtx = useContext(ProductsContext)
  const {products, selectedCategory} = productsCtx;

  const category = Array.isArray(products) ? products.filter((el) => el.category === selectedCategory ) : [];
  
            
  return (
    <article className='products-section'>
      <Aside />
      <div className='cards-container'>
      <h1>{selectedCategory}</h1>

        {
          category.map(el => (
            <ProductCard key={el._id} btnClass="btn-aside" pictures={el.pictures[0]} title={el.title} price={el.price}/>))
        }
      </div>

    </article>
  )
}

export default ProductsSection