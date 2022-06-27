import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../services/ClientService';
import Button from '../../ui/Button';
import styles from './AccountForm.module.css';


const AccountForm = (props) => {


    let formInitValues = {
        "firstname":'',
        "lastname":'',
        "organization": '',
        "email": '',
    };

    if(!props.editingForm){
        formInitValues.password ='';
    }

    
    const [formValues, setFormValues] = useState(formInitValues);

    const userData = useSelector((state) => state.loggedInUser.userData);

    useEffect(()=> {
        if(!props.editingForm){
            const sessionFormValues =sessionStorage.getItem('clientFormData');
            if(sessionFormValues!=null){
                setFormValues(JSON.parse(sessionFormValues));
            }
        }else if(props.editingForm){
           getUser(userData.email).then(
            (data) => {
                const userInfo = {...data};
                setFormValues(userInfo);
            }
           )
        }
    }, [])


    const [fieldErrMsgs, setFieldErrMsgs] = useState({});


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

        if(!props.editingForm){
            if(props.selectedProduct.category === 'govt' && !client.email.includes("govt.")){
                errMsg.category = 'As selected subscription is under govt plan, please provide govt email';
            }

            if(client.password.trim() === '' || client.password.length <8){
                errMsg.password = 'Password should be of min 8 characters';
            }
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
        const client= formValues;
        const result = await formValidation(client);
        if(result){
            props.submitHandler(client);
        }
    }

    const editButtonHandler = () =>{
        props.editingState[1](true);
    }




    return (
        <form onSubmit={submitHandler} className={styles.form}>
            { formValues.id &&
            
                <div className={styles['input-field-group']}>
                    <input className={styles['input-field']} 
                    type="text" name="id"
                    placeholder='id'
                    value={formValues.id}
                    onChange={formFieldHandler} 
                    disabled={props.editingForm && !props.editingState[0]}
                    hidden={true} />
                    
                </div>
            }
            <div className={styles.name}>
                <div className={styles['input-field-group']}>
                    <input className={styles['input-field']} 
                    type="text" name="firstname"
                    placeholder='Firstname' 
                    value={formValues.firstname}
                    onChange={formFieldHandler}
                    disabled={props.editingForm && !props.editingState[0]} />
                    <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.firstname}</p>
                </div>
                <div className={styles['input-field-group']}>
                    <input className={styles['input-field']} 
                    type="text" 
                    name="lastname"
                    placeholder='Lastname' 
                    value={formValues.lastname}  
                    onChange={formFieldHandler} 
                    disabled={props.editingForm && !props.editingState[0]}/>
                    <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.lastname}</p>
                </div>
            </div>

            <div className={styles['input-field-group']}>
                <input className={styles['input-field']} 
                type="text" name="organization"
                placeholder='Principal Organization [Optional]'
                value={formValues.organization}
                onChange={formFieldHandler} 
                disabled={props.editingForm && !props.editingState[0]}/>
                
            </div>
            <div className={styles['input-field-group']}>
                <input className={styles['input-field']} 
                type="email" name="email"
                placeholder='Email'  
                value={formValues.email}
                onChange={formFieldHandler}
                disabled={props.editingForm && !props.editingState[0]}/>
                <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.email} </p>
                <p className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.category}</p>
            </div>

            <div className={`${styles['input-field-group']} ${props.editingForm && styles.blocked}`}>
                <input className={styles['input-field']} 
                type="password" name="password"
                placeholder='Password'  
                value={formValues.password}
                onChange={formFieldHandler}
                 />
                <span className={styles.errMsgs}>{fieldErrMsgs && fieldErrMsgs.password}</span>
            </div>

            <div className={styles.button}>
                {!props.editingForm && <Button type="submit" label='CREATE ACCOUNT'></Button>}
                {(props.editingForm && props.editingState[0]) && <Button type="submit" label='UPDATE'></Button>}
                {(props.editingForm && !props.editingState[0]) && <Button type="button" buttonHandler={editButtonHandler}  label='EDIT'></Button>}
            </div>
        </form>
    );
}


export default AccountForm;