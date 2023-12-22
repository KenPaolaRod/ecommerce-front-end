import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../contex/productsContext'



function ProductDetail() {
  const productCtx = useContext(ProductsContext);
  const {products} = productCtx;
  const ProductId = useParams()


  console.log(ProductId.productId);

  // identificar cual es el id del producto que voy a mostrar
  const product = Array.isArray(products) ? products.find(product => product._id === ProductId.productId) : [];
  // const sizes =  Array.isArray(product.sizes) ? product

  



  // console.log(sizes);

  console.log(product);


  return (
    <article className='product-datails'>
      <img src={product.pictures} alt={product.description} />

      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <div className="product-color">
          <h2>Color</h2>
          <span style={{backgroundColor: product.colors}}>{product.colors}</span>
        </div>

        <div className="product-size">
          <h2>{product.sizes.join(" ")}</h2>
        </div>
      </div>

    </article>
  )
}

export default ProductDetail