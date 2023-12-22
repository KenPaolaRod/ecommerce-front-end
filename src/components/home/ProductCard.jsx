import React from 'react'

function ProductCard(props) {

  return (
    <div className='product-card'>
      <img src={`${props.pictures}`} alt={`${props.description}`} />
      <div className="Card-info">
        <h3>{props.title}</h3>
        <span itemProp='price'> {props.price} </span>
      </div>
    </div>
  )
}

export default ProductCard