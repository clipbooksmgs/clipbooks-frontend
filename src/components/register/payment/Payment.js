import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import { Route, Routes } from "react-router-dom";
import PaymentStatus from "./PaymentStatus";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {

   const subDetails =  useSelector(state => state.subscription.subscriptionDetails);
 
   const options = {
        // passing the client secret obtained in step 2
        clientSecret: subDetails.clientSecret,
        // Fully customizable with appearance API.
        appearance: {
            theme:'stripe',
        }
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <Routes>
                <Route path="checkout" element={<Checkout />}/>
                <Route path="status" element={<PaymentStatus/>}></Route>
            </Routes>
        </Elements>
    )
}


export default Payment;