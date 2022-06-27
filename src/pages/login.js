import styles from './login.module.css';
import clipbook_logo from '../Logo.png'
import Button from '../ui/Button';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../services/ClientService';
import { loggedIn } from '../store/LoggedInUserSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initalValues = {email:"",password:""};
    const intialFormErrorMsgs = {email:"", password: ""};

    const [formValues, setFormValues] = useState(initalValues);
    const [formErrors, setFormErrors] = useState(intialFormErrorMsgs);

    const formValidation = () =>{
        const {email, password} = formValues;
        const errMsgs = {};
        if(email.trim() === ''){
            console.log('email inside')
            errMsgs.email = 'Please Enter email.';
        }

        if(password.trim() === ''){
            errMsgs.password = 'Please Enter password.';
        }
        setFormErrors(errMsgs);
        return new Promise((resolve, reject) => {
            if(Object.keys(formErrors).length<=0){
                resolve(true);
            }else{
                resolve(false)
            }
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('hello');
        const isValid = await formValidation();
        if(isValid){
            const loggedInUser = await login(formValues);
            dispatch(loggedIn({userData: loggedInUser}));
            navigate('/user/settings/')
        }
    }

    const formFieldHandler = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }


    return (
         <div className={styles['main-content']}>
           <div className={styles['left-content']}>
                <div className={styles['login-container']}>
                    <header className={styles.header}>
                        <div className={styles.brand}>
                            <img className={styles.logo} src={clipbook_logo} alt="clipbook-logo"/>
                        </div>
                    </header>
                    <form  onSubmit={submitHandler} className={styles.form}>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email" placeholder='Email'
                            onChange={formFieldHandler}/>
                            <div className={styles.errMsgs}>{formErrors && formErrors.email}</div>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" placeholder='Password'
                            onChange={formFieldHandler}/>
                            <div className={styles.errMsgs}>{formErrors && formErrors.password}</div>
                        </div>
                        <div className={styles.button}>
                            <Button type="submit" label="Login"></Button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default Login;