import styles from './Header.module.css';
import clipbook_logo from '../../clipbook-logo.png';


const Header = ()=> {
    return <header className={styles.header}>
        <div className={styles.brand}>
            <img className={styles.logo} src={clipbook_logo} alt="clipbook-logo"/>
            <p className={styles.heading}>CLIPBOOK</p>
        </div>
    </header>
}

export default Header;

