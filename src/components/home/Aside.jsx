import React, { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../../contex/productsContext';
import Button from '../Button';

function Aside() {
const prodctsCtx = useContext(ProductsContext)
const {selectedButton, handleButtonClick, categories} = prodctsCtx;

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