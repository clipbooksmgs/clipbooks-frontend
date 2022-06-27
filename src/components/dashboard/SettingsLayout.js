import styles from './SettingsLayout.module.css';

const SettingsLayout = (props) => {
    return <div className={styles['main-container']}>
        <h1 className={styles.heading}>{props.heading}</h1>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

export default SettingsLayout;