import React, { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../../contex/productsContext';
import Button from '../Button';

function Aside() {
const prodctsCtx = useContext(ProductsContext)
const {selectedButton, handleButtonClick} = prodctsCtx;

const categories = ["Coats", "Tops", "Pants"]


{/* <div className='aside'>
{Array.isArray(products) && products.map(el => (
   <Button key={el._id} btnClass="btn-aside" text={el.category}/>)) }
</div> */}
  
  return (
    <div className='aside'>
      {
        categories.map((category, i) => (
          <Button 
            key={i} 
            btnClass={`btn-aside ${selectedButton === i ? 'btnClicked' : ''}`}
            text={category}
            onClick={() => handleButtonClick(i)}
           />
          ))}
    </div>

  )
}

export default Aside