import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../services/ClientService";
import AccountForm from "../../account-form/AccountForm";
import SettingsLayout from "../SettingsLayout";
import styles from './AccountSettings.module.css';
import { loggedIn } from "../../../store/LoggedInUserSlice";


const AccountSettings = () => {

    const [errMsg, setErrMsg] = useState();
    const editingState = useState(false);
    const dispatch = useDispatch();
    

    const submitHandler = async (client) => {
        try{
            const response = await update(client);
            console.log(response);
            dispatch(loggedIn({userData: response}));
            editingState[1](false);
            
        }catch(err){
            setErrMsg(err.message);
        }
    }


    return (
        <SettingsLayout heading="Account Settings">
            <p  className={styles.errMsgs}>{errMsg}</p>
           <AccountForm submitHandler={submitHandler} editingState={editingState}  editingForm={true}/>
        </SettingsLayout>
    );
}

export default AccountSettings;