import React, { useEffect, useState, useContext } from 'react'
import { ProductsContext } from '../../contex/productsContext'

function Aside() {
const categoriesCtx = useContext(ProductsContext)
const { products } = categoriesCtx;

useEffect(() => {
if (Array.isArray(products)) {
  products.forEach(objeto => {
    const categoria = objeto.category;
    console.log(categoria);
    // Puedes hacer lo que necesites con la propiedad "category" aquí
  });
} else {
  console.error('La respuesta no es un array:', products);
}
},[products])


  return (
    <div>NavSection</div>
  )
}

export default Aside