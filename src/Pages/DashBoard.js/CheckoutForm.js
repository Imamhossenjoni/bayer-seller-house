import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = (order) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success,setSuccess]=useState('');
    const [transactionId, setTransactionId] = useState('');
    const { price } = order;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                };

            })
    }, [price])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            setCardError(error?.message);
        } else {
            setCardError('');
            setTransactionId(paymentMethod.id);
        }
        setSuccess('');
        //confirm card payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: order?.name,
                  email:order?.email
                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message);
          }else{
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your Payment is Completed');
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <span className='text-red-500'> {cardError}</span><br />
            {transactionId && <>
            <h2 className='text-success'>Congrats man!</h2>
            <p>Your Payment is Completed</p>
            <p className='text-red-500'>Your transactionId is: {transactionId}</p>
            </>}
            <button className='btn btn-info  text-white my-4' type="submit" disabled={!stripe || transactionId}>
                Pay
            </button>

        </form>
    );
};

export default CheckoutForm;