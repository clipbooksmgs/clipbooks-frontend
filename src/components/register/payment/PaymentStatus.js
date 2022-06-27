import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useStripe} from '@stripe/react-stripe-js';
import styles from './PaymentStatus.module.css';



const PaymentStatus = () => {

  const navigate = useNavigate();
  const stripe = useStripe();
  const [message, setMessage] = useState(null);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Success! Payment received.');
            break;

          case 'processing':
            setMessage("Payment processing. We'll update you when payment is received.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);

  const redirect = () => {
    setTimeout(()=>{
      navigate('/login');
    },5000)
  }


  return (
    <div className={styles.container}>
       <p className={styles.message}>{message}</p>
        <div className={styles.details}>
          <p>Will redirect to login page in 5 secs...</p>
          {redirect()}
        </div>
    </div>
  );
};

export default PaymentStatus;