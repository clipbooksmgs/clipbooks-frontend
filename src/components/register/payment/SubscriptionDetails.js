import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClient } from "../../../services/ClientService";
import { clientCreated } from "../../../store/ClientSlice";
import { created } from "../../../store/SubscriptionSlice";
import Button from "../../../ui/Button";
import Table from "../../../ui/Table";


import styles from './SubscriptionDetails.module.css';

const SubscriptionDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const client = useSelector(state => state.client.client);
    const products = useSelector(state => state.product.products);
    const selectedProduct = products.find(prod => prod.stripeProdId === client.subscription.prodId);
    const {firstname, lastname,organization,email} = client;
    const signupDetails = {firstname,lastname,organization,email};
    const {name,period,price} = selectedProduct;
    const subscriptionDetails = {
        'Subscription Plan': name,
        'Duration': period,
        'price': price
    }


    const backHandler = () => {
        navigate(-1);
    }

    const cancelHandler = () => {
        sessionStorage.removeItem('clientFormData');
        navigate('/');
    }

    const checkoutHandler = async () =>{
        const newClient= {...client}
        newClient.subscription = {  
            prodId: selectedProduct.stripeProdId,
            priceId: selectedProduct.stripePriceId
        };
        dispatch(clientCreated({"client":newClient}));
        const subscriptionDetails = await createClient(newClient);
        dispatch(created({subscriptionDetails}))
        sessionStorage.removeItem('clientFormData');
        navigate('/payment/checkout');
    }

    return <div className={styles.container}>
        <div className={styles['details']}>
            <h3 className={styles.header}>Signup Details</h3>
            <Table dataObject={signupDetails}/>
        </div>
        <div className={styles['details']}>
            <h3 className={styles.header}>Subscription Details</h3>
            <Table dataObject={subscriptionDetails}/>
        </div>
        <div className={styles['button-group']}>
            <Button type="button" buttonHandler= {cancelHandler} label="CANCEL"/>
            <Button type="button" buttonHandler = {backHandler} label="BACK"/>
            <Button type="button" buttonHandler = {checkoutHandler} label="CHECKOUT"/>
        </div>
    </div>
}

export default SubscriptionDetails;