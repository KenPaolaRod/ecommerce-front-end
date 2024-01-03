import { useEffect, useContext, useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { AuthContext } from '../contex/AuthContext';
import { ProductsContext } from '../contex/productsContext';


export const PaypalBtn = ({ currency, showSpinner, amount }) => {
  const authCtx = useContext(AuthContext);
  const { isLogIn } = authCtx;
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [orderProcessed, setOrderProcessed] = useState(false);
  const productsCtx = useContext(ProductsContext);
  const { cart } = productsCtx;

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const style = { layout: 'vertical' };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
        },
      ],
    }).then((orderId) => {
      // here I can show the confirmation with the order id
      console.log('then', orderId);
      return orderId;
    });
  };

  const handleOnApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      console.log('APPROVE', data);
      setOrderProcessed(true)
    });
  };

  const handlePaypalButtonClick = () => {
    if (isLogIn) {
      //Authenticated User: Allow the PayPal button action
      dispatch({ type: 'forceResolve' });
    } else {
      // Unauthenticated User: Redirect user to login page
      window.location.href = '/login';
    }
  };

  return (
    <>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={!isLogIn} //Disable the button if the user is not authenticated
        forceReRender={[amount, currency, style]}
        createOrder={handleCreateOrder}
        onApprove={handleOnApprove}
        onClick={handlePaypalButtonClick} // checks if user is authenticated to process the payment
      />
      {orderProcessed && <p>Order processed and approved successfully</p> }
    </>
  );
};
