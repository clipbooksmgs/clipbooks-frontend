import {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import styles from './Checkout.module.css';
import Button from '../../../ui/Button';

const Checkout= () => {


    const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/payment/status',
      },
    });


    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };





  return (
        
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.errMsgs}>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </div>
        <PaymentElement />
        <div className={styles.button}>
            <Button isDisable={!stripe} type="submit" label="SUBMIT"></Button>
        </div>
    </form>

  );
};

export default Checkout;