import styles from './AddModal.module.css';
import Button from '../../../ui/Button';
import { useState } from 'react';

const AddModal = (props) => {

    const [modal, setModal] = props.modalState;
    const [value, setValue] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const closeButtonHanlder = () => {
        setModal(false);
    }

    const addButtonHandler = () => {
        if(value.trim().length===0){
            setErrMsg('Field should not be empty');
            return;
        }
        const regExp = new RegExp('[a-zA-Z\\s]{4,}');
        if(value.match(regExp)){
            props.buttonHandler(value);
            setErrMsg('');
            setValue('');
            setModal(false);
            return;
        }
        setErrMsg('value should contain only alphabet and requires min 4 characters');
        
    }

    const nameFieldHandler = (event) => {
        setValue(event.target.value);
    }
    

    return (
       <div>
            <div className={`${styles.modal} ${modal?styles['show-modal']:''}`} >
                <div className={styles['modal-content']} >
                    <span onClick={closeButtonHanlder} className={styles['close-button']}>&times;</span>
                    <div className={styles['add-section']}>
                        <div>
                            <label>{props.label}</label>
                            <input type="text" name="value" onChange={nameFieldHandler} value={value}/>
                            <span className={styles.errMsg}>{errMsg}</span>
                        </div>
                        <div className={styles.button}>
                            <Button type='button' buttonHandler={closeButtonHanlder} label="Cancel"/>
                            <Button type='button' buttonHandler={addButtonHandler} label="Add"/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}


export default AddModal;