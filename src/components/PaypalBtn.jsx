import { useEffect, useContext, useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { AuthContext } from '../contex/AuthContext';
import { ProductsContext } from '../contex/productsContext';
import { useNavigate } from 'react-router-dom';

export const PaypalBtn = ({ currency, showSpinner, amount }) => {
  const authCtx = useContext(AuthContext);
  const { currentUser } = authCtx;
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const productsCtx = useContext(ProductsContext);
  const {resetCart } = productsCtx;
  const navigate = useNavigate();

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

  const containerStyle = {
    width: '250px',
    margin: '0 auto',
    paddingTop: '1rem'
  };
  

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
      return orderId;
    });
  };

  const handleOnApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      // sending order number through params
      const orderId = data.orderID;
      navigate('/confirmationPage?orderNumber=' + orderId, { replace: true });
      resetCart()
    });
  };

  const handlePaypalButtonClick = () => {
    if (currentUser().loggedIn) {
      //Authenticated User: Allow the PayPal button action
      dispatch({ type: 'forceResolve' });
    } else {
      // Unauthenticated User: Redirect user to login page
      window.location.href = '/logIn';
    }
  };

  return (
    <>
    <div style={containerStyle} className='containerStyle'>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={!currentUser().loggedIn} //Disable the button if the user is not authenticated
        forceReRender={[amount, currency, style]}
        createOrder={handleCreateOrder}
        onApprove={handleOnApprove}
        onClick={handlePaypalButtonClick} // checks if user is authenticated to process the payment
      />
      </div>
    </>
  );
};
