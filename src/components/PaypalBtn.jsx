import { useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

// Custom component to wrap the PayPalButtons and handle currency changes
export const PaypalBtn = ({ currency, showSpinner, amount }) => {
	// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
	// This is the main reason to wrap the PayPalButtons in a new component
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch({
			type: 'resetOptions',
			value: {
				...options,
				currency: currency,
			},
		});
	}, [currency, showSpinner]);
	// This values are the props in the UI
	const style = { layout: 'vertical' };

	return (
		<>
			{showSpinner && isPending && <div className='spinner' />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[amount, currency, style]}
				fundingSource={undefined}
        // data es la info de la orden 
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										currency_code: currency,
										value: amount,
									},
								},
							],
						})
						.then((orderId) => {
							// Your code here after create the order
							console.log('then');
							return orderId;
						});
				}}
				onApprove={function (data, actions) {
					return actions.order.capture().then(function () {
						// Your code here after capture the order
						console.log('APPROVE');
					});
				}}
			/>
		</>
	);
};
