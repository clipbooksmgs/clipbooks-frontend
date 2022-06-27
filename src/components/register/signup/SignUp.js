import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PageDescription from '../PageDescription';
import styles from './SignUp.module.css';
import { clientCreated } from '../../../store/ClientSlice';
import AccountForm from '../../account-form/AccountForm';

const stepNo = 'STEP 2 OF 3';
const title = 'Create Your Account';
const description = 'Use your email and password to receive clips';



const SignUp = () => {

    
    const dispatch = useDispatch();
    const navitage = useNavigate();
    const params = useParams();

    
    const [errMsg, setErrMsg] = useState();

   

    
    const products = useSelector(state => state.product.products);
    const selectedProduct = products.find(prod => prod.stripeProdId === params.id);


    

   



    const submitHandler = async (client) => {
            setErrMsg('');
            client.subscription = {
                prodId: params.id
            }
    
            try{
                dispatch(clientCreated({client: client}));
                sessionStorage.setItem('clientFormData', JSON.stringify(client));
                navitage('/subdetails');
            }catch(err){
                console.log(err.message);
                setErrMsg(err.message);
            }
    }



    return (
        
    <div className={styles['main-content']}>
        <PageDescription stepNo={stepNo} title={title} description={description}>
        </PageDescription>
            <p  className={styles.errMsgs}>{errMsg}</p>
        <AccountForm submitHandler={submitHandler} selectedProduct={selectedProduct}/>
    </div>
    )
}

export default SignUp;