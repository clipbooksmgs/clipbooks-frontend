import styles from './PersonCard.module.css';

import deleteIcon from '../../../delete.png';


const PersonCard = (props) => {

    const removeHandler = () =>  {

    }

    return (
        <div className={styles.layout}>            
            <span onClick={removeHandler} className={styles['close-button']}>
                <img src={deleteIcon} alt="delete-icon"/>
            </span>
            <div className={styles.card}>    
                {props.personName}
            </div>
        </div>
    )
}

export default PersonCard;