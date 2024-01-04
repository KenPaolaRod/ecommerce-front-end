import React from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router-dom'


function ConfirmationPage() {
  const [searchParams] = useSearchParams();
const orderNumber = searchParams.get('orderNumber');

  return (
    <div>
      <Header/>
      <div>Thank you for your purchase, your order confirmation number is: {orderNumber}</div>
    </div>
  )
}

export default ConfirmationPage