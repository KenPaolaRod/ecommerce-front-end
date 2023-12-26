import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../contex/productsContext'
import Button from './Button'



function ProductDetail() {
  const productCtx = useContext(ProductsContext);
  const {products} = productCtx;
  const ProductId = useParams();

  // identify what is the id of the product to be displayed
  const product = Array.isArray(products) ? products.find(product => product._id === ProductId.productId) : [];
  const productSize =  product.sizes;

  return (
    <article className='product-datails'>
      <img src={product.pictures} alt={product.description} />

      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <div className="product-color">
          <h2>Color</h2>
          <div>
            {product.colors ? product.colors.map((color, index) => (
              <Button style={{backgroundColor: color}} btnClass='color' key={index}  />
              )) : <p>No colors to be show</p> }
          </div>
        </div>

        <div className="product-size">
          <h2>Size</h2>
          <div>{productSize ? productSize.map((size, index) => (
            <Button key={index} text={size} btnClass='size'  />
          )) : <p>There is not sizes to show</p> }
          </div>
        </div>

        <div className="price">
          <h2>Price</h2>
          <span>${product.price}</span>
        </div>

        <Button btnClass='addToCard' text='add to cart' />

      </div>

    </article>
  )
}

export default ProductDetail