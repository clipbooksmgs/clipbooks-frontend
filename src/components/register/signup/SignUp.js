import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../ui/Button';
import PageDescription from '../PageDescription';
import styles from './SignUp.module.css';
import { clientCreated } from '../../../store/ClientSlice';

const stepNo = 'STEP 2 OF 3';
const title = 'Create Your Account';
const description = 'Use your email and password to receive clips';



const SignUp = () => {

    
    const dispatch = useDispatch();
    const navitage = useNavigate();
    const params = useParams();

    let formInitValues = {
        "firstname":'',
        "lastname":'',
        "organization": '',
        "email": '',
        "password":''
    };


    const [formValues, setFormValues] = useState(formInitValues);

    useEffect(()=> {
        const sessionFormValues =sessionStorage.getItem('clientFormData');
        if(sessionFormValues!=null){
            setFormValues(JSON.parse(sessionFormValues));
        }
    }, [])

    const [errMsg, setErrMsg] = useState();
    const [fieldErrMsgs, setFieldErrMsgs] = useState({});
    const products = useSelector(state => state.product.products);
    const selectedProduct = products.find(prod => prod.stripeProdId === params.id);


    const formFieldHandler = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    const formValidation = (client) => {
        const errMsg = {};
        if(client.firstname.trim() === ''){
            errMsg.firstname = 'Firstname should not be empty';
        }
        if(client.lastname.trim() === ''){
            errMsg.lastname = 'Lastname should not be empty';
        }
        if(client.email.trim() === ''){
            errMsg.email = 'Email should not be empty';
        }

        if(selectedProduct.category === 'govt' && !client.email.includes("govt.")){
            errMsg.category = 'As selected subscription is under govt plan, please provide govt email';
        }

        if(client.password.trim() === '' || client.password.length <8){
            errMsg.password = 'Password should be of min 8 characters';
        }
        setFieldErrMsgs(errMsg);
        return new Promise((resolve,reject)=> {
            if(Object.keys(errMsg).length<=0){
                resolve(true);
            }else{
                resolve(false)
            }
        })
        
    }



    const submitHandler = async (event) => {
        event.preventDefault();
        setErrMsg('');
        const client= formValues;
        const result = await formValidation(client);
        console.log(result)
        if(result){
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


    }



    return (
        
    <div className={styles['main-content']}>
        <PageDescription stepNo={stepNo} title={title} description={description}>
        </PageDescription>
            <p  className={styles.errMsgs}>{errMsg}</p>
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.name}>
                <div className={styles['input-field-group']}>
                    <input className={styles['input-field']} 
                    type="text" name="firstname"
                    placeholder='Firstname' 
                    value={formValues.firstname}
                    onChange={formFieldHandler} />
                    <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.firstname}</p>
                </div>
                <div className={styles['input-field-group']}>
                    <input className={styles['input-field']} 
                    type="text" 
                    name="lastname"
                    placeholder='Lastname' 
                    value={formValues.lastname}  
                    onChange={formFieldHandler} />
                    <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.lastname}</p>
                </div>
            </div>

            <div className={styles['input-field-group']}>
                <input className={styles['input-field']} 
                type="text" name="organization"
                placeholder='Principal Organization [Optional]'
                value={formValues.organization}
                onChange={formFieldHandler} />
                
            </div>
            <div className={styles['input-field-group']}>
                <input className={styles['input-field']} 
                type="email" name="email"
                placeholder='Email'  
                value={formValues.email}
                onChange={formFieldHandler}/>
                <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.email} </p>
                <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.category}</p>
            </div>

            <div className={styles['input-field-group']}>
                <input className={styles['input-field']} 
                type="password" name="password"
                placeholder='Password'  
                value={formValues.password}
                onChange={formFieldHandler} />
                <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.password}</p>
            </div>

            <div className={styles.button}>
                <Button type="submit" label="CREATE ACCOUNT"></Button>
            </div>
        </form>
    </div>
    )
}

export default SignUp;