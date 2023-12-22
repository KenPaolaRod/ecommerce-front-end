import React from 'react'
import Aside from './Aside'

function ProductsSection() {
  return (
    <div className='products-section'>
      <Aside />

      {/* <div className='aside'>
{Array.isArray(products) && products.map(el => (
   <Button key={el._id} btnClass="btn-aside" text={el.category}/>)) }
</div> */}
    </div>
  )
}

export default ProductsSection