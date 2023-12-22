import React, { useContext } from 'react';
import { ProductsContext } from '../../contex/productsContext';
import { Link } from 'react-router-dom';
import Button from '../Button';

function Aside() {
const prodctsCtx = useContext(ProductsContext)
const {selectedButton, handleButtonClick, categories} = prodctsCtx;

  return (

    <div className='aside'>
      {categories.map((category, i) => (
        <Link
          key={i}
          to={`/category/${encodeURIComponent(category)}`}
          className={`btn-aside ${selectedButton === i ? 'btnClicked' : ''}`}
          onClick={() => handleButtonClick(i)}
        >
          {category}
        </Link>
      ))}
    </div>

  )
}

export default Aside