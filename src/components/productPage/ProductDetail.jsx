import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ProductsContext } from '../../contex/productsContext'
import Button from '../Button'

function ProductDetail() {
  const productCtx = useContext(ProductsContext);
  const {products, addToCart} = productCtx;
  const ProductId = useParams();
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  const handleColorButtonClick = (index) => {
    setSelectedColor(index);
  };

  const handleSizeButtonClick = (index) => {
    setSelectedSize(index)
  };

  // const handleAddToCart = () => {
  //   if (selectedColor !== null && selectedSize !== null) {
  //     const selectedVariant = {
  //       id: product._id,
  //       title: product.title,
  //       price: product.price,
  //       color: product.colors[selectedColor],
  //       size: productSize[selectedSize],
  //     };

  //     // Llama a la función addToCart del contexto
  //     addToCart(selectedVariant);

  //     // Restablece los estados después de agregar al carrito si es necesario
  //     setSelectedColor(null);
  //     setSelectedSize(null);
  //   } else {
  //     // Puedes mostrar un mensaje de error si color y tamaño no están seleccionados
  //     console.log('Please select color and size before adding to cart');
  //   }
  // };

  // identify what is the id of the product to be displayed
  const product = Array.isArray(products) ? products.find(product => product._id === ProductId.productId) : [];
  const productSize =  product ? product.sizes : [];

  return (
    <article className='product-datails'>
      <img src={product.pictures || [] } alt={product.description || ''} />

      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product ? product.description : ''}</p>

        <div className="product-color">
          <h2>Color</h2>
          <div>
            {product.colors ? product.colors.map((color, index) => (
              <Button style={{backgroundColor: color}} key={index}  btnClass={selectedColor === index ? 'btnClicked' : ''} onClick={() => handleColorButtonClick(index)} />
              )) : <p>No colors to be show</p> }
          </div>
        </div>

        <div className="product-size">
          <h2>Size</h2>
          <div>{productSize ? productSize.map((size, index) => (
            <Button key={index} text={size} btnClass={`${selectedSize === index ? 'btnClicked' : ''}`} onClick={() => handleSizeButtonClick(index)} />
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