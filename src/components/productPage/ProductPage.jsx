import React, {useContext} from 'react'
import {ProductsContext} from '../../contex/productsContext'
import Header from '../header'
import ProductDetail from './ProductDetail'


function  ProductPage() {

  return (
    <div>
      <Header/>
      <ProductDetail/>

    </div>
  )
}

export default  ProductPage