import { Link, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AccountSettings from './account-settings/AccountSettings';
import Pressclips from './pressclip-settings/Pressclips';
import styles from './Settings.module.css';

const Settings = () => {
    return (

        <div className={styles['main-container']}>
            <div className={styles['left-container']}>
                <ul>
                    <li><Link to='/user/settings/pressclips'>Press Clip Settings</Link></li>
                    <li><Link to='/user/settings/account'>Account Settings</Link></li>
                    <li><Link to='/user/settings/delivery'>Delivery Settings</Link></li>
                    <li><Link to='/user/settings/contactus'>Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles['right-conatiner']}>
                <Routes>
                    <Route path="/" element={<Navigate replace to={'/user/settings/pressclips'}/>}></Route>
                    <Route path="/pressclips" element={<Pressclips/>}/>
                    <Route path="/account" element={<AccountSettings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Settings;