import React from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router-dom'
import Footer from './Footer';


function ConfirmationPage() {
  const [searchParams] = useSearchParams();
const orderNumber = searchParams.get('orderNumber');

  return (
    <div>
      <Header/>
      <div className='confirmationPage'>
        <p>Thank you for your purchase, your order confirmation number is: {orderNumber}</p>
      </div>
      <Footer />
    </div>
  )
}

export default ConfirmationPage